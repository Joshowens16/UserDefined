# Adding a Prisma Model

When you need a new database table (e.g., a `Metric` table for user-defined metrics), follow these steps:

## 1. Define the model in the schema

Edit `backend/prisma/schema.prisma` and add your model. Use a relation to connect it to an existing model like `User`:

```prisma
model Metric {
  id        Int      @id @default(autoincrement())
  name      String
  unit      String?
  userId    Int
  user      User     @relation(fields: [userId], references: [id])
  createdAt DateTime @default(now())
}
```

If you're adding a relation to `User`, you also need to add the other side of the relation in the `User` model:

```prisma
model User {
  // ...existing fields
  metrics Metric[]
}
```

## 2. Generate and run the migration

```bash
cd backend && npx prisma migrate dev --name add_metric_table
```

This does three things:
- Creates a new SQL migration file in `backend/prisma/migrations/`
- Runs the migration against your database
- Regenerates the Prisma client so the new model is available in code

## 3. Use the model in your code

Import the Prisma client and query your new table:

```ts
import prisma from "../lib/prisma.js";

// Create
const metric = await prisma.metric.create({
  data: { name: "Weight", unit: "lbs", userId: 1 },
});

// Read (all metrics for a user)
const metrics = await prisma.metric.findMany({
  where: { userId: 1 },
});

// Update
await prisma.metric.update({
  where: { id: metric.id },
  data: { name: "Body Weight" },
});

// Delete
await prisma.metric.delete({ where: { id: metric.id } });
```

## Useful commands

```bash
# Re-run all migrations from scratch (destroys data)
cd backend && npx prisma migrate reset

# Regenerate the client without running a migration
cd backend && npx prisma generate

# Browse your data in a GUI
cd backend && npx prisma studio
```

## Tips

- Every relation needs both sides defined (e.g., `user User @relation(...)` on the child and `metrics Metric[]` on the parent).
- Use `@unique` for fields that must be unique, `?` for optional fields, and `@default(...)` for defaults.
- After any schema change, always run `prisma migrate dev` before using the new model in code.
