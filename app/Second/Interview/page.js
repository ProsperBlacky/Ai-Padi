"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  "Are you more introverted or extroverted?",
  "Do you prefer structure or flexibility?",
  "Do you enjoy deep focus or fast-paced work?",
  "Are you more creative or analytical?",
  "What do people ask you for help with?",
  "What are your strongest skills?",
  "Do you prefer working alone or with people?",
  "What device do you use?",
  "How many hours can you learn weekly?",
  "How urgent is income for you?",
  "What interests you most?",
  "Are you open to freelancing or business?"
];

export default function Interview() {
  const router = useRouter();
  const chatRef = useRef(null);

  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState({});

  const [messages, setMessages] = useState([
    { role: "ai", text: "Good. Let’s begin your journey 👇" },
    { role: "ai", text: questions[0] }
  ]);

  // smooth scroll (LIQUID FEEL)
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;

    const q = questions[step];

    const updated = {
      ...answers,
      [q]: input
    };

    const newMessages = [
      ...messages,
      { role: "user", text: input }
    ];

    const next = step + 1;

    if (next < questions.length) {
      setTimeout(() => {
        setMessages([
          ...newMessages,
          { role: "ai", text: questions[next] }
        ]);
      }, 500);

      setStep(next);
      setAnswers(updated);
    } else {
      localStorage.setItem("answers", JSON.stringify(updated));
      router.push("/result");
    }

    setInput("");
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>Padi AI Coach</div>

      <div ref={chatRef} style={styles.chat}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: m.role === "ai" ? "flex-start" : "flex-end"
            }}
          >
            <div style={{
              background: m.role === "ai" ? "#fff" : "#0F3D4C",
              color: m.role === "ai" ? "#000" : "#fff",
              padding: 12,
              borderRadius: 15,
              margin: 5,
              maxWidth: "75%"
            }}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div style={styles.inputBox}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your answer..."
          style={styles.input}
        />

        <button onClick={send} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: { height: "100vh", display: "flex", flexDirection: "column" },
  header: { padding: 15, background: "#0F3D4C", color: "#fff" },
  chat: { flex: 1, overflowY: "auto", padding: 15, background: "#F5F7F8" },
  inputBox: { display: "flex", padding: 10, background: "#fff" },
  input: { flex: 1, padding: 12 },
  button: {
    marginLeft: 10,
    background: "#F05A28",
    color: "#fff",
    border: "none",
    padding: "10px 15px"
  }
};
