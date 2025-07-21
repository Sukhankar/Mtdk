import React from 'react';

export default function AdmissionFee() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Admissions & Fees</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transparent admission process and fee structure for quality education
            </p>
          </div>
        </section>

        {/* Admission Process Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Admission Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Application</h3>
                <p className="text-gray-600">
                  Submit the online application form along with required documents.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Assessment</h3>
                <p className="text-gray-600">
                  Students may be required to take an assessment test depending on grade level.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Interview</h3>
                <p className="text-gray-600">
                  Parent and student interview with school administration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Structure Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Fee Structure (2023-24)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
                <thead className="bg-red-600 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Grade</th>
                    <th className="py-3 px-4 text-left">Annual Tuition</th>
                    <th className="py-3 px-4 text-left">Registration Fee</th>
                    <th className="py-3 px-4 text-left">Other Charges</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4">Pre-Primary</td>
                    <td className="py-4 px-4">₹25,000</td>
                    <td className="py-4 px-4">₹2,000</td>
                    <td className="py-4 px-4">₹3,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Primary (1-5)</td>
                    <td className="py-4 px-4">₹30,000</td>
                    <td className="py-4 px-4">₹2,500</td>
                    <td className="py-4 px-4">₹4,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Middle (6-8)</td>
                    <td className="py-4 px-4">₹35,000</td>
                    <td className="py-4 px-4">₹3,000</td>
                    <td className="py-4 px-4">₹5,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">Secondary (9-10)</td>
                    <td className="py-4 px-4">₹40,000</td>
                    <td className="py-4 px-4">₹3,500</td>
                    <td className="py-4 px-4">₹6,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>One-time annual payment (5% discount)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Two installments (no additional charges)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Quarterly installments (2% additional charge)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scholarship Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Scholarships & Financial Aid</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Merit Scholarships</h3>
                <p className="text-gray-600 mb-4">
                  Available for students with outstanding academic performance:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Up to 25% tuition waiver for top performers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Special scholarships for board exam toppers</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Need-Based Financial Aid</h3>
                <p className="text-gray-600 mb-4">
                  For economically disadvantaged students with strong academic potential:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Up to 50% fee concession</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Special consideration for single-parent families</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
