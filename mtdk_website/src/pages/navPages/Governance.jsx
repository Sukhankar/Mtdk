import React from 'react';

export default function Governance() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Governance Structure Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Governance Structure</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Board of Governors</h3>
                <p className="text-gray-600 mb-4">
                  The supreme governing body responsible for policy decisions and strategic direction.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Chairperson: Dr. Rajesh Kumar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>12 members including industry experts</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Academic Council</h3>
                <p className="text-gray-600 mb-4">
                  Oversees all academic matters including curriculum development and quality assurance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Chairperson: Dr. Priya Sharma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Faculty representatives from all departments</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Finance Committee</h3>
                <p className="text-gray-600 mb-4">
                  Manages financial planning, budgeting and resource allocation.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Chairperson: Mr. Amit Patel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Includes chartered accountants and finance experts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Policies Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Key Policies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Academic Policies</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Attendance and evaluation guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Plagiarism and academic integrity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Grievance redressal mechanism</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Administrative Policies</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Human resources and recruitment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Infrastructure development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>IT and data security</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Transparency & Accountability</h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6">
                MTDK is committed to maintaining the highest standards of transparency and accountability in all its operations.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Public Disclosures</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Annual reports and financial statements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>RTI compliance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-3">Audit & Compliance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Regular internal and external audits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>UGC and AICTE compliance reports</span>
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
