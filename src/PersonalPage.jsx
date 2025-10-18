import React from "react";

export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-violet-50 to-cyan-50 text-gray-900 antialiased">
      
      {/* Header */}
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold shadow-lg">
            OT
          </div>
          <div>
            <h1 className="text-lg font-semibold">Oseh Thomas</h1>
            <p className="text-sm opacity-80">Creative Developer & Designer</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="hidden md:flex gap-4 items-center text-gray-700">
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://instagram.com/yourinstagram" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </header>

      {/* Intro Section */}
      <main className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <section className="md:col-span-3 bg-white/60 backdrop-blur rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/profile.jpg"
              alt="Oseh Thomas"
              className="w-36 h-36 rounded-full object-cover ring-4 ring-white shadow-xl transform hover:scale-105 transition"
            />
            <div>
              <h2 className="text-3xl font-extrabold">Hi — I’m Oseh Thomas.</h2>
              <p className="mt-2 text-lg opacity-90">
                I build colorful, playful interfaces and craft delightful digital experiences.
                I combine design thinking with practical code to bring ideas to life.
              </p>
              <div className="mt-4 flex gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-indigo-500 text-white font-medium shadow-lg hover:scale-105 transition"
                >
                  Get in touch
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-white/60 transition"
                >
                  See my work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="max-w-5xl mx-auto px-6 py-16 md:col-span-3">
          <h2 className="text-3xl font-extrabold mb-10 text-indigo-600 text-center">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1 */}
            <div className="bg-white/70 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project 1"
                className="rounded-t-2xl object-cover w-full h-48"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Creative Portfolio</h3>
                <p className="text-gray-600 mb-3">
                  A colorful portfolio website showcasing design and development skills.
                </p>
                <a
                  href="https://yourprojectlink1.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white/70 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project 2"
                className="rounded-t-2xl object-cover w-full h-48"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Interactive UI</h3>
                <p className="text-gray-600 mb-3">
                  An interactive React app with animations and responsive design.
                </p>
                <a
                  href="https://yourprojectlink2.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white/70 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project 3"
                className="rounded-t-2xl object-cover w-full h-48"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Personal Blog</h3>
                <p className="text-gray-600 mb-3">
                  A blog design that blends vibrant visuals with a clean layout.
                </p>
                <a
                  href="https://yourprojectlink3.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 underline hover:text-indigo-800"
                >
                  View Project →
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-5xl mx-auto px-6 py-16 md:col-span-3">
          <h2 className="text-3xl font-extrabold mb-6 text-pink-600 text-center">Get In Touch</h2>
          <p className="text-lg mb-6 text-center text-gray-700">
            I’d love to collaborate or chat about creative ideas! You can reach me here:
          </p>
          <div className="text-center space-y-3">
            <p>
              📧 Email:{" "}
              <a href="mailto:osehthomas7@gmail.com" className="text-indigo-600 underline">
                osehthomas7@gmail.com
              </a>
            </p>
            <p>
              🌍 Website:{" "}
              <a href="https://yourwebsite.com" target="_blank" rel="noreferrer" className="text-indigo-600 underline">
                yourwebsite.com
              </a>
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}