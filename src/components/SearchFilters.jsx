import React, { useState } from "react";

export default function SearchFilters() {
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [gradeOpen, setGradeOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("SUBJECT");
  const [selectedGrade, setSelectedGrade] = useState("GRADE");

  const subjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
    "Geography",
    "Computer Science",
  ];
  const grades = [
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
  ];

  return (
    <section className="bg-white py-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
          {/* Slogan */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-gray-900">
              CLEAR YOUR DOUBTS, CONNECT TO GURU
            </h2>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              SEARCH
            </button>
            <div className="flex space-x-3">
              {/* Subject Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSubjectOpen(!subjectOpen)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[120px] text-left flex items-center justify-between text-black"
                >
                  {selectedSubject}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {subjectOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {subjects.map((subject) => (
                      <button
                        key={subject}
                        onClick={() => {
                          setSelectedSubject(subject);
                          setSubjectOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 text-black"
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Grade Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setGradeOpen(!gradeOpen)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[120px] text-left flex items-center justify-between text-black"
                >
                  {selectedGrade}
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {gradeOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {grades.map((grade) => (
                      <button
                        key={grade}
                        onClick={() => {
                          setSelectedGrade(grade);
                          setGradeOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 text-black"
                      >
                        {grade}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 