import React from "react";

export default function Blog() {
  const posts = [
    {
      title: "Welcome to My Blog!",
      date: "October 2025",
      summary: "This is where I share my creative ideas, design tips, and code experiments.",
      link: "#",
    },
    {
      title: "How I Built My Portfolio Site",
      date: "October 2025",
      summary: "A colorful journey of how I created my React + TailwindCSS personal website.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-cyan-50 text-gray-900 antialiased">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <p className="text-gray-600 mt-2">Stories, tutorials, and creativity in motion</p>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-8">
        {posts.map((post, i) => (
          <article key={i} className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-3">{post.date}</p>
            <p className="text-gray-700 mb-3">{post.summary}</p>
            <a href={post.link} className="text-indigo-600 underline">Read more →</a>
          </article>
        ))}
      </main>

      <footer className="text-center text-gray-500 text-sm py-10 border-t border-gray-200">
        © {new Date().getFullYear()} Oseh Thomas · Built with ❤️  
        <div className="mt-2">
          <a href="mailto:osehthomas7@gmail.com" className="text-indigo-600 underline">
            osehthomas7@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
