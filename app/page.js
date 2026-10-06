import { listNotes } from '../lib/notes';

export const dynamic = 'force-dynamic';

export default function Home() {
  const notes = listNotes();
  return (
    <main>
      <h1>Tidewater Notes</h1>
      <form method="post" action="/api/notes">
        <input name="title" placeholder="Title" required maxLength={120} />
        <textarea name="body" placeholder="Write a note" rows={3} required maxLength={2000} />
        <button type="submit">Add note</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <time dateTime={note.createdAt}>{note.createdAt.slice(0, 10)}</time>
          </li>
        ))}
      </ul>
    </main>
  );
}
