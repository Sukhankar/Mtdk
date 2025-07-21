// src/components/HeroSection.jsx
import building from '../assets/school.png';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Image with Gradient Overlay */}
      <div className="relative w-full h-[70vh] min-h-[400px] max-h-[800px]">
        <img
          src={building}
          alt="School Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white/95 leading-tight mb-6 drop-shadow-lg">
            A Journey from Curiosity to Career Begins Here
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/85 mb-10 drop-shadow-md">
            Pre-Primary to Jr. College | Value-based, Disciplined Education
          </p>
          <div className="flex gap-6 justify-center">
            <Link 
              to="/admission_fee" 
              className="bg-red-700/90 hover:bg-red-800/90 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Admissions
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/90 hover:bg-gray-100/90 text-red-700 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
