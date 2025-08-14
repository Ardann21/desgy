import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about-us" },
    { name: "Services", id: "services" },
    { name: "FAQ", id: "faq" },
    { name: "Testimonial", id: "testimonial" }
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsContactFormOpen(true);
    setMobileOpen(false);
  };

  const closeContactForm = (e) => {
    if (e.target === e.currentTarget) {
      setIsContactFormOpen(false);
    }
  };

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "Home";
      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop - 100; // adjust for navbar height
          if (window.scrollY >= sectionTop) {
            current = link.name;
          }
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`bg-white border-b transition-shadow duration-300 ${
          scrolled ? "fixed top-0 left-0 right-0 z-50 shadow-lg" : "relative"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold text-gray-900">
            Desgy Solutions
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-6 md:flex">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-2 cursor-pointer ${
                  activeLink === link.name
                    ? "bg-[#d6fdff] text-blue-400 rounded-4xl duration-700"
                    : "text-gray-700"
                }`}
                onClick={() => setActiveLink(link.name)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center md:flex">
            <button
              onClick={handleContactClick}
              className="rounded-md bg-[#d6fdff] font-bold px-4 py-2 text-blue-400 hover:bg-blue-900 hover:text-white transition"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="space-y-2 px-4 pb-4">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`block w-full text-left px-3 py-2 transition ${
                      activeLink === link.name
                        ? "bg-black text-white rounded-2xl"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                    onClick={() => {
                      setActiveLink(link.name);
                      setMobileOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                ))}

                <button
                  onClick={handleContactClick}
                  className="block w-full font-bold rounded-md bg-[#d6fdff] px-4 py-2 text-blue-400 hover:bg-blue-900 hover:text-white transition"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Contact Form Pop-up */}
      <AnimatePresence>
        {isContactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center "
            onClick={closeContactForm}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">Desgy Solutions</h2>
                <p className="mt-2 text-gray-600">
                  Contact us now? Want to send us a feedback?
                </p>
              </div>
              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-xl border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-xl border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full rounded-xl border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-blue-600 py-3 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-blue-700"
                >
                  Send message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
