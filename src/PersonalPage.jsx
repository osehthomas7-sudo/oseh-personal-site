import React from "react";
import Blog from "./Blog";

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

        {/* Navigation */}
        <div className="hidden md:flex gap-4 items-center text-gray-700 font-medium">
          <a href="#work">Work</a>
          <a href="#blog">Blog</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#support">Support</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Hero / Intro */}
        <section className="bg-white/60 backdrop-blur rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="/profile.jpg"
              alt="Oseh Thomas"
              className="w-36 h-36 rounded-full object-cover ring-4 ring-white shadow-xl transform hover:scale-105 transition"
            />
            <div>
              <h2 className="text-3xl font-extrabold">Hi — I’m Oseh Thomas.</h2>
              <p className="mt-2 text-lg opacity-90">
                I build colorful, playful interfaces and craft delightful digital
                experiences. I combine design thinking with practical code to bring
                ideas to life.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-indigo-500 text-white font-medium shadow-lg"
                >
                  Get in touch
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-white/60"
                >
                  See my work
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-white/60"
                >
                  Hire me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="bg-white/60 backdrop-blur rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Services I Offer</h3>
          <p className="mb-6 text-gray-700">
            I offer website design, UI/UX, branding and small web apps. Prices are
            starting points — contact me for a custom quote.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-xl shadow">
              <h4 className="font-semibold text-lg">Website Design</h4>
              <p className="text-sm text-gray-600 my-2">
                One-page portfolio or multi-page business sites. Responsive, fast,
                and colorful.
              </p>
              <p className="text-sm font-medium">Starting at $150</p>
            </div>

            <div className="p-5 bg-white rounded-xl shadow">
              <h4 className="font-semibold text-lg">UI/UX & Prototypes</h4>
              <p className="text-sm text-gray-600 my-2">
                Clickable prototypes and design systems for products.
              </p>
              <p className="text-sm font-medium">Starting at $100</p>
            </div>

            <div className="p-5 bg-white rounded-xl shadow">
              <h4 className="font-semibold text-lg">Small Web Apps</h4>
              <p className="text-sm text-gray-600 my-2">
                React-based interactive apps, dashboards, or landing pages.
              </p>
              <p className="text-sm font-medium">Starting at $200</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="work"
          className="bg-white/60 backdrop-blur rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6">Selected Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project 1"
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">Portfolio Website</h4>
                <p className="text-sm text-gray-600">
                  A modern personal portfolio for showcasing creative work.
                </p>
                <a href="#work" className="text-indigo-600 underline mt-2 inline-block">
                  View Project →
                </a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project 2"
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">E-Commerce App</h4>
                <p className="text-sm text-gray-600">
                  A colorful, mobile-friendly store built with React.
                </p>
                <a href="#work" className="text-indigo-600 underline mt-2 inline-block">
                  View Project →
                </a>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Project 3"
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">Dashboard Design</h4>
                <p className="text-sm text-gray-600">
                  Interactive dashboard concept with animations.
                </p>
                <a href="#work" className="text-indigo-600 underline mt-2 inline-block">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="bg-white/60 backdrop-blur rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">What People Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow text-center">
              <p className="italic text-gray-700">
                “Working with Oseh was an amazing experience! My website looks
                incredible.”
              </p>
              <h4 className="mt-4 font-semibold">— Sarah K., Client</h4>
            </div>

            <div className="p-6 bg-white rounded-xl shadow text-center">
              <p className="italic text-gray-700">
                “Very professional and creative — delivered before the deadline.”
              </p>
              <h4 className="mt-4 font-semibold">— James M., Developer</h4>
            </div>

            <div className="p-6 bg-white rounded-xl shadow text-center">
              <p className="italic text-gray-700">
                “I love the design! I’ll definitely work with Oseh again.”
              </p>
              <h4 className="mt-4 font-semibold">— Linda A., Entrepreneur</h4>
            </div>
          </div>
        </section>

        {/* Support / Hire Me Section */}
        <section
          id="support"
          className="bg-white/60 backdrop-blur rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">
            Support My Work ❤️
          </h3>
          <p className="text-center text-gray-700 mb-6">
            Like my work? You can support me or hire me for your next project.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="https://paypal.me/osehthomas7"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold shadow hover:scale-105 transition"
            >
              Donate via PayPal
            </a>

            <a
              href="https://www.buymeacoffee.com/osehthomas7"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-amber-600 text-white font-semibold shadow hover:scale-105 transition"
            >
              ☕ Buy Me a Coffee
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-100 font-semibold transition"
            >
              Hire Me
            </a>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="bg-white/60 backdrop-blur rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Contact / Hire Me</h3>
          <p className="text-center text-gray-700 mb-6">
            Send me a message about a project or request a quote — I usually reply
            within 24 hours.
          </p>

          <div className="max-w-2xl mx-auto">
            <form
              action="https://formspree.io/f/yourFormId"
              method="POST"
              className="grid gap-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="p-3 rounded border"
              />
              <input
                type="email"
                name="_replyto"
                placeholder="Your email"
                required
                className="p-3 rounded border"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="p-3 rounded border"
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about the project..."
                required
                className="p-3 rounded border"
              ></textarea>

              <input type="text" name="_gotcha" style={{ display: "none" }} />

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-6 py-2 rounded bg-indigo-600 text-white font-medium"
                >
                  Send message
                </button>
                <div className="text-sm text-gray-500">
                  Or email me:{" "}
                  <a
                    href="mailto:osehthomas7@gmail.com"
                    className="underline text-indigo-600"
                  >
                    osehthomas7@gmail.com
                  </a>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-6">
          © {new Date().getFullYear()} Oseh Thomas · Built with ❤️
          <br />
          <a
            href="mailto:osehthomas7@gmail.com"
            className="underline text-indigo-600"
          >
            osehthomas7@gmail.com
          </a>
        </footer>
      </main>
    </div>
  );
}
