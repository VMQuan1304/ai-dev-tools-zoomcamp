# Retrospective MVP

Initial scaffold for the retrospective-tool MVP. It contains a React + TypeScript frontend and a FastAPI backend; product features are intentionally not implemented yet.

## Common commands

Run `make help` to see the available shortcuts. The most common are:

```bash
make install
make test
make build
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Run the frontend unit tests with:

```bash
cd frontend
npm test
```

## Backend

```bash
cd backend
uv sync --extra dev
uv run uvicorn app.main:app --reload
```

Run the backend tests with:

```bash
cd backend
uv run pytest
```
