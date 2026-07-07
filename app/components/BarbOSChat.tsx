"use client";

import { useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function BarbOSChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hey, I’m BarbOS. Ask me about Barbara’s cybersecurity projects, education, training, school projects, hands-on systems experience, or target roles.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  async function askBarbOS(question?: string) {
    const questionToAsk = question || message;

    if (!questionToAsk.trim() || loading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: questionToAsk,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessages([
          ...updatedMessages,
          {
            role: "assistant",
            content:
              data.error || "BarbOS had trouble answering that question.",
          },
        ]);
        return;
      }

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "BarbOS could not connect. Check the server and API key.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    setMessages([
      {
        role: "assistant",
        content:
          "Chat cleared. Ask me about Barbara’s portfolio, projects, skills, education, or career direction.",
      },
    ]);
    setMessage("");
  }

  return (
    <div className="rounded-3xl border border-purple-400/30 bg-slate-950/75 p-6 backdrop-blur-sm">
      <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Live Assistant
          </p>
          <h3 className="text-2xl font-bold text-white">Ask BarbOS</h3>
          <p className="mt-2 max-w-3xl leading-7 text-slate-300">
            Chat with Barbara&apos;s portfolio assistant about her cybersecurity
            projects, education, training, school work, hands-on systems
            experience, and target roles.
          </p>
        </div>

        <button
          onClick={clearChat}
          className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-purple-300/40 hover:bg-purple-300/10 hover:text-purple-100"
        >
          Clear chat
        </button>
      </div>

      <div className="mb-5 max-h-[420px] space-y-4 overflow-y-auto rounded-2xl border border-white/10 bg-black/30 p-4">
        {messages.map((chatMessage, index) => (
          <div
            key={`${chatMessage.role}-${index}`}
            className={`flex ${
              chatMessage.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-7 ${
                chatMessage.role === "user"
                  ? "bg-cyan-300 text-slate-950"
                  : "border border-cyan-300/20 bg-cyan-950/20 text-slate-200"
              }`}
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
                {chatMessage.role === "user" ? "You" : "BarbOS"}
              </p>
              <p className="whitespace-pre-wrap">{chatMessage.content}</p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="rounded-2xl border border-purple-300/20 bg-purple-950/30 px-4 py-3 text-sm text-purple-100">
              BarbOS is thinking...
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              askBarbOS();
            }
          }}
          placeholder="Ask a follow-up about Barbara’s projects, skills, training, or career direction..."
          className="min-h-12 flex-1 rounded-full border border-white/10 bg-white/5 px-5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
        />

        <button
          onClick={() => askBarbOS()}
          disabled={loading}
          className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Thinking..." : "Send"}
        </button>
      </div>
    </div>
  );
}