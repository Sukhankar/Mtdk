// src/components/Footer.jsx
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#991B1B] text-white pt-10 pb-6 px-6 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">

        {/* About Section */}
        <div>
          <h3 className="font-bold text-xl mb-2">MTDK Shikshan Sankul</h3>
          <p className="text-sm leading-relaxed">
            MTDK Shikshan Sankul is dedicated to nurturing young minds with value-based, holistic education from Pre-primary to Junior College.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Admissions</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
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
            <a href="#" className="hover:scale-110 transition-transform"><Instagram size={20} /></a>
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
