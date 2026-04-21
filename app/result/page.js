"use client";

import { useEffect, useState } from "react";

export default function Result() {
  const [result, setResult] = useState("");

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem("answers"));
    const name = localStorage.getItem("name");

    fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers, name }),
    })
      .then((res) => res.json())
      .then((data) => setResult(data.result));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Career Path</h2>

      <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
    </div>
  );
}
