# Tidewater Notes

Tidewater Notes, a small notes app. Notes are kept in memory on the server, so the list
starts over whenever the process restarts. No database.

## Run locally

    npm install
    npm run dev                  # development server
    npm run build && npm start   # production build

Then open http://localhost:3000.

## Routes

- `GET /` the notes list and a form to add one
- `GET /api/notes` the notes as JSON
- `POST /api/notes` adds a note; accepts the form post (`title`, `body`) or a JSON body `{"title": "...", "body": "..."}`
- `GET /api/health` returns `{"ok": true}`

## Environment

- `PORT` port to listen on (default 3000)
