import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      grade: "Grade 12",
      subject: "Mathematics",
      rating: 5,
      image: "👨‍🎓",
      text: "Dr. Sarah helped me understand calculus in just 3 sessions! Her teaching method is amazing and she explains complex concepts so simply.",
    },
    {
      id: 2,
      name: "Sofia Rodriguez",
      grade: "Grade 10",
      subject: "Physics",
      rating: 5,
      image: "👩‍🎓",
      text: "Prof. Michael made physics fun and easy to understand. I went from struggling to getting A's in my tests. Highly recommended!",
    },
    {
      id: 3,
      name: "David Chen",
      grade: "Grade 11",
      subject: "Chemistry",
      rating: 5,
      image: "👨‍🎓",
      text: "Dr. Emily is the best chemistry tutor I've ever had. She breaks down organic chemistry into digestible parts. My grades improved dramatically!",
    },
    {
      id: 4,
      name: "Emma Wilson",
      grade: "Grade 9",
      subject: "Computer Science",
      rating: 5,
      image: "👩‍🎓",
      text: "Prof. David taught me programming from scratch. Now I can build my own apps! The live coding sessions were incredibly helpful.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            WHAT STUDENTS SAY
          </h2>
          <p className="text-gray-600 text-lg">
            Real feedback from students who transformed their learning with our
            gurus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{testimonial.image}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.grade} • {testimonial.subject}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ⭐
                  </span>
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Join Thousands of Successful Students
            </h3>
            <p className="text-gray-600 mb-4">
              Start your learning journey today and see the difference expert
              guidance makes
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Start Learning Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
