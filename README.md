# SmartTec

A modern, high-performance web application built with Next.js, React, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16.2.9
- **UI Library:** React 19.2.4
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12.42.0
- **Language:** TypeScript 5

## Project Structure

```
smarttec/
├── src/
│   ├── app/           # Next.js App Router pages
│   │   ├── layout.tsx # Root layout
│   │   └── page.tsx   # Home page
│   └── lib/           # Utility functions and types
│       ├── types.ts   # TypeScript interfaces
│       └── utils.ts   # Helper functions
├── public/            # Static assets
├── package.json       # Dependencies and scripts
├── tailwind.config.ts # Tailwind configuration
├── next.config.ts     # Next.js configuration
└── tsconfig.json      # TypeScript configuration
```

## Features

- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- TypeScript for type safety
- App Router for modern Next.js architecture
- SEO-optimized structure

## Setup

### Prerequisites

- Node.js 18+ (recommended: 20.x or later)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd /workspace/smarttec
```

2. Install dependencies:
```bash
npm install
```

## Run

### Development Mode

Start the development server with hot reloading:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Production Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

After building, start the production server:

```bash
npm run start
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure the build

### Option 2: Docker

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t smarttec .
docker run -p 3000:3000 smarttec
```

### Option 3: Traditional Server

1. Build the application:
```bash
npm run build
```

2. Install a process manager:
```bash
npm install -g serve
```

3. Serve the production build:
```bash
serve -s build -l 3000
```

### Environment Variables

Create a `.env.local` file for local environment variables:

```bash
touch .env.local
```

Example variables:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Scripts Reference

| Command       | Description                    |
|---------------|--------------------------------|
| `npm run dev` | Start development server       |
| `npm run build` | Build for production        |
| `npm run start` | Start production server     |
| `npm run lint`  | Run ESLint                   |

## License

Private - All rights reserved
