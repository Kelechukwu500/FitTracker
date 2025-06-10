import React from "react";
import { Link } from "react-router-dom";
import stamina1 from "../assets/stamina1.jpg";
import stamina2 from "../assets/stamina2.jpg";
import stamina3 from "../assets/stamina3.jpg";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "5 Simple Exercises for Beginners",
    excerpt:
      "New to fitness? Start with these five easy exercises to build strength and stamina.",
    image: stamina1,
    date: "June 10, 2025",
  },
  {
    id: 2,
    title: "Meal Prep Tips for Busy People",
    excerpt:
      "Save time and stay healthy with these effective meal prep strategies.",
    image: stamina2,
    date: "June 10, 2025",
  },
  {
    id: 3,
    title: "Why Rest Days Are Just as Important",
    excerpt:
      "Recovery is crucial for progress. Here's why rest days help you get stronger.",
    image: stamina3,
    date: "June 10, 2025",
  },
];

const BlogFeatures = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Latest Blog Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{post.date}</p>
              <p className="text-gray-500 mb-4">{post.excerpt}</p>
              <button>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 hover:underline font-medium"
              >
                Read More
              </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogFeatures;
