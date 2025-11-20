"use client";
import React from "react";
import { type PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        marginBottom: "15px",
        borderRadius: "8px",
      }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
      <small style={{ color: "gray" }}>User ID: {userId}</small>
    </div>
  );
}
