# AI PRD Generator

A conversational AI agent that conducts structured product discovery interviews and generates complete, well-formatted Product Requirements Documents automatically.

**Live Demo → [prd-generator-o5u2.onrender.com](https://prd-generator-o5u2.onrender.com)**

---

## What It Does

Most PMs start PRDs from a blank page. This tool changes that.

You describe a feature idea in plain language. The agent asks 4–5 clarifying discovery questions — one at a time, like a senior PM would in a real discovery session. Once it has enough context, it generates a complete structured PRD instantly.

**PRD sections generated:**
- Problem Statement
- Target Users & Personas
- Goals & Success Metrics
- User Stories
- Functional Requirements
- Out of Scope
- Open Questions & Risks

---

## Demo

![PRD Generator Demo](https://prd-generator-o5u2.onrender.com)

---

## Features

- **Conversational discovery** — agent asks focused questions before generating, not after
- **Split-panel UI** — chat on the left, live PRD renders on the right
- **Inline editing** — edit any section directly in the browser
- **PDF export** — download a formatted PRD with one click
- **Session memory** — agent remembers context across the conversation

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, Vanilla JS |
| Backend | Node.js, Express |
| AI | OpenAI GPT-4o |
| Deploy | Render |

---

## Architecture

```
User input
    ↓
Conversational agent (GPT-4o)
    ↓ asks clarifying questions
    ↓ builds context
    ↓ triggers PRD generation
Structured PRD output (7 sections)
    ↓
Split-panel UI with live render
    ↓
Inline edit + PDF export
```

---

## Running Locally

```bash
git clone https://github.com/harsha4474/prd-generator
cd prd-generator
npm install
```

Create a `.env` file:
```
OPENAI_API_KEY=your_openai_key_here
```

Start the server:
```bash
node server.js
```

Open [http://localhost:3000](http://localhost:3000)

---

## Why I Built This

Writing PRDs is one of the most time-consuming parts of the PM job. The real bottleneck isn't the writing — it's the discovery. This tool automates the discovery conversation, forcing structured thinking before generating the document.

As a PM building AI products, I wanted hands-on experience designing conversational agents with real product utility. This is the result.

---

## What's Next

- [ ] Export to Notion / Confluence
- [ ] PRD templates by product type (API, mobile, internal tool)
- [ ] Collaborative editing with shareable links
- [ ] Version history

---

**Built by A.V.S Sri Harsha** — AI PM | [LinkedIn](https://www.linkedin.com/in/avs-sri-harsha) | [Job Search Agent →](https://github.com/harsha4474/job-agent)
