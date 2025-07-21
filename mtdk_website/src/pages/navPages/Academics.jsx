import React from 'react';

export default function Academics() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Academics at MTDK</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Excellence in education through innovative teaching methodologies
            </p>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Curriculum</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Pre-Primary</h3>
                <p className="text-gray-600">
                  Play-based learning focusing on cognitive, social and motor skills development.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Primary School</h3>
                <p className="text-gray-600">
                  Foundational learning in languages, mathematics, sciences and arts.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Secondary School</h3>
                <p className="text-gray-600">
                  Comprehensive curriculum preparing students for board examinations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Methodology Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Teaching Approach</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovative Pedagogy</h3>
                <p className="text-gray-600 mb-4">
                  We employ a blend of traditional and modern teaching methods including:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Interactive classroom sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Project-based learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Digital learning tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Experiential learning activities</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Assessment System</h3>
                <p className="text-gray-600">
                  Our comprehensive evaluation system focuses on continuous assessment through:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Regular unit tests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Project evaluations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Practical examinations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Term-end examinations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Academic Achievements */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Academic Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
                <p className="text-gray-600">Board Exam Pass Percentage (2023)</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
                <p className="text-gray-600">National Level Olympiad Winners</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">100%</div>
                <p className="text-gray-600">University Admission Rate</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
