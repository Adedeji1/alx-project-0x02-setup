"use client";

import React from "react";
import { ButtonProps } from "@/interfaces";

export default function Button({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
}: ButtonProps) {
  const sizeStyles = {
    small: "8px 14px",
    medium: "10px 18px",
    large: "14px 24px",
  };

  const borderRadius = {
    "rounded-sm": "4px",
    "rounded-md": "8px",
    "rounded-full": "50px",
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: sizeStyles[size],
        borderRadius: borderRadius[shape],
        background: "black",
        color: "white",
        border: "none",
        cursor: "pointer",
        marginRight: "12px",
      }}
    >
      {label}
    </button>
  );
}
