// src/components/HeroSection.jsx
import building from '../assets/school.png';

export default function HeroSection() {
  return (
    <section className="text-center">
      {/* Hero Image */}
      <img
        src={building}
        alt="School Building"
        className="w-full h-48 sm:h-64 md:h-[300px] lg:h-[400px] object-cover"
      />

      {/* Text Overlay or Below */}
      <div className="py-4 px-3 sm:px-6 md:px-10">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#991B1B] leading-snug">
          A Journey from Curiosity to Career Begins Here
        </h1>
        <p className="text-sm sm:text-base md:text-lg mt-2 text-gray-600">
          Pre-Primary to Jr. College | Value-based, Disciplined Education
        </p>
      </div>
    </section>
  );
}
