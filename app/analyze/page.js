"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Analyze() {
  const router = useRouter();
  const [loadingText, setLoadingText] = useState("Analyzing your responses");

  useEffect(() => {
    // simple animation effect
    const interval = setInterval(() => {
      setLoadingText((prev) =>
        prev.length > 30 ? "Analyzing your responses" : prev + "."
      );
    }, 500);

    const run = async () => {
      try {
        const raw = localStorage.getItem("answers");

        // FIX 1: prevent crash if answers is null or invalid JSON
        const answers = raw ? JSON.parse(raw) : null;

        const res = await fetch("/api/analyze", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // FIX 2: prevent sending undefined payload
          body: JSON.stringify({ answers: answers || [] }),
        });

        // FIX 3: prevent crash if API fails or returns non-json
        if (!res.ok) {
          throw new Error(`API Error: ${res.status}`);
        }

        const data = await res.json();

        localStorage.setItem("result", data.result || "");

        router.push("/result");
      } catch (err) {
        console.error("Error:", err);
      }
    };

    run();

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div style={{ padding: 40 }}>
      <h2>{loadingText}</h2>
      <p>Please wait while AI processes your answers...</p>
    </div>
  );
      }
