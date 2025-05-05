import { useState } from "react";
import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";

import { links } from "../../types/Links";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-4 sticky top-0 z-50 max-w-[70rem] mx-auto w-full px-10">
      <div className="w-full flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-white">
          Feane
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              className="text-white text-xl hover:text-amber-600 transition"
            >
              {item.text}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white font-bold focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`md:hidden transform transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-96 opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 py-6 px-4 items-center">
          {links.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-xl hover:text-amber-600 transition"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
