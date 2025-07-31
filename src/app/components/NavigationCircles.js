import Image from "next/image";

export default function NavigationCircles() {
  const navigationItems = [
    "BECOME GURUKULITE",
    "FIND GURU",
    "BECOME GURU",
    "BECOME GURUKUL",
    "BLOGS",
    "KIDSZONE AND UG CLUB",
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between space-x-8 md:space-x-12">
          {navigationItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Circular profile image */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-300 bg-white mb-2 flex items-center justify-center overflow-hidden">
                <Image
                  src="/profile.png"
                  alt={`${item} profile`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Text label */}
              <span className="text-xs md:text-sm text-center text-gray-700 font-medium max-w-20">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
