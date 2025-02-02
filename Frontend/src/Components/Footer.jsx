import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10" id="contact">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Biz Core</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering shopkeepers with seamless inventory management, QR code generation, and automated billing solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Contact Us</h2>
          <p className="text-gray-400">📍 123 Business Street, New York, NY</p>
          <p className="text-gray-400">📞 +1 234 567 890</p>
          <p className="text-gray-400">✉️ support@bizcore.com</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="text-center mt-6">
  <h2 className="text-lg font-semibold text-white mb-5">Follow Us</h2>
  <div className="flex justify-center space-x-6">
    <a href="#" className="text-white hover:text-gray-400 transition text-2xl">
      <FaFacebook />
    </a>
    <a href="#" className="text-white hover:text-gray-400 transition text-2xl">
      <FaTwitter />
    </a>
    <a href="#" className="text-white hover:text-gray-400 transition text-2xl">
      <FaInstagram />
    </a>
    <a href="#" className="text-white hover:text-gray-400 transition text-2xl">
      <FaLinkedin />
    </a>
  </div>
</div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Biz Core. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
