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
        {/* Social Links */}
<div className="hidden md:flex gap-4 items-center text-gray-700">
  <a href="https://github.com/osehthomas7-sudo" target="_blank" rel="noreferrer">GitHub</a>
  <a href="https://linkedin.com/in/osehthomas7" target="_blank" rel="noreferrer">LinkedIn</a>
  <a href="https://instagram.com/osehthomas7" target="_blank" rel="noreferrer">Instagram</a>
</div>

        <div className="hidden md:flex gap-4 items-center text-gray-700">
          <a href="https://github.com/osehthomas7-sudo" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/osehthomas7" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://instagram.com/osehthomas7" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Hero Section */}
        <section className="bg-white/60 backdrop-blur rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src="/profile.jpg" alt="Oseh Thomas" className="w-36 h-36 rounded-full object-cover ring-4 ring-white shadow-xl transform hover:scale-105 transition" />
            <div>
              <h2 className="text-3xl font-extrabold">Hi — I’m Oseh Thomas.</h2>
              <p className="mt-2 text-lg opacity-90">
                I build colorful, playful interfaces and craft delightful digital experiences. I combine design thinking with practical code to bring ideas to life.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-indigo-500 text-white font-medium shadow-lg">Get in touch</a>
                <a href="#work" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-white/60">See my work</a>
                <a href="#services" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-white/60">Hire me</a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-white/60 backdrop-blur rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Services I Offer</h3>
          <p className="mb-6 text-gray-700">I offer website design, UI/UX, branding, and small web apps. Prices are starting points — contact me for a custom quote.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-xl shadow">
              <h4 className="font-semibold text-lg">Website Design</h4>
              <p className="text-sm text-gray-600 my-2">Responsive, fast, and colorful sites for any business or portfolio.</p>
              <p className="text-sm font-medium">Starting at $150</p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow">
              <h4 className="font-semibold text-lg">UI/UX & Prototypes</h4>
              <p className="text-sm text-gray-600 my-2">Clickable prototypes and product design systems.</p>
              <p className="text-sm font-medium">Starting at $100</p>
            </div>
            <div className="p-5 bg-white rounded-xl shadow">
              <h4 className="font-semibold text-lg">Small Web Apps</h4>
              <p className="text-sm text-gray-600 my-2">React-based interactive apps and dashboards.</p>
              <p className="text-sm font-medium">Starting at $200</p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="bg-white/60 backdrop-blur rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Latest Blog Posts</h3>
          <p className="mb-6 text-gray-700">I share thoughts, design inspiration, and coding tutorials.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">How I Built My Creative Portfolio</h4>
              <p className="text-sm text-gray-600">Behind the scenes on design, animations, and hosting setup.</p>
              <a href="#" className="text-indigo-600 underline mt-2 inline-block">Read more →</a>
            </div>
            <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Top 5 Tools for Creative Developers</h4>
              <p className="text-sm text-gray-600">These apps and libraries help me work faster and more creatively.</p>
              <a href="#" className="text-indigo-600 underline mt-2 inline-block">Read more →</a>
            </div>
            <div className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">My Freelance Journey (and Lessons)</h4>
              <p className="text-sm text-gray-600">How I started taking clients and built my own brand online.</p>
              <a href="#" className="text-indigo-600 underline mt-2 inline-block">Read more →</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* Support & Resources Section */}
<section id="support" className="bg-white/60 backdrop-blur rounded-2xl p-8 shadow-lg">
  <h3 className="text-2xl font-bold mb-4">Support & Resources</h3>

  <div className="grid md:grid-cols-2 gap-6">
    {/* Affiliate Tools */}
    <div>
      <h4 className="font-semibold">Recommended Tools</h4>
      <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
        <li>
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer" className="text-indigo-600 underline">
            Figma — Free Design Tool
          </a>
        </li>
        <li>
          <a href="https://www.hostinger.com/?REFERRALCODE=osehthomas7" target="_blank" rel="noreferrer" className="text-indigo-600 underline">
            Hostinger — Reliable Hosting
          </a>
        </li>
        <li>
          <a href="https://www.canva.com/" target="_blank" rel="noreferrer" className="text-indigo-600 underline">
            Canva — Design Anything Easily
          </a>
        </li>
      </ul>
      <p className="text-xs text-gray-500 mt-2">
        I may earn a small commission if you use these links — it helps support my work 🙏
      </p>
    </div>

    {/* Support / Donation */}
    <div>
      <h4 className="font-semibold">Support My Work</h4>
      <p className="text-sm text-gray-700 mt-2">If you enjoy my designs and content, consider supporting me below 💕</p>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="https://paypal.me/osehthomas7"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-5 py-2 rounded bg-yellow-400 text-black font-medium shadow"
        >
          Donate via PayPal
        </a>

        <a
          href="https://www.buymeacoffee.com/osehthomas7"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-5 py-2 rounded bg-amber-600 text-white font-medium shadow"
        >
          Buy Me a Coffee
        </a>
      </div>
    </div>
  </div>
</section>

        <section id="contact" className="bg-white/60 backdrop-blur rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Contact / Hire Me</h3>
          <p className="text-center text-gray-700 mb-6">Send me a message — I usually reply within 24 hours.</p>
          <div className="max-w-2xl mx-auto">
            <form action="https://formspree.io/f/xdkwjgpe" method="POST" className="grid gap-3">
              <input type="text" name="name" placeholder="Your name" required className="p-3 rounded border" />
              <input type="email" name="_replyto" placeholder="Your email" required className="p-3 rounded border" />
              <textarea name="message" rows="6" placeholder="Your message..." required className="p-3 rounded border"></textarea>
              <button type="submit" className="px-6 py-2 rounded bg-indigo-600 text-white font-medium">Send Message</button>
            </form>
          </div>
        </section>

        {/* Footer with Email */}
        <footer className="text-center text-gray-500 text-sm py-6">
          <p>© {new Date().getFullYear()} Oseh Thomas · Built with ❤️</p>
          <p className="mt-2">
            📧 <a href="mailto:osehthomas7@gmail.com" className="text-indigo-600 underline">osehthomas7@gmail.com</a>
          </p>
        </footer>
        {/* Floating Support Button */}
<a
  href="https://paypal.me/osehthomas7"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 transform transition-all"
>
  💖 Support Me
</a>

      </main>
    </div>
  );
}
