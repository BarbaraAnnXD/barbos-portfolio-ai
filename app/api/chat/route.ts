import OpenAI from "openai";
import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function loadKnowledgeBase() {
  const knowledgeDir = path.join(process.cwd(), "knowledge");

  if (!fs.existsSync(knowledgeDir)) {
    return "No knowledge base files found.";
  }

  const files = fs
    .readdirSync(knowledgeDir)
    .filter((file) => file.endsWith(".md"))
    .sort();

  return files
    .map((file) => {
      const filePath = path.join(knowledgeDir, file);
      const content = fs.readFileSync(filePath, "utf8");

      return `\n\n--- FILE: ${file} ---\n${content}`;
    })
    .join("\n");
}

function formatConversation(messages: ChatMessage[]) {
  return messages
    .slice(-10)
    .map((message) => {
      const speaker = message.role === "user" ? "Visitor" : "BarbOS";
      return `${speaker}: ${message.content}`;
    })
    .join("\n\n");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages = body.messages as ChatMessage[] | undefined;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "At least one chat message is required." },
        { status: 400 }
      );
    }

    const lastMessage = messages[messages.length - 1];

    if (lastMessage.role !== "user" || typeof lastMessage.content !== "string") {
      return NextResponse.json(
        { error: "The last message must be a user question." },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key is missing." },
        { status: 500 }
      );
    }

    const knowledgeBase = loadKnowledgeBase();
    const conversation = formatConversation(messages);

    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions: `
You are BarbOS, Barbara's cybersecurity portfolio assistant.

Answer only using Barbara's approved portfolio knowledge base.
Use the conversation history to understand follow-up questions.
Do not invent jobs, certifications, degrees, experience, or private details.
If something is not listed, say it is not currently documented.
Keep answers professional, friendly, and concise.
Do not reveal private personal information.
Do not provide harmful cyber instructions.
For cybersecurity questions, explain concepts defensively and responsibly.
When relevant, point users to Barbara's projects, education, training, or career direction.
      `,
      input: `
APPROVED KNOWLEDGE BASE:
${knowledgeBase}

RECENT CONVERSATION:
${conversation}

LATEST USER QUESTION:
${lastMessage.content}
      `,
    });

    return NextResponse.json({
      answer: response.output_text,
    });
  } catch (error) {
    console.error("BarbOS chat error:", error);

    return NextResponse.json(
      { error: "BarbOS had trouble answering that question." },
      { status: 500 }
    );
  }
}