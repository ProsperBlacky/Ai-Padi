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
    <div style={{ padding: 30 }}>
      <h2>Your Result</h2>

      <pre style={{ whiteSpace: "pre-wrap" }}>
        {result}
      </pre>

      <br />

      <button onClick={download}>
        Download PDF
      </button>
    </div>
  );
}
