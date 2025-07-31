import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Main Title/Slogan */}
        <div className="text-center">
          <h1 className="text-lg font-semibold text-gray-900">
            CLEAR YOUR DOUBTS - CONNECT TO GURU
          </h1>
        </div>

        {/* Login and Menu */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            LOGIN
          </button>
          <button className="flex flex-col space-y-1">
            <div className="w-6 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </button>
        </div>
      </div>
    </header>
  );
}
