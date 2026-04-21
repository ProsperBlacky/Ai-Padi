"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Second() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const next = () => {
    if (!name || !email) return;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    router.push("/Interview");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Nice to meet you 👋</h2>
        <p>Let’s start with your details</p>

        <input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <button onClick={next} style={styles.button}>
          Continue →
        </button>
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
    width: "90%",
    maxWidth: 420,
    background: "#fff",
    padding: 25,
    borderRadius: 18
  },
  input: {
    width: "100%",
    padding: 12,
    marginTop: 10,
    borderRadius: 10,
    border: "1px solid #ddd"
  },
  button: {
    marginTop: 15,
    width: "100%",
    padding: 12,
    background: "#0F3D4C",
    color: "#fff",
    border: "none",
    borderRadius: 10
  }
};
