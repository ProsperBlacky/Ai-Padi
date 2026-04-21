"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  "Are you more introverted or extroverted?",
  "Do you prefer structure or flexibility?",
  "Do you enjoy deep focus or fast-paced work?",
  "Are you more creative, analytical, or practical?",

  "What kind of tasks do you enjoy doing without getting tired?",
  "Do you prefer working alone or with others?",
  "Are you more comfortable talking or writing?",

  "What do people ask you for help with?",
  "What topics interest you the most?",

  "Do you currently have a job or are you starting from scratch?",
  "How many hours per week can you commit?",
  "Do you have stable internet?",
  "What device do you use?",

  "Have you ever made money online before?",

  "How soon do you need to start earning?",
  "Do you prefer quick income or long-term income?",
  "What is your target monthly income?",

  "Are you willing to work with clients?",
  "Do you prefer freelancing, remote job, or personal brand?",
  "Are you willing to learn technical skills if needed?"
];

export default function Second() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [input, setInput] = useState("");

  const next = () => {
    if (!input) return;

    const updated = {
      ...answers,
      [questions[step]]: input
    };

    setAnswers(updated);
    setInput("");

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      localStorage.setItem("answers", JSON.stringify(updated));
      router.push("/result");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>{questions[step]}</h3>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", marginTop: 20, padding: 10 }}
      />

      <button onClick={next} style={{ marginTop: 20 }}>
        Next
      </button>
    </div>
  );
}
