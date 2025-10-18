import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaPinterest, FaFacebookF } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import "./App.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-teal-900/95 shadow-lg border-b border-teal-700"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-white">
          Ze <span className="text-teal-400">Design</span>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex gap-8 uppercase tracking-widest text-sm font-semibold">
          {["Home", "About", "Products", "Gallery", "360° View", "Contact"].map(
            (item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase().replace(/ /g, "")}`}
                  className={`${
                    isScrolled
                      ? "text-gray-100 hover:text-teal-300"
                      : "text-white hover:text-teal-400"
                  } transition`}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}

function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Inquiry from " + form.name);
    const body = encodeURIComponent(
      form.message + "\n\nFrom: " + form.name + " (" + form.email + ")"
    );
    window.location.href = `mailto:hello@zedesign.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* HERO */}
      {/* HERO + NAVBAR OVERLAY */}
      <section
        id="home"
        className="relative h-screen flex flex-col justify-between text-white overflow-hidden"
      >
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="luxury home exterior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-teal-900/70 to-black/80"></div>

        {/* NAVBAR INSIDE HERO */}
        <nav className="relative z-20 w-full max-w-7xl mx-auto px-8 py-6 flex justify-between items-center uppercase tracking-widest font-semibold text-sm">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-wide">
            Ze <span className="text-teal-400">Design</span>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex gap-10">
            {[
              "Home",
              "About",
              "Products",
              "Gallery",
              "360° View",
              "Contact",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase().replace(/ /g, "")}`}
                  className="text-white hover:text-teal-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

        
        </nav>

        {/* HERO CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 flex flex-col items-center justify-center text-center h-full -mt-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Ze Design Interiors
          </h1>
          <p className="text-lg text-gray-200 mb-8 drop-shadow">
            Where modern elegance meets timeless design
          </p>
          <a
            href="#contact"
            className="bg-teal-600 hover:bg-teal-700 transition px-8 py-3 rounded-full shadow-lg text-white font-medium"
          >
            Get in touch
          </a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-teal-700 border-l-4 border-teal-600 pl-3">
            About Us
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            At Ze Design Interiors, we craft bespoke interiors that balance
            modern luxury with personal warmth. Based in Kochi, our studio
            focuses on residential and boutique commercial spaces where every
            detail — light, texture, and tone — works in harmony.
          </p>
          <p className="mt-4 text-gray-600">
            From full home makeovers to boutique styling, we translate your
            story into spaces that inspire.
          </p>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1616486708068-92135b52b1c1?auto=format&fit=crop&w=1000&q=80"
          alt="modern interior"
          className="rounded-2xl shadow-lg object-cover w-full h-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </section>

      {/* PORTFOLIO */}
      <section id="gallery" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-600">Our Gallery</h2>
          <p className="text-gray-600 mt-3 mb-10">
            A glimpse of our recent works blending artistry and function.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1616627985613-6b7d607af9ac?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1556912990-6f5e69f0f25c?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1582582494700-5cbc1cf3b1b8?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1602524202719-3e0c9b3e5159?auto=format&fit=crop&w=1200&q=80",
              "https://images.unsplash.com/photo-1600585154366-6d8b65b9b8d1?auto=format&fit=crop&w=1200&q=80",
            ].map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden shadow-md bg-white"
              >
                <img
                  src={src}
                  alt={`project-${i + 1}`}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-gradient-to-r from-black via-teal-900 to-black text-white py-20 px-6"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-teal-400">Let’s Talk</h2>
            <p className="mt-3 text-gray-300">
              Have a project in mind? We’d love to hear from you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-4 bg-white text-gray-800 p-6 rounded-lg shadow"
            >
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full border border-gray-200 rounded px-3 py-2"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border border-gray-200 rounded px-3 py-2"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                required
                className="w-full border border-gray-200 rounded px-3 py-2"
              />
              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
              >
                Send Message
              </button>
              {sent && (
                <p className="text-sm text-green-600 mt-2">
                  Opening your mail client…
                </p>
              )}
            </form>
          </motion.div>

          <div className="space-y-4">
            <div className="p-6 bg-gray-900 rounded-lg shadow">
              <h3 className="font-semibold text-teal-400">
                Ze Design Interiors
              </h3>
              <p className="text-sm text-gray-400 mt-1">Kochi, Kerala</p>
              <div className="mt-4 text-sm text-gray-400 space-y-2">
                <p className="flex items-center gap-2">
                  <FiPhone /> +91 98765 43210
                </p>
                <p className="flex items-center gap-2">
                  <FiMail /> hello@zedesign.com
                </p>
                <p className="flex items-center gap-2">
                  <FiMapPin /> Kochi – Ernakulam
                </p>
              </div>
              <div className="mt-4 flex gap-4 text-gray-400 text-lg">
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaPinterest />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-teal-900 to-black text-gray-300 text-sm py-6 text-center">
        © {new Date().getFullYear()} Ze Design Interiors · All Rights Reserved
      </footer>
    </div>
  );
}

export default App;
