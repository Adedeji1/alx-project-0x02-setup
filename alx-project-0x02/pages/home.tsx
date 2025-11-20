"use client";
import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<
    { title: string; content: string }[]
  >([]);

  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [...prev, post]);
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header />
      <h1>Welcome to the Home Page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          background: "black",
          color: "white",
          borderRadius: "8px",
        }}
      >
        Add New Post
      </button>

      <Card
        title="Getting Started"
        content="This card introduces the basics of using reusable components in Next.js."
      />

      <Card
        title="Next.js + TypeScript"
        content="TypeScript improves safety and maintainability in your project."
      />

      <Card
        title="Reusable UI Components"
        content="Create components once and reuse them across your entire app."
      />

      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
}
