import React from 'react';

export default function RnD() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Research & Development at MTDK</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Fostering innovation and research culture among students and faculty
            </p>
          </div>
        </section>

        {/* R&D Initiatives Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our R&D Initiatives</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Student Research Projects</h3>
                <p className="text-gray-600 mb-4">
                  We encourage students to undertake innovative projects:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Annual science and technology exhibitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Inter-school research competitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Mentorship from industry experts</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Faculty Research</h3>
                <p className="text-gray-600 mb-4">
                  Our faculty members are actively engaged in:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Pedagogical research and innovation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Curriculum development projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Collaborations with universities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* IIC Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Institution's Innovation Council (IIC)</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">About IIC</h3>
              <p className="text-gray-600 mb-6">
                MTDK is proud to host an active Institution's Innovation Council under the Ministry of Education's Innovation Cell. Our IIC focuses on:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Key Activities</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Innovation awareness programs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>IPR workshops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Startup incubation support</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Achievements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>5+ patents filed by students</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>3 student startups incubated</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>National level recognition</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
