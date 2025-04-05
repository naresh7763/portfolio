import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (

  <nav className="fixed top-0 w-full z-50">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">MyPortfolio</h1>
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
        <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
