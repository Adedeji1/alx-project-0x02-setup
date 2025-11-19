import React from "react";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div style={{ padding: "20px", }}>
      <h1>Welcome to the Home Page</h1>

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
    </div>
  );
}
