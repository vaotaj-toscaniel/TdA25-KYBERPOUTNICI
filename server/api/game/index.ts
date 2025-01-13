import { H3Event, sendError } from 'h3';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

// Handler pro CRUD operace
export default defineEventHandler(async (event: H3Event) => {
  const method = event.node.req.method;

  switch (method) {
    case 'POST':
      return await createGame(event);
    case 'GET':
      return await getGames(event);
    case 'PUT':
      return await updateGame(event);
    case 'DELETE':
      return await deleteGame(event);
    default:
      return sendError(event, createError({ statusCode: 405, statusMessage: 'Method Not Allowed' }));
  }
});

// Vytvoření nové hry
async function createGame(event: H3Event) {
  const body = await readBody(event);

  const { error, data } = await supabase
    .from('games')
    .insert([body]);

  if (error) {
    return sendError(event, createError({ statusCode: 400, statusMessage: error.message }));
  }

  return data;
}

// Získání všech her
async function getGames(event: H3Event) {
  const { data, error } = await supabase
    .from('games')
    .select('*');

  if (error) {
    return sendError(event, createError({ statusCode: 400, statusMessage: error.message }));
  }

  return data;
}

// Aktualizace existující hry
async function updateGame(event: H3Event) {
  const uuid = event.context.params?.uuid;
  const body = await readBody(event);

  const { data, error } = await supabase
    .from('games')
    .update(body)
    .eq('uuid', uuid);

  if (error) {
    return sendError(event, createError({ statusCode: 400, statusMessage: error.message }));
  }

  return data;
}

// Smazání hry
async function deleteGame(event: H3Event) {
  const uuid = event.context.params?.uuid;

  const { error } = await supabase
    .from('games')
    .delete()
    .eq('uuid', uuid);

  if (error) {
    return sendError(event, createError({ statusCode: 400, statusMessage: error.message }));
  }

  return { message: 'Game deleted successfully' };
}
