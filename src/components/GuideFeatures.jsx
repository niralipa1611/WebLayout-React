import React from "react";

export default function GuideFeatures() {
  const features = [
    {
      id: 1,
      title: "One-on-One Tutoring",
      description:
        "Get personalized attention from expert tutors in private sessions tailored to your learning style.",
      icon: "👨‍🏫",
      color: "blue",
    },
    {
      id: 2,
      title: "Live Group Sessions",
      description:
        "Join interactive group classes with other students and learn together in a collaborative environment.",
      icon: "👥",
      color: "green",
    },
    {
      id: 3,
      title: "24/7 Doubt Resolution",
      description:
        "Ask questions anytime and get instant answers from our community of expert tutors.",
      icon: "❓",
      color: "purple",
    },
    {
      id: 4,
      title: "Study Materials",
      description:
        "Access comprehensive study materials, practice tests, and revision notes for all subjects.",
      icon: "📚",
      color: "orange",
    },
    {
      id: 5,
      title: "Progress Tracking",
      description:
        "Monitor your learning progress with detailed analytics and performance reports.",
      icon: "📊",
      color: "red",
    },
    {
      id: 6,
      title: "Mobile Learning",
      description:
        "Learn on the go with our mobile app available for iOS and Android devices.",
      icon: "📱",
      color: "indigo",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-500 text-white",
      green: "bg-green-500 text-white",
      purple: "bg-purple-500 text-white",
      orange: "bg-orange-500 text-white",
      red: "bg-red-500 text-white",
      indigo: "bg-indigo-500 text-white",
    };
    return colors[color] || "bg-blue-500 text-white";
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            GUIDE TO OUR FEATURES
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how our platform can transform your learning experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center group">
              <div
                className={`w-16 h-16 rounded-full ${getColorClasses(
                  feature.color
                )} flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have already transformed their
              academic performance with our expert tutors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Get Started Today
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
