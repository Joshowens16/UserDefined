# userDefined

A web app where users can create, customize, and track their own personal metrics over time.

## Tech Stack

- **Frontend**: TypeScript, React 19, Tailwind CSS v4, Vite, React Router
- **Backend**: TypeScript, Express, Prisma, PostgreSQL
- **Auth**: JWT + bcrypt

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Setup

```bash
# Install dependencies
npm install

# Set up backend environment
cp backend/.env.example backend/.env
# Edit backend/.env with your DATABASE_URL and JWT_SECRET

# Run database migrations
cd backend && npx prisma migrate dev

# Start both servers
npm run dev
```

Frontend runs at `http://localhost:5173`, backend at `http://localhost:3000`.
