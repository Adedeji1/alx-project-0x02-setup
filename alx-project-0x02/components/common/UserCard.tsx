"use client";
import React from "react";
import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid #ddd",
        marginBottom: "15px",
        borderRadius: "8px",
      }}
    >
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>
        Address: {address.street}, {address.suite}, {address.city}
      </p>
    </div>
  );
}
