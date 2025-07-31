import React from "react";

export default function FeaturedGurus() {
  const featuredGurus = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      subject: "Mathematics",
      rating: 4.9,
      students: 1250,
      experience: "8 years",
      image: "👩‍🏫",
      description: "Expert in Calculus, Algebra, and Statistics",
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      subject: "Physics",
      rating: 4.8,
      students: 980,
      experience: "12 years",
      image: "👨‍🏫",
      description: "Specializes in Mechanics and Quantum Physics",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      subject: "Chemistry",
      rating: 4.9,
      students: 1100,
      experience: "10 years",
      image: "👩‍🔬",
      description: "Organic Chemistry and Biochemistry expert",
    },
    {
      id: 4,
      name: "Prof. David Kim",
      subject: "Computer Science",
      rating: 4.7,
      students: 850,
      experience: "15 years",
      image: "👨‍💻",
      description: "Programming, Algorithms, and Data Structures",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            OUR FEATURED GURUS
          </h2>
          <p className="text-gray-600 text-lg">
            Connect with top-rated educators who have helped thousands of
            students succeed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGurus.map((guru) => (
            <div
              key={guru.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{guru.image}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {guru.name}
                </h3>
                <p className="text-blue-600 font-medium">{guru.subject}</p>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Rating:</span>
                  <div className="flex items-center">
                    <span className="text-yellow-500">⭐</span>
                    <span className="ml-1 font-medium">{guru.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Students:</span>
                  <span className="font-medium">
                    {guru.students.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Experience:</span>
                  <span className="font-medium">{guru.experience}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{guru.description}</p>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Book Session
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
