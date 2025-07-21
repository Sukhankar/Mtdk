import Logo from '../assets/logo.png';
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  InstagramIcon,
  Twitter,
  Youtube
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <img src={Logo} alt="MTDK Logo" className="w-24 mb-4" />
          <p className="text-sm">
            MTDK Shikshan Sankul is dedicated to nurturing young minds with value-based, holistic education from Pre-primary to Junior College.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/administration" className="hover:underline">Administration</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/academics" className="hover:underline">Academics</Link></li>
            <li><Link to="/admission_fee" className="hover:underline">Admissions & Fees</Link></li>
            <li><Link to="/rnd" className="hover:underline">R&D and IIC</Link></li>
            <li><Link to="/student_life" className="hover:underline">Student Life</Link></li>
            <li><Link to="/governance" className="hover:underline">Governance</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Contact Us</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Miraj, Maharashtra
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> contact@mtdk.org
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:scale-110 transition-transform"><Facebook size={20} /></a>
            <a href="#" className="hover:scale-110 transition-transform"><InstagramIcon size={20} /></a>
            <a href="#" className="hover:scale-110 transition-transform"><Twitter size={20} /></a>
            <a href="#" className="hover:scale-110 transition-transform"><Youtube size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-xs text-gray-200 border-t border-red-400 pt-4 text-center">
        &copy; {new Date().getFullYear()} MTDK Shikshan Sankul. All rights reserved.
      </div>
    </footer>
  );
}
