"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ChatBubble from "../components/ChatBubble";

const questions = [
  "What kind of activities give you energy?",
  "How do you approach tasks?",
  "Are you more creative, analytical, or communicative?",
  "Do you prefer working with people, systems, or ideas?",
  "Structured or flexible work?",
  "Do you prefer working alone or with a team?",
  "What skills are you already exploring?",
  "Which area interests you most?",
  "How many hours per week can you commit?",
  "What is your current income situation?",
  "What tools do you have?",
  "Why do you want to learn a digital skill?"
];

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { text: "Hi 👋 I'm your AI Skill Advisor.", type: "ai" },
    { text: questions[0], type: "ai" }
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const router = useRouter();

  const send = () => {
    if (!input) return;

    const newMessages = [
      ...messages,
      { text: input, type: "user" }
    ];

    const newAnswers = [...answers, input];

    if (step < questions.length - 1) {
      newMessages.push({
        text: "Typing...",
        type: "ai"
      });

      setTimeout(() => {
        setMessages([
          ...newMessages.slice(0, -1),
          { text: questions[step + 1], type: "ai" }
        ]);
      }, 800);
    } else {
      localStorage.setItem("answers", JSON.stringify(newAnswers));
      router.push("/analyze");
    }

    setMessages(newMessages);
    setAnswers(newAnswers);
    setInput("");
    setStep(step + 1);
  };

  return (
    <div style={{ padding: 20 }}>
      {messages.map((msg, i) => (
        <ChatBubble key={i} text={msg.text} type={msg.type} />
      ))}

      <div style={{ display: "flex", marginTop: 10 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: 10 }}
        />
        <button onClick={send} style={{ background: "#F05A28", color: "#fff", padding: 10 }}>
          Send
        </button>
      </div>
    </div>
  );
}      router.push("/analyze");
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
