"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Analyze() {
  const router = useRouter();

  useEffect(() => {
    const run = async () => {
      const answers = JSON.parse(localStorage.getItem("answers"));

      const res = await fetch("/api/analyze", {
        method: "POST",
        body: JSON.stringify({ answers }),
      });

      const data = await res.json();

      localStorage.setItem("result", data.result);

      router.push("/result");
    };

    run();
  }, []);

  return <p>Analyzing your answers...</p>;
}
