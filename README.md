# Vite proxy does not work in Docker environment

Issue: https://github.com/vitejs/vite/issues/14719

I would like to run both, backend and frontend in Docker.

Backend is running in `php:apache` container, exposing `/api.php` at `localhost:8000`.

Frontend is running `node` container, exposing vite server at `localhost:5173`.

Vite proxy config:

```json
{
  "/api.php": "http://localhost:8000"
}
```

When I run the backend in Docker and frontend without, it works like a charm.

When I run both with Docker, the frontend is accessible and the backend too, but the call from frontend via proxy to the backend does not work with `fetch()`.

## Reproduction

1. Clone this repository
2. Run `npm run dev:direct` >> will show "Hello PHP" in the browser
3. Run `npm run dev:docker` >> will show an error in the logs