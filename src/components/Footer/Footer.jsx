// Footer.jsx
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">CS — Ticket System</h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
                CS — Ticket System is a streamlined and efficient customer support solution designed to simplify issue tracking. Built with modern technology, it provides an intuitive interface for managing user queries, prioritizing tasks, and ensuring rapid resolution. Whether you are a small team or a growing enterprise, our system helps you stay organized and deliver exceptional service, one ticket at a time.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Sales</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Products & Services</a></li>
              <li><a href="#" className="hover:text-white transition">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white transition">Download Apps</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Social Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <FaTwitter className="w-5 h-5" />
                <a href="#" className="hover:text-white transition">@CS — Ticket System</a>
              </li>
              <li className="flex items-center gap-3">
                <FaLinkedinIn className="w-5 h-5" />
                <a href="#" className="hover:text-white transition">@CS — Ticket System</a>
              </li>
              <li className="flex items-center gap-3">
                <FaFacebookF className="w-5 h-5" />
                <a href="#" className="hover:text-white transition">@CS — Ticket System</a>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="w-5 h-5" />
                <a href="#" className="hover:text-white transition">support@cst.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;