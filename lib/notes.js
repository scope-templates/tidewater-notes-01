// Kept on globalThis so the page and the API route share one array however they are bundled.
const store =
  globalThis.__tidewaterNotes ??
  (globalThis.__tidewaterNotes = {
    nextId: 4,
    notes: [
      {
        id: 1,
        title: 'Welcome',
        body: 'Notes live in memory on the server and reset when it restarts.',
        createdAt: '2026-10-01T09:00:00.000Z',
      },
      {
        id: 2,
        title: 'Tide tables',
        body: 'High water at 06:40 and 19:05 on Saturday.',
        createdAt: '2026-10-02T08:15:00.000Z',
      },
      {
        id: 3,
        title: 'Boat shed',
        body: 'Order two tins of deck paint before the weekend.',
        createdAt: '2026-10-03T17:30:00.000Z',
      },
    ],
  });

export function listNotes() {
  return store.notes.slice().reverse();
}

export function addNote({ title, body }) {
  const note = { id: store.nextId++, title, body, createdAt: new Date().toISOString() };
  store.notes.push(note);
  return note;
}
