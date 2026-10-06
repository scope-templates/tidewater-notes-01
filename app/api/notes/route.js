import { NextResponse } from 'next/server';
import { addNote, listNotes } from '../../../lib/notes';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ notes: listNotes() });
}

export async function POST(request) {
  const isJson = (request.headers.get('content-type') ?? '').includes('application/json');
  let input;
  try {
    input = isJson ? await request.json() : Object.fromEntries(await request.formData());
  } catch {
    return NextResponse.json({ error: 'body must be JSON or form data' }, { status: 400 });
  }
  const title = typeof input?.title === 'string' ? input.title.trim() : '';
  const body = typeof input?.body === 'string' ? input.body.trim() : '';
  if (!title || !body) {
    return NextResponse.json({ error: 'title and body are required' }, { status: 400 });
  }
  const note = addNote({ title, body });
  if (isJson) {
    return NextResponse.json({ note }, { status: 201 });
  }
  return NextResponse.redirect(new URL('/', request.url), 303);
}
