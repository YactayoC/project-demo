import { useState } from "react";
import { Link } from "react-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { links } from "../types/Links";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-20">
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
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </div>

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
