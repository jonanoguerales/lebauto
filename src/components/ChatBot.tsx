'use client';
import { useState } from "react";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const suggestions = [
    "Ver todos los coches disponibles",
    "¿Cuál es el coche más barato?",
    "¿Tienen SUVs eléctricos?",
  ];

  async function send(q: string) {
    if (!q.trim()) return;
    setLoading(true);
    setMessages(prev => [...prev, { sender: "user", text: q }]);
    setInput("");
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });
      const { answer } = await res.json();
      setMessages(prev => [...prev, { sender: "bot", text: answer }]);
    } catch (e) {
      console.error("Error en cliente:", e);
      setMessages(prev => [...prev, { sender: "bot", text: "Error, intenta de nuevo." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: "1rem auto", padding: "1rem", border: "1px solid #ccc" }}>
      <div style={{ minHeight: 300, overflowY: "auto", padding: "1rem", border: "1px solid #eee" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.sender === "user" ? "right" : "left", margin: "0.5rem 0" }}>
            <span
              style={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                borderRadius: "1rem",
                background: m.sender === "user" ? "#0078FF" : "#f1f0f0",
                color: m.sender === "user" ? "#fff" : "#000",
              }}
            >
              {m.text}
            </span>
          </div>
        ))}
        {messages.length === 0 && (
          <div>
            <p>Elige una opción para comenzar:</p>
            {suggestions.map((s, i) => (
              <button key={i} onClick={() => send(s)} style={{ display: "block", margin: "0.5rem 0" }}>
                {s}
              </button>
            ))}
          </div>
        )}
        {loading && (
          <div style={{ textAlign: "left", margin: "0.5rem 0" }}>
            <svg width="24" height="24" viewBox="0 0 50 50" style={{ animation: "spin 1s linear infinite" }}>
              <circle cx="25" cy="25" r="20" fill="none" stroke="#0078FF" strokeWidth="5" />
            </svg>
          </div>
        )}
      </div>
      <div style={{ display: "flex", marginTop: "1rem" }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send(input)}
          disabled={loading}
          style={{ flexGrow: 1, padding: "0.5rem", borderRadius: "1rem", border: "1px solid #ccc" }}
        />
        <button onClick={() => send(input)} disabled={loading} style={{ marginLeft: "0.5rem" }}>
          Enviar
        </button>
      </div>
      <style jsx>{`
        @keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
