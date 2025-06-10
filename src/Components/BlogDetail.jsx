import React from "react";
import { useParams } from "react-router-dom";
import stamina1 from "../assets/stamina1.jpg";
import stamina2 from "../assets/stamina2.jpg";
import stamina3 from "../assets/stamina3.jpg";

const blogPosts = [
  {
    id: 1,
    title: "5 Simple Exercises for Beginners",
    content:
      "Here's a full article on simple exercises you can try as a beginner. Always warm up, start slow, and stay consistent.",
    image: stamina1,
    date: "May 26, 2025",
  },
  {
    id: 2,
    title: "Meal Prep Tips for Busy People",
    content:
      "Meal prepping can save you a lot of time. Prepare protein, grains, and veggies in bulk and store them in containers.",
    image: stamina2,
    date: "May 24, 2025",
  },
  {
    id: 3,
    title: "Why Rest Days Are Just as Important",
    content:
      "Rest helps your muscles recover and grow. Never skip your rest days as they’re key to progress.",
    image: stamina3,
    date: "May 20, 2025",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post)
    return <p className="text-center text-red-500 mt-10">Post not found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      <p className="text-lg text-gray-700">{post.content}</p>
    </div>
  );
};

export default BlogDetail;
