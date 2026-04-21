"use client";

import { useEffect, useState } from "react";

export default function Result() {
  const [result, setResult] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("result");
    setResult(data);
  }, []);

  const download = () => {
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "padi-ai-report.txt";
    a.click();
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Your Career Report</h2>

        <pre style={styles.text}>{result}</pre>

        <button onClick={download} style={styles.button}>
          Download Report
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    background: "#F5F7F8",
    minHeight: "100vh"
  },
  card: {
    background: "#fff",
    padding: 20,
    borderRadius: 15
  },
  text: {
    whiteSpace: "pre-wrap"
  },
  button: {
    marginTop: 20,
    background: "#F05A28",
    color: "#fff",
    padding: 12,
    border: "none",
    borderRadius: 10
  }
};
