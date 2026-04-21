"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function First() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const start = () => {
    if (!name || !email) {
      alert("Please enter your name and email");
      return;
    }

    // Save data
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    // Move to next step
    router.push("/Second");
  };

  return (
    <div
      style={{
        background: "#F5F7F8",
        height: "100vh",
        padding: 20,
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#0F3D4C",
          color: "#fff",
          padding: 15,
          borderRadius: 10,
        }}
      >
        Hello, I’m your Padi 👋
      </div>

      {/* Card */}
      <div
        style={{
          marginTop: 40,
          background: "#fff",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <h3>Let’s start your journey</h3>
        <p>What should I call you?</p>

        {/* Name Input */}
        <input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginTop: 10,
          }}
        />

        {/* Email Input */}
        <input
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginTop: 10,
          }}
        />

        <button
          onClick={start}
          style={{
            marginTop: 20,
            background: "#F05A28",
            color: "#fff",
            padding: 10,
            width: "100%",
            border: "none",
            borderRadius: 6,
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
            }
