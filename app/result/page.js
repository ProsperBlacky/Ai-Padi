"use client";

import { useEffect, useState } from "react";
import jsPDF from "jspdf";

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

  const downloadPDF = () => {
    const doc = new jsPDF();

    const text = result || "No result available";

    const lines = doc.splitTextToSize(text, 180);

    doc.text(lines, 10, 10);

    doc.save("career-report.pdf");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Career Path</h2>

      <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>

      <button
        onClick={downloadPDF}
        style={{
          marginTop: 20,
          background: "#F05A28",
          color: "#fff",
          padding: 10,
          border: "none",
          borderRadius: 6
        }}
      >
        Download PDF
      </button>
    </div>
  );
                 }
