import React from "react";

export default function OurBlogs() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Effective Study Techniques for Math Students",
      excerpt:
        "Discover proven methods to improve your mathematical skills and boost your confidence in solving complex problems.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Study Tips",
      image: "📚",
    },
    {
      id: 2,
      title: "Understanding Quantum Physics: A Beginner's Guide",
      excerpt:
        "Break down the complex world of quantum mechanics into simple, understandable concepts for high school students.",
      author: "Prof. Michael Chen",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Physics",
      image: "⚛️",
    },
    {
      id: 3,
      title: "The Future of Online Education: Trends to Watch",
      excerpt:
        "Explore how technology is transforming the way we learn and what the future holds for online tutoring.",
      author: "Dr. Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Education",
      image: "💻",
    },
    {
      id: 4,
      title: "Chemistry Lab Safety: Essential Guidelines for Students",
      excerpt:
        "Learn the fundamental safety practices every chemistry student should know before entering the laboratory.",
      author: "Prof. David Kim",
      date: "March 8, 2024",
      readTime: "4 min read",
      category: "Chemistry",
      image: "🧪",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR BLOGS</h2>
          <p className="text-gray-600 text-lg">
            Educational insights, study tips, and learning resources from our
            expert gurus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 text-center">
                <div className="text-4xl mb-2">{post.image}</div>
                <span className="bg-white text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
}
