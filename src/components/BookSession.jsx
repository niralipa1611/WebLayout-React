import React from "react";

export default function BookSession() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Book Session Section */}
        <div className="w-full bg-gray-100 border-2 border-gray-300 rounded-lg p-8">
          {/* Main Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              BOOK YOUR FREE SESSION NOW
            </h2>
          </div>

          {/* Three horizontally aligned text phrases */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              HOW IT WORKS
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
              CONNECT TO GURU FOR TUITIONS
            </button>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
              CLEAR YOUR DOUBTS, CONNECT TO LIVE GURUS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
