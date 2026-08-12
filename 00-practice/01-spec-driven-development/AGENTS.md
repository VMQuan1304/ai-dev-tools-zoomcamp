# Repository Guidelines

## Project Structure & Module Organization

This repository currently holds the specification for a retrospective-tool MVP. The source of truth is [_docs/plan.md](_docs/plan.md): read it before changing behavior, scope, or technology choices. Application code has not yet been scaffolded. When it is introduced, keep the frontend and API separate (for example, `frontend/` and `backend/`), place database migrations with the backend, and keep tests adjacent to their application area or in clearly named `tests/` directories. Do not add MVP features that the plan marks as out of scope.

## Build, Test, and Development Commands

There are no runnable commands yet. The planned stack is React, TypeScript, and Vite for the frontend; FastAPI and Pydantic for the API; PostgreSQL, SQLAlchemy, and Alembic for persistence; Redis and WebSockets for realtime updates. Use Docker Compose for the local multi-service environment; external deployment is not in scope yet.

When scaffolding is added, include Compose files and document the exact commands in the relevant README, including `docker compose up --build` and `docker compose down`. Keep conventional entry points working, such as `npm run dev`, `npm test`, `pytest`, and `alembic upgrade head`. Avoid committing generated build output, virtual environments, dependencies, or secrets.

## Coding Style & Naming Conventions

Use TypeScript for frontend code and Python for backend code. Prefer 2-space indentation in TypeScript and 4-space indentation in Python. Name React components in `PascalCase` (for example, `FeedbackCard.tsx`), functions and variables in `camelCase`/`snake_case` by language, and Python modules in lowercase `snake_case`.

Adopt and enforce formatters and linters with the initial scaffold: Prettier and ESLint for the frontend, and Ruff (plus a formatter) for Python. Keep API routes versioned under `/api/v1` as specified.

## Testing Guidelines

Use Vitest for frontend unit tests, pytest for backend tests, and Playwright for end-to-end flows. Name tests by behavior, such as `test_member_cannot_view_unrevealed_feedback` or `FeedbackCard.test.tsx`. Cover authorization boundaries, anonymous feedback, vote limits, and concurrent-vote protection; these are core MVP rules. Run the applicable unit suite before opening a pull request and add end-to-end coverage for a changed user flow.

## Commit & Pull Request Guidelines

Recent commits use concise, imperative-style subjects, commonly with a scope such as `docs: select FastAPI technology stack`. Follow that pattern: `feat: add feedback submission endpoint` or `docs: clarify vote rules`.

Keep commits focused. Pull requests should describe the user-facing change, link the relevant issue or plan section, list tests run, and include screenshots for visible UI changes. Call out any schema migration, configuration requirement, or deliberate deviation from `_docs/plan.md`.

Commit every completed change before handing work off. Do not bundle unrelated edits into the same commit.
