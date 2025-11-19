import React from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Link from "next/link";

export default function Header () {
     return (
    <header style={{ padding: "20px", background: "#f5f5f5" }}>
      <nav className="text-black">
        <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      </nav>
      <h1>My Next.js Project</h1>
    </header>
  );
};