import React from "react";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "My Journey as a Developer",
      date: "October 2025",
      content: `My name is Oseh Thomas, and my journey into tech started with curiosity and creativity.
      I’ve always loved colors, motion, and building things that people can use. Over time, I learned how
      to design and code websites that bring ideas to life.`,
    },
    {
      id: 2,
      title: "How I Built This Website",
      date: "October 2025",
      content: `This personal website was built using React and Tailwind CSS. My goal was to create something
      that reflects my style — colorful, creative, and easy to navigate. I wanted each section to tell my story.`,
    },
    {
      id: 3,
      title: "5 Tools I Use Daily",
      date: "October 2025",
      content: `Here are five tools that make my workflow smooth: Visual Studio Code, Figma, GitHub, Canva, 
      and ChatGPT. Each of them helps me build better, faster, and smarter.`,
    },
  ];

  return (
    <section id="blog" className="bg-white/60 backdrop-blur rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">Blog & Insights</h3>
      <p className="text-center text-gray-700 mb-8">
        Here I share my thoughts, experiences, and lessons from my creative journey.
      </p>

      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
          >
            <h4 className="text-xl font-semibold mb-1">{post.title}</h4>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
