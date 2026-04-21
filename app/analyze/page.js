"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Analyze() {
  const router = useRouter();

  useEffect(() => {
    const runAnalysis = async () => {
      const answers = JSON.parse(localStorage.getItem("answers"));
      const name = localStorage.getItem("name");

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers, name })
      });

      const data = await res.json();

      localStorage.setItem("result", data.result);

      router.push("/Result");
    };

    runAnalysis();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Analyzing your profile...</h2>
        <p>Padi AI is building your career path</p>

        <div style={styles.loader}></div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#F5F7F8"
  },
  card: {
    textAlign: "center"
  },
  loader: {
    marginTop: 20,
    width: 40,
    height: 40,
    border: "4px solid #ddd",
    borderTop: "4px solid #0F3D4C",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  }
};
