import React from 'react';

export default function StudentLife() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <main>
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-red-800 to-red-600 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Student Life at MTDK</h1>
            <p className="text-xl max-w-3xl mx-auto">
              A vibrant campus life that nurtures creativity, leadership, and holistic development
            </p>
          </div>
        </section>

        {/* Clubs & Activities Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Clubs & Activities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Cultural Clubs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Music & Dance Society</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Drama Club</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Literary Society</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Clubs</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Coding Club</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Robotics Club</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Entrepreneurship Cell</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Sports</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Cricket, Football, Basketball</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Athletics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Indoor Games</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Annual Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">TechFest</h3>
                <p className="text-gray-600 mb-4">
                  Our annual technology festival featuring competitions, workshops, and guest lectures from industry leaders.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Cultural Fest</h3>
                <p className="text-gray-600 mb-4">
                  A vibrant celebration of arts, music, dance and drama with performances from students and professional artists.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Campus Facilities</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Library</h3>
                <p className="text-gray-600">
                  Well-stocked with 50,000+ books, journals, and digital resources
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Hostels</h3>
                <p className="text-gray-600">
                  Comfortable accommodation with 24/7 security and WiFi
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Cafeteria</h3>
                <p className="text-gray-600">
                  Hygienic food court serving nutritious meals and snacks
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
