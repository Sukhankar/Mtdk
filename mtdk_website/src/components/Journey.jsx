// src/components/Journey.jsx
import React from "react";
import prePrimaryImg from "../assets/kids.png";
import primaryImg from "../assets/primary.png";
import highSchoolImg from "../assets/highschool.png";
import juniorCollegeImg from "../assets/juniorCollege.png";
import logo from "../assets/logo.png";

const sections = [
  {
    id: "pre-primary",
    title: "Pre Primary",
    subtitle: "Nursery, Jr., Sr., CBSE",
    color: "bg-sky-400",
    position: "top-left",
    label: "Nursery to Sr. KG",
    image: prePrimaryImg,
  },
  {
    id: "primary",
    title: "Primary",
    subtitle: "1st to 7th",
    color: "bg-yellow-400",
    position: "top-right",
    label: "Learning Today, Leading Tomorrow",
    image: primaryImg,
  },
  {
    id: "high-school",
    title: "High School",
    subtitle: "8th to 10th",
    color: "bg-orange-400",
    position: "bottom-left",
    label: "8th to 10th",
    image: highSchoolImg,
  },
  {
    id: "junior-college",
    title: "Junior College",
    subtitle: "11th to 12th",
    color: "bg-red-500",
    position: "bottom-right",
    label: "11th to 12th",
    image: juniorCollegeImg,
  },
];

const getPositionClasses = (position) => {
  switch (position) {
    case "top-left":
      return "top-0 left-0 rounded-tl-full transform-origin-bottom-right";
    case "top-right":
      return "top-0 right-0 rounded-tr-full transform-origin-bottom-left";
    case "bottom-left":
      return "bottom-0 left-0 rounded-bl-full transform-origin-top-right";
    case "bottom-right":
      return "bottom-0 right-0 rounded-br-full transform-origin-top-left";
    default:
      return "";
  }
};

const getHoverTransform = (position) => {
  const base = "group-hover:scale-110";
  switch (position) {
    case "top-left":
      return `${base} group-hover:-translate-x-3 group-hover:-translate-y-3`;
    case "top-right":
      return `${base} group-hover:translate-x-3 group-hover:-translate-y-3`;
    case "bottom-left":
      return `${base} group-hover:-translate-x-3 group-hover:translate-y-3`;
    case "bottom-right":
      return `${base} group-hover:translate-x-3 group-hover:translate-y-3`;
    default:
      return base;
  }
};

export default function Journey() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-8 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Educational Journey</h2>
        <p className="text-gray-600">Every Big Dream starts with a Small start of learning possibilities</p>
      </div>

      {/* Circular Layout */}
      <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl bg-white">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`group absolute w-1/2 h-1/2 cursor-pointer ${getPositionClasses(section.position)}`}
          >
            {/* Clickable link that covers the entire quadrant */}
            <a href={`#${section.id}`} className="absolute inset-0 z-30" aria-label={`Go to ${section.title}`}></a>

            <div
              className={`w-full h-full ${section.color} flex flex-col items-center justify-center text-white text-center p-6 transition-all duration-500 ease-out ${getHoverTransform(section.position)} shadow-lg group-hover:shadow-2xl group-hover:z-20 relative overflow-hidden`}
            >
              {/* Background image */}
              <img
                src={section.image}
                alt={section.title}
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-1">{section.title}</h3>
                <p className="text-sm opacity-90">{section.subtitle}</p>
              </div>

              {/* Hover label */}
              <div className="absolute inset-0 flex items-end justify-center pb-4 z-20">
                <span className="text-xs font-medium bg-white/70 px-3 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {section.label}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Center Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-4 border-gray-200 flex items-center justify-center shadow-lg z-40">
          <img src={logo} alt="MTDK Logo" className="h-10 w-10 object-contain" />
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-center text-gray-500 mt-6 text-sm">
        Nurturing minds, building futures
      </p>
    </div>
  );
}
