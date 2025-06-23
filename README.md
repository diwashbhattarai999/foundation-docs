# Foundation Docs

**Foundation** is a developer-first documentation hub built using [Fumadocs](https://github.com/fuma-nama/fumadocs) and React Router.  
It organizes your personal learning notes and references across Git, GitHub, Node.js, frontend, backend, and beyond.

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn
```

### 2. Start the Development Server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Your local server will be available at: [http://localhost:5173](http://localhost:5173)

---

## Structure Overview

```
app/
├── content/docs/        # MDX-based documentation files
├── docs/                # Fumadocs route handlers and layout logic
├── source.ts            # Page tree and sidebar configuration
├── root.tsx             # Main layout + providers
└── app.css              # Global styles
```

---

## Writing Docs

All documentation is written using **MDX** with support for components like:

- `<Cards>` and `<Card>`
- `<Tabs>`, `<Callout>`, etc.
- Auto-generated ToC and navigation

Each page requires frontmatter:

```mdx
---
title: Git Basics
description: Learn how Git works internally
---
```

---

## 🛠 Customization

- Update `DocsLayout`, `HomeLayout`, and `meta()` functions to match your branding
- Use `source.pageTree` in `source.ts` to manually control sidebar structure

---

## Built With

- [React Router](https://reactrouter.com/)
- [Fumadocs UI](https://fumadocs.vercel.app/)
- [Vite](https://vitejs.dev/)
- [MDX](https://mdxjs.com/)

---

## Why Foundation?

> Because documentation is not just for users—it's for you.

Use Foundation to centralize everything you learn, build your second brain, and never forget a trick again.
