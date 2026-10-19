# AI Coding Mentor

A learning and portfolio app that helps developers understand a public GitHub repository through explanatory AI chat and small exercises. The app should support users in solving problems themselves rather than simply writing code for them.

## Problem

It can be difficult to understand how the parts of a project fit together: components, data, API calls, and state. Generic AI responses often lack context from the user's own code and provide the solution too quickly.

## MVP

A user can:

1. Enter the URL of a **public** GitHub repository.
2. View the repository structure and select a text-based code file.
3. Ask a question about the selected file in an AI chat.
4. Receive an explanation that references the selected code and ends with a question to check understanding.
5. Enable _Learning mode_, where the assistant offers hints before providing a complete solution.

## Outside the MVP Scope

- Authentication, GitHub OAuth, or private repositories
- Automatic analysis or indexing of entire repositories
- Persistent chat history and learning statistics
- File editing, commits, or pull requests
- A custom MCP server and Docker deployment

These are deliberate exclusions. The MVP should be complete, testable, and easy to explain as a portfolio project.

## Technical Direction

- Next.js (App Router) and React
- TypeScript
- Tailwind CSS
- Next.js route handlers for server logic
- GitHub REST API for public repository data
- AI through a server-side API route; keys must never be sent to the browser
- Testing: unit tests for pure logic and at least one end-to-end user journey

## Proposed Architecture

```text
Browser (React UI)
  ├─ Repository URL + file picker
  └─ Chat + Learning mode
             │
             ▼
Next.js server / route handlers
  ├─ Validate input and limit data
  ├─ Fetch public files/repository structure from GitHub
  └─ Call AI with only the necessary code context
             │
             ▼
GitHub API / AI API
```

Keep responsibilities clear: the UI displays data, the server handles API keys and external calls, and domain logic (such as prompt building) lives in small, testable modules.

## Getting Started

Follow [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) one step at a time. Before each coding task, explain the goal in your own words, write a short plan, and test the smallest working piece.

You should have Node.js and pnpm installed before continuing.
pnpm version used: pnpm@11.22.0

First run:

```bash
pnpm install

pnpm run dev
```

Then you can open the app via http://localhost:3000 or what the terminal shows you.

### Quality Checks and Production Build

**For Quality Checks run:**

```bash
pnpm run lint
```

This will check the code and make sure there are no ESLint issues.

**And for Production Build run:**

```bash
pnpm run build
```

This will create a production version of the app and show any possible build issues.

## Future Extensions

Once the MVP is stable, the project can be extended with OAuth for private repositories, saved learning progress, semantic search, and a standalone MCP server packaged in Docker. The MCP server should be a separate project module with the minimum necessary permissions and its own security model.
