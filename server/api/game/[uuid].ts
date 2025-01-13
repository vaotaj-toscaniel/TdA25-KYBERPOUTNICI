import { H3Event, sendError } from 'h3';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export default defineEventHandler(async (event: H3Event) => {
  const uuid = event.context.params?.uuid;

  switch (event.node.req.method) {
    case 'GET':
      return await getGameById(event, uuid);
    case 'PUT':
      return await updateGame(event, uuid);
    case 'DELETE':
      return await deleteGame(event, uuid);
    default:
      return sendError(event, createError({ statusCode: 405, statusMessage: 'Method Not Allowed' }));
  }
});

// Získání konkrétní hry
async function getGameById(event: H3Event, uuid: string) {
  const { data, error } = await supabase
    .from('games')
    .select('*')
    .eq('uuid', uuid);

  if (error || !data.length) {
    return sendError(event, createError({ statusCode: 404, statusMessage: 'Game not found' }));
  }

  return data[0];
}

// Aktualizace konkrétní hry
async function updateGame(event: H3Event, uuid: string) {
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

// Smazání konkrétní hry
async function deleteGame(event: H3Event, uuid: string) {
  const { error } = await supabase
    .from('games')
    .delete()
    .eq('uuid', uuid);

  if (error) {
    return sendError(event, createError({ statusCode: 400, statusMessage: error.message }));
  }

  return { message: 'Game deleted successfully' };
}
