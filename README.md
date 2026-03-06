# Claude Code Talk

A slide deck presentation about Claude Code tips, tricks, and extension mechanisms — built with Next.js and MDX.

**Live:** [claude-code-talk.vercel.app](https://claude-code-talk.vercel.app/)

## Topics Covered

- Workflow tips (subagents, keyboard shortcuts, custom tools, hooks)
- Extension mechanisms (MCP servers, plugins, skills, hooks)
- Choosing the right mechanism for your use case
- Frontend-specific MCPs and plugins
- Cool use cases and practical examples

## Tech Stack

- [Next.js](https://nextjs.org) 16
- [MDX](https://mdxjs.com/) slides with syntax highlighting via [Shiki](https://shiki.style/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- Deployed on [Vercel](https://vercel.com)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the presentation.

## Project Structure

```
src/
  content/slides/   # MDX slide files (numbered for ordering)
  app/              # Next.js app router pages
```
