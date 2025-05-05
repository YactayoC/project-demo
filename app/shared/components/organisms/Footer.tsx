import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2c2f3f] text-white py-16 px-6">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center justify-items-center">
        {/* Contacto */}
        <div className="flex flex-col items-center gap-4 max-w-xs">
          <h3 className="text-xl font-semibold font-cursive">Contact Us</h3>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-300" />
            <span>123 Main St, City</span>
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-gray-300" />
            <span>+01 1234567890</span>
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-gray-300" />
            <span>demo@gmail.com</span>
          </p>
        </div>

        {/* Centro */}
        <div className="flex flex-col items-center gap-4 max-w-xs text-center">
          <h3 className="text-2xl font-semibold font-cursive">Feane</h3>
          <p className="text-sm">
            Necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with
          </p>
          <div className="flex justify-center gap-4 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
              aria-label="Pinterest"
            >
              <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Horarios */}
        <div className="flex flex-col items-center gap-2 max-w-xs">
          <h3 className="text-xl font-semibold font-cursive">Opening Hours</h3>
          <p>Everyday</p>
          <p>10:00 AM - 10:00 PM</p>
        </div>
      </div>

      {/* Pie de página */}
      <div className="mt-16 border-t border-white/20 pt-6 text-center text-sm space-y-1">
        <p>© 2025 All Rights Reserved By Free Html Templates</p>
        <p>© Distributed By ThemeWagon</p>
      </div>
    </footer>
  );
}
