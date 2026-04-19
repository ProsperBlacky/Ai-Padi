"use client";

export default function ChatBubble({ text, type }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: type === "ai" ? "flex-start" : "flex-end",
        marginBottom: 10,
        animation: "fadeIn 0.3s ease"
      }}
    >
      <div
        style={{
          background: type === "ai" ? "#E6F2F5" : "#F05A28",
          color: type === "ai" ? "#000" : "#fff",
          padding: "12px 15px",
          borderRadius: 12,
          maxWidth: "70%"
        }}
      >
        {text}
      </div>
    </div>
  );
}
