import { H3Event, sendError } from 'h3';
import supabase from '~/server/utils/supabase';

export default defineEventHandler(async (event: H3Event) => {
  const method = event.node.req.method;

  switch (method) {
    case 'POST':
      return await createGame(event);
    case 'GET':
      return await getGames(event);
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
