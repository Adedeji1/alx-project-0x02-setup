import React from "react";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About Page</h1>
      <p>Below are reusable buttons with different sizes and shapes:</p>

      <div style={{ marginTop: "20px" }}>
        <Button label="Small Round" size="small" shape="rounded-sm" />

        <Button label="Medium Pill" size="medium" shape="rounded-full" />

        <Button label="Large Soft" size="large" shape="rounded-md" />
      </div>
    </div>
  );
}
