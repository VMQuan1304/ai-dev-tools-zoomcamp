.PHONY: help install frontend-install backend-install frontend-dev backend-dev frontend-test backend-test test frontend-build build clean

# Keep uv's cache inside the project so the Makefile also works in restricted
# environments where a user-level cache directory is not writable.
UV_CACHE_DIR ?= $(CURDIR)/.uv-cache
export UV_CACHE_DIR

help:
	@echo "Available commands:"
	@echo "  make install         Install frontend and backend dependencies"
	@echo "  make frontend-dev    Start the Vite development server"
	@echo "  make backend-dev     Start the FastAPI development server"
	@echo "  make test            Run all tests"
	@echo "  make build           Build the frontend for production"
	@echo "  make clean           Remove generated frontend output"

install: frontend-install backend-install

frontend-install:
	npm --prefix frontend install

backend-install:
	cd backend && uv sync --extra dev

frontend-dev:
	npm --prefix frontend run dev

backend-dev:
	cd backend && uv run uvicorn app.main:app --reload

frontend-test:
	npm --prefix frontend test

backend-test:
	cd backend && uv run pytest

test: frontend-test backend-test

frontend-build:
	npm --prefix frontend run build

build: frontend-build

clean:
	rm -rf frontend/dist frontend/tsconfig.tsbuildinfo
