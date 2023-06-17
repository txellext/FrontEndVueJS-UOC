<script setup>
const turtles = [
  {id:1, name:"Leonardo", weapon: "Katana"},
  {id:2, name:"Raphael", weapon: "Sai"},
  {id:3, name:"Donatello", weapon: "Ja"},
  {id:4, name:"Michelangelo", weapon: "Nunchuk"},
]

</script>

<template>
  <div class="new">
    <h1>V-for example</h1>
    <ul>
      <li v-for="turtle in turtles" :key="turtle.id">
        {{ turtle.id }} : {{ turtle.name }} uses {{ turtle.weapon }}
        <button @click="$router.push({name: 'single', params: {turtleId: turtle.id}})">View More</button>
      </li>
    </ul>
 
  </div>
</template>

<style>
  .new {
    display: grid;
  }
  li {
    cursor: pointer;
  }
  li:hover {
    color: RGB(160, 1004, 374, 1);
  }
</style>
