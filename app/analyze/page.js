"use client";

import { useState } from "react";

export default function AnalyzePage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    const data = await res.json();

    // IMPORTANT: this is what prevents "undefined"
    setResult(data.result);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Analyze</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
        style={{ padding: 10, width: "100%" }}
      />

      <button onClick={handleSubmit} style={{ marginTop: 10 }}>
        Analyze
      </button>

      <h3>Result:</h3>
      <p>{result}</p>
    </div>
  );
}
