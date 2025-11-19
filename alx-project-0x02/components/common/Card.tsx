import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "16px",
        background: "#5d5d5d",
      }}
    >
      <h3 style={{ marginBottom: "8px" }}>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;