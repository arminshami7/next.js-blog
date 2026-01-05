import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import React from 'react';

const postsDirectory = path.join(process.cwd(), 'posts');

// تابع کمکی برای خواندن اطلاعات تمام پست‌ها (فقط شناسنامه)
export function getSortedPostsData() {;
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// تابع کمکی برای خواندن محتوای کامل یک پست
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

// ۱. لیست مهمان‌ها رو به Next.js میدیم
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

// ۲. متادیتای صفحه رو داینامیک می‌کنیم
export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id);
  return {
    title: postData.title,
  };
}

// ۳. کامپوننت اصلی صفحه
export default async function Post({ params }) {
  const postData = await getPostData(params.id);
  console.log("Final postData before render:", postData); // <-- این لاگ رو اضافه کن


  return (
    <main className="container mx-auto p-4">
        <article>
      <div className="my-8">
        <Link href="/" className="text-blue-400 hover:underline
          transition-colors duration-300">
          &larr; Back to All Posts
        </Link>
      </div>
      <header className="mb-8 borser-b borser-slate-700 pb-8">
        <h1 className="text-4xl md:text-5xl font-exrabold text-white
        mb-3 leading-tight text-blue-400">{postData.title}</h1>
        <p className="text-gray-400 text-lg"> Published on {postData.date}</p>
        </header>
         
         <hr className="border-slate-700 my-8" />

        <div className="prose prose-invert prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </main>
  );
}