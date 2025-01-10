import { defineEventHandler, readBody } from "h3";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://your-supabase-url.supabase.co", // Nahraď svou Supabase URL
  "your-anon-key" // Nahraď svůj Supabase klíč
);

export default defineEventHandler(async (event) => {
  const { uuid } = event.context.params; // Získat UUID z cesty
  const method = event.req.method;

  if (method === "GET") {
    // Načíst hru podle UUID
    const { data, error } = await supabase
      .from("games")
      .select("*")
      .eq("uuid", uuid);

    if (error || !data.length) return { error: "Hra nebyla nalezena.", status: 404 };
    return data[0];
  }

  if (method === "PUT") {
    // Aktualizovat hru podle UUID
    const body = await readBody(event);
    const { name, difficulty, board } = body;

    const { data, error } = await supabase
      .from("games")
      .update({
        name,
        difficulty,
        board,
        updatedAt: new Date(),
      })
      .eq("uuid", uuid);

    if (error || !data.length) return { error: "Hra nebyla nalezena.", status: 404 };
    return { message: "Hra byla aktualizována.", data };
  }

  if (method === "DELETE") {
    // Smazat hru podle UUID
    const { error } = await supabase.from("games").delete().eq("uuid", uuid);

    if (error) return { error: "Hra nebyla nalezena.", status: 404 };
    return { message: "Hra byla smazána." };
  }

  return { error: "Nepodporovaná metoda.", status: 404 };
});
