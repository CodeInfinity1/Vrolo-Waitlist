# Vrolo Waitlist Landing Page

A production-ready waitlist landing page for **Vrolo** — a B2B SaaS product for AI-powered business continuity.

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Framework | Next.js 15+ (App Router, TypeScript)|
| Styling   | Vanilla CSS (design system)         |
| Database  | MongoDB via Mongoose                |
| API       | Next.js API Routes                  |
| Font      | Inter (Google Fonts, self-hosted)   |

---

## Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)

---

## Setup & Run Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Edit `.env.local` in the project root:

```env
# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/vrolo-waitlist

# Or MongoDB Atlas
# MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/vrolo-waitlist?retryWrites=true&w=majority
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## API Endpoint

### `POST /api/waitlist`

Accepts a JSON body to register a waitlist entry.

**Request:**

```json
{
  "email": "jane@company.com",      // required
  "name": "Jane Smith",             // optional
  "company": "Acme Corp",           // optional
  "role": "Head of Operations"      // optional
}
```

**Responses:**

| Status | Meaning                        |
|--------|--------------------------------|
| 201    | Successfully joined waitlist   |
| 400    | Invalid or missing email       |
| 409    | Email already registered       |
| 500    | Server error                   |

**Success (201):**
```json
{
  "success": true,
  "message": "You're on the waitlist! We'll reach out when early access opens.",
  "data": { "id": "...", "email": "jane@company.com", "createdAt": "..." }
}
```

---

## Project Structure

```
vrolo-waitlist/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── waitlist/
│   │   │       └── route.ts       ← POST /api/waitlist
│   │   ├── globals.css            ← Full design system
│   │   ├── layout.tsx             ← Root layout + metadata
│   │   └── page.tsx               ← Landing page
│   ├── lib/
│   │   └── mongodb.ts             ← DB connection (singleton)
│   └── models/
│       └── Waitlist.ts            ← Mongoose schema/model
├── .env.local                     ← Environment variables
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## Design System

| Token          | Value     |
|----------------|-----------|
| Background     | `#0B0F19` |
| Surface        | `#111827` |
| Border         | `#1F2937` |
| Primary        | `#4F46E5` |
| Accent         | `#06B6D4` |
| Text Primary   | `#E5E7EB` |
| Text Secondary | `#9CA3AF` |

---

## Production Deploy

```bash
npm run build
npm run start
```

For production, set `MONGODB_URI` to your Atlas connection string in your hosting provider's environment variables (e.g., Vercel, Railway, Render).

---

## MongoDB Atlas (Recommended for Production)

1. Create a free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Create a database user
3. Whitelist your IP (or `0.0.0.0/0` for dev)
4. Copy the connection string into `.env.local`
