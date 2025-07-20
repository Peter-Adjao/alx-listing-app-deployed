import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10">
      <div className="flex justify-center gap-6 mb-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-gray-600 hover:text-blue-600 text-xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-gray-600 hover:text-blue-400 text-xl" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-600 hover:text-pink-500 text-xl" />
        </a>
      </div>
      <p className="text-sm text-gray-600">
        © 2025 ALX Listing App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
