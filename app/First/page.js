"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function First() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const start = () => {
    if (!email) return;
    localStorage.setItem("email", email);
    router.push("/Second");
  };

  return (
    <div style={{
      background: "#F5F7F8",
      height: "100vh",
      padding: 20
    }}>
      <div style={{
        background: "#0F3D4C",
        color: "#fff",
        padding: 15,
        borderRadius: 10
      }}>
        AI Skill Advisor
      </div>

      <div style={{
        marginTop: 40,
        background: "#fff",
        padding: 20,
        borderRadius: 10
      }}>
        <h3>Start Your Skill Journey</h3>
        <p>Enter your email to begin</p>

        <input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginTop: 10
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
            borderRadius: 6
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
}
