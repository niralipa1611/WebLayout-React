export default function LiveGurus() {
  const liveGurus = [
    {
      id: 1,
      name: "Dr. Lisa Wang",
      subject: "Biology",
      status: "Live Now",
      viewers: 156,
      topic: "Cell Biology Basics",
      image: "🔬",
      time: "2:30 PM",
    },
    {
      id: 2,
      name: "Prof. James Wilson",
      subject: "Mathematics",
      status: "Live Now",
      viewers: 89,
      topic: "Calculus Integration",
      image: "📐",
      time: "3:15 PM",
    },
    {
      id: 3,
      name: "Dr. Maria Garcia",
      subject: "English Literature",
      status: "Starting Soon",
      viewers: 0,
      topic: "Shakespeare Analysis",
      image: "📚",
      time: "4:00 PM",
    },
    {
      id: 4,
      name: "Prof. Alex Thompson",
      subject: "Physics",
      status: "Live Now",
      viewers: 203,
      topic: "Quantum Mechanics",
      image: "⚛️",
      time: "1:45 PM",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">LIVE GURUS</h2>
          <p className="text-gray-600 text-lg">
            Join live sessions with expert tutors in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {liveGurus.map((guru) => (
            <div
              key={guru.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center">
                  <div className="text-4xl mb-2">{guru.image}</div>
                  <h3 className="text-lg font-semibold text-white">
                    {guru.name}
                  </h3>
                  <p className="text-blue-100">{guru.subject}</p>
                </div>
                <div className="absolute top-2 right-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      guru.status === "Live Now"
                        ? "bg-red-500 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    {guru.status}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {guru.topic}
                </h4>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <span>⏰ {guru.time}</span>
                  <span>👥 {guru.viewers} viewers</span>
                </div>

                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">
                  {guru.status === "Live Now" ? "Join Live" : "Set Reminder"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            View All Live Sessions
          </button>
        </div>
      </div>
    </section>
  );
}
