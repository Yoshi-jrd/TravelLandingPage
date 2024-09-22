// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 via-mint-500 to-green-600 text-mint-300 py-8 text-center">
      <div className="flex flex-col items-center">
        <p className="mb-4">© 2024 Travel Instagram Links | Crafted for Sustainable Journeys</p>
        <p className="mb-4">
          Follow us on{' '}
          <a href="https://instagram.com" className="text-yellow-300 hover:underline" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{' '}
          for daily updates!
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://instagram.com" className="text-yellow-300 hover:text-mint-400 transition-colors" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://facebook.com" className="text-yellow-300 hover:text-mint-400 transition-colors" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="https://twitter.com" className="text-yellow-300 hover:text-mint-400 transition-colors" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
