import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Logo and About Section */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-white">YourBrand</h1>
          <p className="mt-4 text-sm">
            Empowering your digital presence with modern and sleek designs. Let's build something amazing together.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-white">Follow Us</h2>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm">
          © 2024 YourBrand. All Rights Reserved. | Dev Rabbani Sarkar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
