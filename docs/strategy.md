# userDefined — Strategy & Planning

## Core Concept

Users create and track any metric they want. A metric is any measurable value a user defines — savings, weight, steps, hours studied, etc. The user has full control over what they track and how.

## Key Questions to Decide

### What is a "Metric"?
- What fields define a metric? (name, unit, target/goal, category?)
- Can a metric have different types? (number, currency, percentage, yes/no?)
- Can users set goals for a metric? (e.g., "reach 180 lbs by June")

### How do users log data?
- Manual entry per metric? (e.g., "today my weight is 185")
- How often? Daily, weekly, whenever they want?
- Can they backfill or edit past entries?

### What does the user see?
- Dashboard with all their metrics at a glance?
- Charts/graphs showing progress over time?
- Streaks, trends, or summaries?

### Organization
- Can users group metrics into categories? (Health, Finance, etc.)
- Can they archive or delete metrics they no longer track?
- Is there a limit on how many metrics a user can have?

## Example Metrics

These cover a range of categories and data types — useful for testing:

| Metric | Unit | Category | Logging Frequency | Notes |
|---|---|---|---|---|
| Weight | lbs/kg | Health | Daily/weekly | Decimal values |
| Savings | $ | Finance | Weekly/monthly | Currency, running balance |
| Water Intake | oz/glasses | Health | Daily | Whole numbers |
| Hours Slept | hours | Health | Daily | Decimal values (e.g., 7.5) |
| Miles Run | miles/km | Fitness | Per session | Decimal, irregular frequency |

## Rough Data Model Ideas

```
User (already exists)
  └── Metric (user-defined thing to track)
        - name: "Weight"
        - unit: "lbs" (optional)
        - type: number | currency | percentage | boolean
        - goal: 180 (optional)
        - createdAt
        └── Entry (individual data point)
              - value: 185
              - note: "after morning run" (optional)
              - date: 2026-02-22
              - createdAt
```

## MVP Scope (Suggested)

Start small — get the core loop working before adding polish:

1. **Create a metric** — user gives it a name (and optionally a unit)
2. **Log an entry** — user records a value for a metric on a given date
3. **View entries** — user sees a list of their entries for a metric
4. **Dashboard** — user sees all their metrics with the latest value

## Where I Left Off

**Date:** 2026-02-22
**Branch:** `dashboard`

### Done
- Header component with home icon, title, conditional login/register vs logout buttons
- Landing page with hero section and "Get Started" CTA
- Dashboard page (placeholder) — logged-in users redirect here after login/register
- Home page redirects logged-in users to `/dashboard`
- Database set up (PostgreSQL `userdefined`, migrations run)
- Auth working (register, login, logout)

### Next Up
- Fix Dashboard loading guard (separate `loading` from `!user` check)
- Start building the Metric model in Prisma (define schema, run migration)
- Build "create a metric" flow (backend route + frontend form)
- Flesh out the dashboard to show user's metrics

## Future Ideas (Post-MVP)

- Charts/graphs (line chart of entries over time)
- Goals and progress indicators
- Categories/tags for organizing metrics
- Streaks and reminders
- Export data (CSV)
- Sharing or public metrics
