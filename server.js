const express = require('express');
const OpenAI = require('openai');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Store conversation history per session
const sessions = {};

app.post('/chat', async (req, res) => {
  const { message, sessionId } = req.body;

  if (!sessions[sessionId]) {
    sessions[sessionId] = [
      {
        role: 'system',
        content: `You are an expert Product Manager AI assistant that helps create professional Product Requirements Documents (PRDs).

Your job is to:
1. First, ask the user 4-5 focused clarifying questions ONE AT A TIME about their feature/product idea (target users, platform, business goals, constraints, success metrics)
2. Once you have enough context (after ~4-5 exchanges), generate a complete structured PRD

The PRD must include these exact sections:
## 🎯 Problem Statement
## 👥 Target Users & Personas
## 🏆 Goals & Success Metrics
## 📖 User Stories
## ⚙️ Functional Requirements
## 🚫 Out of Scope
## ❓ Open Questions & Risks

Start by warmly greeting the user and asking your FIRST clarifying question about their idea. Do not ask multiple questions at once. Be conversational but professional.

When you have enough info, say "Great, I have everything I need! Generating your PRD now..." and then output the full PRD.`
      }
    ];
  }

  sessions[sessionId].push({ role: 'user', content: message });

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: sessions[sessionId],
      temperature: 0.7,
    });

    const reply = response.choices[0].message.content;
    sessions[sessionId].push({ role: 'assistant', content: reply });

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ PRD Generator running on port ${PORT}`);
});
