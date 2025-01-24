import React, { useState } from "react";
import Logo from "../Assets/logo.webp";
import Login from "../Components/Login";
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <>
      {/* Header Section */}
      <div className="h-20 w-full bg-black flex items-center px-6 fixed top-0 left-0 z-50 justify-between">
        {/* Logo & Brand Name */}
        <div className="flex items-center">
          <img 
            src={Logo}
            width={50}
            height={50} 
            className="rounded-md" 
            alt="Biz Core Logo"
          />
          <h1 className="font-bold text-white text-2xl ml-4">BIZ CORE</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-10">
          <a href="#home" className="text-slate-300 text-sm hover:text-white">HOME</a>
          <a href="#about" className="text-slate-300 text-sm hover:text-white">ABOUT</a>
          <a href="#contact" className="text-slate-300 text-sm hover:text-white">CONTACT</a>
        </div>

        {/* Login Button */}
        <button 
          className="hidden md:block bg-slate-300 px-4 py-2 rounded-md font-bold hover:bg-white"
          onClick={() => setIsModalOpen(true)}
        >
          LOGIN
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-2xl ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`fixed top-20 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-6 transition-transform duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-full"} md:hidden`}>
        <a href="#home" className="text-lg hover:text-yellow-400" onClick={() => setMenuOpen(false)}>HOME</a>
        <a href="#about" className="text-lg hover:text-yellow-400" onClick={() => setMenuOpen(false)}>ABOUT</a>
        <a href="#contact" className="text-lg hover:text-yellow-400" onClick={() => setMenuOpen(false)}>CONTACT</a>
        <button 
          className="bg-yellow-400 text-black px-4 py-2 rounded-md font-bold hover:bg-yellow-500"
          onClick={() => {
            setIsModalOpen(true);
            setMenuOpen(false);
          }}
        >
          LOGIN
        </button>
      </div>

      {/* Login Modal */}
      <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Header;
