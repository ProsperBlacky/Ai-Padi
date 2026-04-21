"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  "Are you more introverted or extroverted?",
  "Do you prefer structure or flexibility?",
  "Do you enjoy deep focus work or fast-paced tasks?",
  "Are you more creative, analytical, or practical?",

  "What kind of tasks do you enjoy doing without getting tired?",
  "Do you prefer working alone or with others?",
  "Are you more comfortable talking or writing?",
  "Do you enjoy explaining things or building things?",

  "What do people usually ask you for help with?",
  "What topics naturally interest you the most?",
  "If given a laptop today, what would you start doing?",

  "Do you currently have a job or are you starting from scratch?",
  "How many hours per week can you realistically commit?",
  "Do you have stable internet access?",
  "What device do you currently use (phone or laptop)?",

  "Have you ever made money online before?",
  "How soon do you need to start earning?",
  "Do you prefer quick small income or long-term high income?",
  "What is your target monthly income?",

  "Are you willing to work with clients?",
  "Do you prefer freelancing, remote jobs, or building a personal brand?",
  "Are you willing to learn technical skills if needed?"
];

export default function Second() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState([
    { sender: "ai", text: questions[0] }
  ]);
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState({});

  const sendMessage = () => {
    if (!input) return;

    // Save answer with question as key (VERY IMPORTANT)
    const updatedAnswers = {
      ...answers,
      [questions[step]]: input
    };

    const newMessages = [
      ...messages,
      { sender: "user", text: input }
    ];

    setInput("");

    if (step + 1 < questions.length) {
      newMessages.push({
        sender: "ai",
        text: questions[step + 1]
      });

      setMessages(newMessages);
      setAnswers(updatedAnswers);
      setStep(step + 1);
    } else {
      localStorage.setItem("answers", JSON.stringify(updatedAnswers));
      router.push("/result");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      {/* Chat Messages */}
      <div style={{ minHeight: "65vh" }}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.sender === "ai" ? "left" : "right",
              margin: "10px 0"
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: msg.sender === "ai" ? "#eee" : "#0F3D4C",
                color: msg.sender === "ai" ? "#000" : "#fff",
                padding: 12,
                borderRadius: 12,
                maxWidth: "75%"
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div style={{ display: "flex", gap: 10 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your answer..."
          style={{ flex: 1, padding: 12 }}
        />

        <button onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
