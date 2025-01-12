<template>
  <div>
    <h1> Úvodní stránka (Ještě bude dokončena)</h1>
    <NuxtLink to="/games">
      <button>HRÁT</button>
    </NuxtLink>
    <BaseFooter></BaseFooter>
  </div>
</template>

<style>
p{
  font-size: 20px;
}
button{
  border: none;
  background-color: #E31837;
  color: white;
  padding: 20px 40px;
  font-size: 20px;
  cursor: pointer;
}
button:hover{
  background-color: #c21630;
}
</style>