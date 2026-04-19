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
    <div style={{ padding: 30 }}>
      <h2>AI Skill Advisor</h2>
      <p>Enter your email to begin</p>

      <input
        placeholder="your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={start}>Start</button>
    </div>
  );
}
