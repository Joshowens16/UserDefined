# FullstackBoilerplate

Fullstack web app monorepo with a React frontend and Express backend.

- **Frontend**: TypeScript, React 19, Tailwind CSS v4, Vite, React Router — in `frontend/`
- **Backend**: TypeScript, Express, Prisma, PostgreSQL — in `backend/`
- **Auth**: JWT (jsonwebtoken) + bcrypt password hashing, stored in `localStorage`
- **Database**: PostgreSQL via `DATABASE_URL` in `backend/.env`
- **Package manager**: npm (frontend, backend, and root orchestration)

## Quick Reference

```bash
# Run both servers
npm run dev

# Frontend only (http://localhost:5173)
npm run dev:frontend

# Backend only (http://localhost:3000)
npm run dev:backend
```

## Key Paths

### Frontend
- `frontend/src/pages/` — route-level React components (PascalCase): Home, Login, Register
- `frontend/src/components/` — reusable UI components
- `frontend/src/context/AuthContext.tsx` — auth state provider (user, token, login/register/logout)
- `frontend/src/lib/api.ts` — `apiFetch` helper, auto-attaches JWT Bearer token
- `frontend/src/App.tsx` — root component with BrowserRouter, AuthProvider, and route definitions
- `frontend/src/index.css` — Tailwind CSS entry
- `frontend/vite.config.ts` — Vite config, proxies `/api` → backend on port 3000

### Backend
- `backend/src/index.ts` — Express app entry, dotenv, CORS, JSON parsing, route registration
- `backend/src/routes/` — API route modules (register in `index.ts` under `/api` prefix)
- `backend/src/routes/auth.ts` — auth routes: POST `/api/auth/register`, POST `/api/auth/login`, GET `/api/auth/me`
- `backend/src/middleware/auth.ts` — JWT verification middleware, attaches `req.userId`
- `backend/src/lib/prisma.ts` — Prisma client singleton
- `backend/prisma/schema.prisma` — database schema (PostgreSQL)
- `backend/prisma/migrations/` — migration history
- `backend/.env` — `DATABASE_URL` and `JWT_SECRET`

## Conventions

- **Frontend**: PascalCase components, camelCase functions, Tailwind utility classes
- **Frontend**: Use `type` keyword for type-only imports (verbatimModuleSyntax enabled)
- **Backend**: camelCase files/functions, PascalCase classes, all routes under `/api` prefix
- **Backend**: Use `.js` extension in imports (NodeNext module resolution)
- Dev proxy: Vite forwards `/api` requests to Express on port 3000
- No testing or deployment infra configured (intentionally minimal)

## Authentication

- JWT-based auth with bcrypt password hashing
- Register: `POST /api/auth/register` (email, name, password) → returns JWT + user
- Login: `POST /api/auth/login` (email, password) → returns JWT + user
- Current user: `GET /api/auth/me` (protected, requires Bearer token)
- Frontend stores JWT in `localStorage`, `AuthContext` provides auth state app-wide
- Protect backend routes with `authMiddleware` from `../middleware/auth.js`

## Adding a New API Route

1. Create `backend/src/routes/yourRoute.ts` with an Express `Router`
2. Import and register in `backend/src/index.ts`: `app.use('/api', yourRouter)`
3. For protected routes, import and use `authMiddleware` — access `req.userId` for the current user

## Adding a Prisma Model

1. Edit `backend/prisma/schema.prisma`
2. Run migration: `cd backend && npx prisma migrate dev --name describe_change`
3. Prisma client auto-regenerates — import from `../lib/prisma.js`

## Database

```bash
# Connection string is in backend/.env
# Run migrations
cd backend && npx prisma migrate dev

# Open Prisma Studio (GUI)
cd backend && npx prisma studio

# Reset database
cd backend && npx prisma migrate reset
```
