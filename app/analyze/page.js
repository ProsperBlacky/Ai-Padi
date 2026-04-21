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
        const answers = JSON.parse(localStorage.getItem("answers"));

        const res = await fetch("/api/analyze", {
          method: "POST",
          body: JSON.stringify({ answers }),
        });

        const data = await res.json();

        localStorage.setItem("result", data.result);

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
}      body: JSON.stringify({ answers }),
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
