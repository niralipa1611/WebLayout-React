import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Large Hero Area */}
        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden relative">
          <Image
            src="/herosection.jpg"
            alt="Hero Section"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Find Your Perfect Guru
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Connect with expert tutors and clear your doubts instantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
