import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MTDK Shikshan Sankul</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Nurturing young minds with holistic education since 1995
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  To provide a nurturing environment that fosters academic excellence, character development, and lifelong learning.
                </p>
                <p className="text-gray-600">
                  We believe in educating the whole child - mind, body, and spirit - to prepare them for the challenges of tomorrow.
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Core Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span className="text-gray-700">Integrity and Honesty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span className="text-gray-700">Respect for All</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span className="text-gray-700">Academic Excellence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span className="text-gray-700">Community Engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span className="text-gray-700">Innovation in Learning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our History</h2>
            <div className="relative">
              {/* Timeline */}
              <div className="border-l-2 border-red-600 absolute h-full left-1/2 transform -translate-x-1/2"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="relative pl-16">
                  <div className="absolute w-6 h-6 bg-red-600 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">1995</h3>
                    <p className="text-gray-600">
                      Founded with just 50 students in a small building in Miraj, Maharashtra.
                    </p>
                  </div>
                </div>

                <div className="relative pl-16">
                  <div className="absolute w-6 h-6 bg-red-600 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2002</h3>
                    <p className="text-gray-600">
                      Expanded to include high school classes and moved to our current campus.
                    </p>
                  </div>
                </div>

                <div className="relative pl-16">
                  <div className="absolute w-6 h-6 bg-red-600 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2010</h3>
                    <p className="text-gray-600">
                      Recognized as one of the top schools in the region for academic excellence.
                    </p>
                  </div>
                </div>

                <div className="relative pl-16">
                  <div className="absolute w-6 h-6 bg-red-600 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">2020</h3>
                    <p className="text-gray-600">
                      Launched our digital learning initiative to complement traditional education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Faculty</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-red-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Dr. Sunita Patil</h3>
                  <p className="text-red-600 text-sm mb-3">Principal</p>
                  <p className="text-gray-600 text-sm">
                    With over 25 years of experience in education, Dr. Patil leads our institution with vision and dedication.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-yellow-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Mr. Rajesh Kumar</h3>
                  <p className="text-red-600 text-sm mb-3">Head of Academics</p>
                  <p className="text-gray-600 text-sm">
                    Specializing in curriculum development, Mr. Kumar ensures our academic programs remain cutting-edge.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-blue-100"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Ms. Priya Deshpande</h3>
                  <p className="text-red-600 text-sm mb-3">Student Welfare</p>
                  <p className="text-gray-600 text-sm">
                    Focused on student well-being and extracurricular development to create well-rounded individuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
