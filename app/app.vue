<template>
  <div>
    <NuxtPage/>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'

// Inicializace Supabase klienta
const supabase = createClient(
  'https://oiyuuxymrpmwvblqzonh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9peXV1eHltcnBtd3ZibHF6b25oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3NDg1MzIsImV4cCI6MjA1MTMyNDUzMn0.AHUUjW9oLENgikgQdregvR2Sv0EoneJdX2zTGKIIZaI'
)
const games = ref([])

async function getGames() {
  const { data } = await supabase.from('games').select()
  games.value = data
}

onMounted(() => {
  getGames()
})

</script>