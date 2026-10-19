# Implementation Plan

Each step is a small milestone. Do not start the next one until you can explain and test the previous one.

## 1. Create the App Shell

Create a Next.js project with TypeScript, Tailwind, and App Router. Build a simple page with a title, purpose, and a clear empty state.

**You will learn:** component responsibilities, routing, and styling without mixing business logic into the UI.

**Done when:** the app starts, and the layout works on mobile and desktop with keyboard navigation.

## 2. Sketch the Data Model and User Journey

Describe the data flow in plain language: enter repository URL → validate → fetch structure → user selects a file → fetch file → ask AI a question → show response in chat. Define the few types the UI needs, such as `Repository`, `RepositoryFile`, `ChatMessage`, and `LearningMode`.

**You will learn:** data modeling, state, and separation of concerns.

**Done when:** you can explain which data lives in the browser and which calls must only be made by the server.

## 3. Parse and Validate GitHub URLs

Build a pure TypeScript function that accepts a public GitHub repository URL and returns `owner` and `repo` or a clear error. Write tests before or alongside the function.

**You will learn:** input validation, pure functions, and unit tests.

**Done when:** tests cover valid and invalid URLs.

## 4. Fetch and Display the Repository Structure

Add a server-side route handler that uses the GitHub API to fetch the file structure. Filter for allowed text files and guard against excessively large responses. Build a UI where the user can select one file.

**You will learn:** HTTP, route handlers, client/server boundaries, and error states.

**Done when:** a known public repository can be loaded, and errors are displayed helpfully.

## 5. Fetch the Selected File Securely

Fetch only the file the user selected. Check its file type, size, and text format on the server before sending its contents to the client or AI layer.

**You will learn:** trust boundaries and handling untrusted input.

**Done when:** binary, oversized, and disallowed files are rejected with clear messages.

## 6. Build AI Chat and Learning Mode

Add a server-side chat route. Send only the user's question, the selected file, and the minimum necessary metadata. Learning mode changes the prompt's teaching approach: explanation, a hint, and one question to check understanding. Store messages in local React state for the MVP.

**You will learn:** prompt contracts, asynchronous state, loading/error states, and responsible AI UX.

**Done when:** a question about the selected file produces a contextual, educational response, and the API key exists only on the server.

## 7. Improve Robustness

Improve loading, empty, and error states. Add accessible labels, focus management, and tests. Write at least one end-to-end test of the main user journey with mocked API calls.

**You will learn:** accessibility, the test pyramid, and robust product behavior.

**Done when:** the main user journey can be demonstrated reliably, including when an external call fails.

## 8. Prepare the Portfolio Presentation

Write a short architecture description, document deliberate exclusions, and optionally record a brief demo. Explain in particular why API calls and keys stay on the server and how Learning mode distinguishes the app from a regular chatbot.

## Later Phase: MCP and Docker

Only after the MVP: extract GitHub access into a standalone MCP server. Define a few narrowly scoped tools, such as `list_repository_files` and `read_repository_file`, with validation and output limits. Containerize it with Docker and document permissions, networking, and secrets. This phase is an architecture exercise and is not required for the first demo.
