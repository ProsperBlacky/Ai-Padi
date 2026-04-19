"use client";
import { useEffect, useState } from "react";
import jsPDF from "jspdf";

export default function Result() {
  const [result, setResult] = useState("");

  useEffect(() => {
    setResult(localStorage.getItem("result"));
  }, []);

  const download = () => {
    const doc = new jsPDF();
    doc.text(result || "", 10, 10);
    doc.save("result.pdf");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Skill Report</h2>

      <div style={{
        background: "#fff",
        padding: 20,
        borderRadius: 10,
        marginTop: 20
      }}>
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {result}
        </pre>
      </div>

      <button
        onClick={download}
        style={{
          marginTop: 20,
          background: "#F05A28",
          color: "#fff",
          padding: 10
        }}
      >
        Download PDF
      </button>
    </div>
  );
}
