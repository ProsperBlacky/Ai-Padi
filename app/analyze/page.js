"use client";

import { useState } from "react";

export default function AnalyzePage() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");

  const questions = [
    "Introvert or extrovert?",
    "Structure or flexibility?",
    "Deep focus or fast-paced?",
    "Creative, analytical, or practical?",
    "Learn faster: watching, reading, or doing?",
    "Problem-solving, storytelling, or organizing?",
    "Work with people, systems, or ideas?",
    "Topics you enjoy?",
    "What do people ask you for help with?",
    "Existing skills?",
    "Device (phone/laptop)?",
    "Stable internet?",
    "Hours per week?",
    "Income urgency?",
    "Freelance, remote, or personal brand?"
  ];

  const handleChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Career Strategy AI</h1>

      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          <p>{q}</p>
          <input
            style={{ width: "100%", padding: 8 }}
            onChange={(e) => handleChange(i, e.target.value)}
          />
        </div>
      ))}

      <button onClick={handleSubmit} style={{ marginTop: 20 }}>
        Analyze My Path
      </button>

      <div style={{ marginTop: 30 }}>
        <h2>AI Result</h2>
        <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
      </div>
    </div>
  );
        }      </button>

      <h3>Result:</h3>
      <p>{result}</p>
    </div>
  );
}
