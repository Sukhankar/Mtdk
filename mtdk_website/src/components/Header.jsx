// src/components/Header.jsx
import logo from '../assets/1.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Administration", path: "/administration" },
    { name: "Gallery", path: "/gallery" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions & Fees", path: "/admission_fee" },
    { name: "R&D and IIC", path: "/rnd" },
    { name: "Student Life", path: "/student_life" },
    { name: "Governance", path: "/governance" },
    { name: "Contact", path: "/contact" }
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
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setActiveLink(link.name)}
              className={`px-2 sm:px-3 py-1 rounded transition-all duration-200
                ${
                  activeLink === link.name
                    ? "bg-yellow-400 text-[#991B1B] font-semibold shadow"
                    : "hover:bg-yellow-100 hover:text-[#991B1B] hover:font-semibold"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
