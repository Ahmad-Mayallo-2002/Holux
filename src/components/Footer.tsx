import { FaFacebook, FaHome, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-4 px-6">
      {/* Part One - Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Column One */}
        <div>
          <h2 className="mb-4 text-white center-y gap-x-1 text-3xl">
            <FaHome />
            Holux
          </h2>
          <p className="text-sm text-gray-400">
            Making real estate dreams come true through comfort and trust.
          </p>
        </div>

        {/* Column Two */}
        <div>
          <h3 className="font-semibold text-lg mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/about-us" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-white">
                News & Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Column Three */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/how-we-work" className="hover:text-white">
                How We Work?
              </Link>
            </li>
            <li>
              <Link to="/capital" className="hover:text-white">
                Capital
              </Link>
            </li>
            <li>
              <Link to="/security" className="hover:text-white">
                Security
              </Link>
            </li>
          </ul>
        </div>

        {/* Column Four */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link to="/faqs" className="hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-white">
                Support Center
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column Five */}
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-2xl text-gray-400">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Part Two - Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} All Copyrights are Reserved
      </div>
    </footer>
  );
}
