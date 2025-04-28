import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10  flex flex-col justify-between">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left flex-grow">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Bookify</h2>
          <p className="text-gray-400">Your favourite book store.</p>
        </div>
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>
        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.tiktok.com/@genuinelysuckatnames?is_from_webapp=1&sender_device=pc" className="text-gray-400 hover:text-white"><FaTiktok size={24} /></a>
            <a href="https://x.com/ZaneisaK" className="text-gray-400 hover:text-white"><FaXTwitter size={24} /></a>
            <a href="https://github.com/ZaneKwatampora" className="text-gray-400 hover:text-white"><FaGithub size={24} /></a>
            <a href="https://www.instagram.com/absolutelyfried._/" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center mt-8 text-gray-500 text-sm py-4">
        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;