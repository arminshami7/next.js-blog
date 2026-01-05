# Next.js Blog with Markdown

<img width="1898" height="1085" alt="Image" src="https://github.com/user-attachments/assets/4224805a-3a29-4065-a20e-fd840c672763" />

> A fast, modern, and SEO-friendly blog built with Next.js and Tailwind CSS. This project demonstrates server-side rendering capabilities by fetching and rendering content from local Markdown files.

**Live Demo:** [https://nextjs-blog.vercel.app/](https://arminshami7-nextjs-blog.vercel.app/)

---

## 🚀 Features

-   **Server-Side Rendering (SSR/SSG):** Posts are pre-rendered on the server for maximum performance and excellent SEO.
-   **Markdown-Based Content:** Blog posts are written in simple `.md` files, separating content from code.
-   **Dynamic Routing:** Each post automatically gets its own unique URL (e.g., `/posts/hello-nextjs`).
-   **Fully Responsive Design:** A clean and readable layout that works perfectly on all screen sizes.
-   **Modern Styling:** Styled with Tailwind CSS, including the `prose` plugin for beautiful typography.

---

## 🛠️ Tech Stack & Tools

This project was built using the following technologies:

-   **Framework:**
    -   [**Next.js**](https://nextjs.org/): The React framework for production.
-   **Styling:**
    -   [**Tailwind CSS**](https://tailwindcss.com/): A utility-first CSS framework.
-   **Content Processing:**
    -   [**Gray-matter**](https://github.com/jonschlinkert/gray-matter): To parse metadata from Markdown files.
    -   [**Remark**](https://github.com/remarkjs/remark): To parse and convert Markdown to HTML.
-   **Deployment:**
    -   [**Vercel**](https://vercel.com/): The platform for hosting Next.js applications.
-   **Version Control:**
    -   [**Git & GitHub**](https://github.com/arminshami7/nextjs-blog): For source code management.

---

## 📝 What I Learned

This project was my introduction to the Next.js ecosystem and server-side concepts. Key takeaways include:

-   **Understanding Server Components:** I learned how Next.js can run code (like reading files with Node.js `fs` module) on the server before sending the page to the client.
-   **File-Based Routing:** I experienced the power and simplicity of Next.js's App Router, creating both static and dynamic routes just by organizing folders and files.
-   **Static Site Generation (SSG):** I learned how `generateStaticParams` works to pre-build pages at build time, resulting in an incredibly fast user experience.
-   **Advanced Debugging:** I faced and resolved complex issues related to package versions and build tool configurations, significantly improving my problem-solving skills.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or higher)
-   npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/arminshami7/nextjs-blog.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Start the development server
    ```sh
    npm run dev
    ```