<script setup lang="ts">
</script>

<template>
  <div>
    <div class="selection">
      <h1>Uložené hry</h1>
      <div class="filters">
        <div class="filter">
        <label for="difficulty">Obtížnost: </label>
      <select name="difficulty" id="difficulty">
        <option value="1">Easy</option>
        <option value="2">Medium</option>
        <option value="3">Hard</option>
        <option value="4">Extreme</option>
      </select>
      </div>
      <div class="filter">
        <label for="status">Stav: </label>
      <select name="status" id="status">
        <option value="1">Opening</option>
        <option value="2">Midgame</option>
        <option value="3">Ending</option>
      </select>
      </div>
      <button class="apply">Aplikovat filtry</button>
      </div>
    </div>


    <div class="games">

      <div class="game-card">
        <h1>Název hry</h1>
        <p>Datum vytvoření:</p>
        <p>Stav hry:</p>
        <p>Obtížnost:</p>
        <img src="/zarivka_easy_modre.png" alt="icon" class="icon">
        <NuxtLink to="/games/[id]">
          <button class="play">HRÁT</button>
        </NuxtLink>
      </div>

      <div class="game-card">
        <h1>Název hry</h1>
        <p>Datum vytvoření:</p>
        <p>Stav hry:</p>
        <p>Obtížnost:</p>
        <img src="/zarivka_easy_modre.png" alt="icon" class="icon">
        <NuxtLink to="/games/[id]">
          <button class="play">HRÁT</button>
        </NuxtLink>
      </div>

      <div class="game-card">
        <h1>Název hry</h1>
        <p>Datum vytvoření:</p>
        <p>Stav hry:</p>
        <p>Obtížnost:</p>
        <img src="/zarivka_easy_modre.png" alt="icon" class="icon">
        <NuxtLink to="/games/[id]">
          <button class="play">HRÁT</button>
        </NuxtLink>
      </div>

      <div class="game-card">
        <h1>Název hry</h1>
        <p>Datum vytvoření:</p>
        <p>Stav hry:</p>
        <p>Obtížnost:</p>
        <img src="/zarivka_easy_modre.png" alt="icon" class="icon">
        <NuxtLink to="/games/[id]">
          <button class="play">HRÁT</button>
        </NuxtLink>
      </div>

      <div class="game-card">
        <h1>Název hry</h1>
        <p>Datum vytvoření:</p>
        <p>Stav hry:</p>
        <p>Obtížnost:</p>
        <img src="/zarivka_easy_modre.png" alt="icon" class="icon">
        <NuxtLink to="/games/[id]">
          <button class="play">HRÁT</button>
        </NuxtLink>
      </div>

      <div class="game-card">
        <h1>Název hry</h1>
        <p>Datum vytvoření:</p>
        <p>Stav hry:</p>
        <p>Obtížnost:</p>
        <img src="/zarivka_easy_modre.png" alt="icon" class="icon">
        <NuxtLink to="/games/[id]">
          <button class="play">HRÁT</button>
        </NuxtLink>
      </div>

      <div class="game-card">
        <h1>Název hry</h1>
        <p>Datum vytvoření:</p>
        <p>Stav hry:</p>
        <p>Obtížnost:</p>
        <img src="/zarivka_easy_modre.png" alt="icon" class="icon">
        <NuxtLink to="/games/[id]">
          <button class="play">HRÁT</button>
        </NuxtLink>
      </div>

      <div class="game-card">
        <h1>Název hry</h1>
        <p>Datum vytvoření:</p>
        <p>Stav hry:</p>
        <p>Obtížnost:</p>
        <img src="/zarivka_easy_modre.png" alt="icon" class="icon">
        <NuxtLink to="/games/[id]">
          <button class="play">HRÁT</button>
        </NuxtLink>
      </div>
    </div>


  </div>
</template>

<style scoped>
.selection{
  text-align: center;
  background-color: rgb(205, 205, 205);
  width: 100vw;
  margin: 0;
  padding: 30px;
}
.selection h1{
  font-size: 50px;
  padding: 10px;
}
.selection select{
  width: 300px;
  height: 75px;
  font-size: 30px;
  cursor: pointer;
  outline: 0;
  border: 0;
  padding: 10px;
}
.selection label{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 35px;
}
.filters{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.apply{
  border: none;
  color: white;
  background-color: #0070BB;
  width: 300px;
  height: 75px;
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.apply:hover{
  background-color: #0067ac;
}
.games{
  justify-content: center;
  padding: 25px 75px;
  display: grid; 
  grid-template-columns: 500px 500px 500px 500px; 
  /* grid-template-rows: 500px 500px 500px;  */
  gap: 30px 30px; 
}
.game-card{
  padding: 30px;

  height: 500px;
  width: 500px;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.56);
}
.game-card h1{
  text-align: center;
  font-size: 40px;
}
.game-card p{
  font-size: 25px;
  margin: 5px 0;
}
.game-card .icon{
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 30px;
  height: 175px;
}
.game-card .play{
  border: none;
  background-color: #E31837;
  color: white;
  padding: 20px 40px;
  font-size: 20px;
  cursor: pointer;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
