"use client";

import { useRouter } from "next/navigation";

export default function First() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>🤖 Padi AI</div>

        <h1 style={styles.title}>
          Hey 👋 I’m Padi
        </h1>

        <p style={styles.text}>
          Good day. I’m your AI career coach.  
          I help you discover and build your digital skill path.
        </p>

        <p style={styles.sub}>
          I’ll guide you step by step — like a real mentor.
        </p>

        <button
          onClick={() => router.push("/Second")}
          style={styles.button}
        >
          Get Started
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
    borderRadius: 18,
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
  },
  logo: {
    fontSize: 18,
    color: "#0F3D4C",
    fontWeight: "bold",
    marginBottom: 10
  },
  title: {
    fontSize: 26,
    marginBottom: 10
  },
  text: {
    color: "#444",
    lineHeight: 1.5
  },
  sub: {
    marginTop: 10,
    color: "#777",
    fontSize: 14
  },
  button: {
    marginTop: 20,
    width: "100%",
    padding: 12,
    background: "#F05A28",
    color: "#fff",
    border: "none",
    borderRadius: 12
  }
};
