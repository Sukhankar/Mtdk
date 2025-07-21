// src/components/Header.jsx
import logo from '../assets/1.png';
import { useState } from 'react';

export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    "Home",
    "About",
    "Administration",
    "Gallery",
    "Academics",
    "Admissions & Fees",
    "R&D and IIC",
    "Student Life",
    "Governance",
    "Contact"
  ];

  return (
    <header className="w-full shadow">
      {/* Logo Section */}
      <div className="bg-white flex justify-center items-center py-2 px-4 sm:px-6 md:px-8 border-b border-gray-200">
        <img
          src={logo}
          alt="MTDK Logo"
          className="h-20 sm:h-24 md:h-28 object-contain"
        />
      </div>

      {/* Navbar Section */}
      <nav className="bg-[#991B1B] text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center px-3 py-2 gap-2 text-xs sm:text-sm md:text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setActiveLink(link)}
              className={`px-2 sm:px-3 py-1 rounded transition-all duration-200
                ${
                  activeLink === link
                    ? "bg-yellow-400 text-[#991B1B] font-semibold shadow"
                    : "hover:bg-yellow-100 hover:text-[#991B1B] hover:font-semibold"
                }`}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
