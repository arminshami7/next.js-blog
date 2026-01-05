// src/app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "My Next.js Blog",
  description: "A blog built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        <main className="container mx-auto max-w-4xl p-4">
          {children}
        </main>
      </body>
    </html>
  );
}