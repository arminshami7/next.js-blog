import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

// این تابع در سمت سرور اجرا میشه!
function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export default function Home() {
  const allPosts = getPosts();

  return (
      <section className=" flex flex-col items-center">

        <h1 className="text-5xl font-extrabold text-center my-12
         ">
          <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text
         text-transparent">The Next.js Blog</span></h1>
        <div className="w-full max-w-4xl">
          <h2 className=" text-3xl font-bold mb-8">Latest Posts</h2>

          <div className="flex flex-col gap-6">

          {allPosts.map(({ id, title, date }) => (
            
              <Link href={`/posts/${id}`} className="block bg-slate-800 p-6
               rounded-lg shadow-md hover:bg-slate-700 hover:shadow-lg 
               transition-all duration-300">
              <div>
              <h3 className="text-2xl font-bold text-blue-400">{title}</h3>
              <p className="text-gray-400 mt-2 text-sm">{date}</p>

              </div>
            </Link>
          ))}
          </div>
        </div>
      </section>
    
  );
}