import React from "react";
import Link from "next/link";
import Posts from "@/pages/posts";

export default function Header () {
     return (
    <header style={{ padding: "20px", }}>
      <nav className="text-black">
        <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      </nav>
      <h1>My Next.js Project</h1>
    </header>
  );
};