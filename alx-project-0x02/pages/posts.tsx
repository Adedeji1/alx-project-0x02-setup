"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      // Map API response to match PostProps
      const formatted = data.slice(0, 10).map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));

      setPosts(formatted);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />

      <div style={{ padding: "20px" }}>
        <h1>Posts</h1>

        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))
        )}
      </div>
    </div>
  );
}
