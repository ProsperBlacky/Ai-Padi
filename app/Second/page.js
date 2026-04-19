"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  "What kind of activities give you energy?",
  "How do you usually approach tasks?",
  "Which best describes you: Creative, Analytical, Communication, Technical, or Flexible?",
  "What type of work do you enjoy most?",
  "Do you prefer structured tasks or flexible tasks?",
  "Do you prefer working alone or with a team?",
  "What skills are you already exploring?",
  "Which area interests you most: Content, Design, Writing, Tech, Marketing?",
  "How many hours per week can you commit?",
  "What is your current income situation?",
  "What tools do you have access to?",
  "Why do you want to learn a digital skill?"
];

export default function Second() {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState([]);
  const router = useRouter();

  const next = () => {
    if (!input) return;

    const updated = [...answers, input];
    setAnswers(updated);
    setInput("");

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem("answers", JSON.stringify(updated));
      router.push("/analyze");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <div style={{
        background: "#0F3D4C",
        color: "#fff",
        padding: 15,
        borderRadius: 10
      }}>
        Question {step + 1} of {questions.length}
      </div>

      <div style={{
        marginTop: 30,
        background: "#E6F2F5",
        padding: 20,
        borderRadius: 10
      }}>
        {questions[step]}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your answer..."
        style={{
          width: "100%",
          marginTop: 20,
          padding: 10
        }}
      />

      <button
        onClick={next}
        style={{
          marginTop: 20,
          background: "#F05A28",
          color: "#fff",
          padding: 10,
          width: "100%",
          border: "none",
          borderRadius: 6
        }}
      >
        Next
      </button>
    </div>
  );
            }
