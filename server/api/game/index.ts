import { defineEventHandler, readBody } from "h3";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://your-supabase-url.supabase.co", // Nahraď svou Supabase URL
  "your-anon-key" // Nahraď svůj Supabase klíč
);

export default defineEventHandler(async (event) => {
  const method = event.req.method;

  if (method === "GET") {
    // Načíst všechny hry
    const { data, error } = await supabase.from("games").select("*");
    if (error) return { error: "Chyba při načítání her." };
    return data;
  }

  if (method === "POST") {
    // Vytvořit novou hru
    const body = await readBody(event);
    const { name, difficulty, board } = body;

    const { data, error } = await supabase
      .from("games")
      .insert([
        {
          name,
          difficulty,
          board,
          createdAt: new Date(),
          updatedAt: new Date(),
          gameState: "opening",
        },
      ]);

    if (error) return { error: "Chyba při vytváření hry." };
    return { message: "Hra byla vytvořena.", data };
  }

  return { error: "Nepodporovaná metoda." };
});
