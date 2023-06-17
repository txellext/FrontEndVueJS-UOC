<script setup>

import TurtleCard from '../components/TurtleCard.vue';
import { ref } from 'vue';
import myAPI from '../services/services.js';

const turtles = [
  {id:1, name:"Leonardo", weapon: "Katana", color: 'blue'},
  {id:2, name:"Raphael", weapon: "Sai", color: 'red'},
  {id:3, name:"Donatello", weapon: "Ja", color: 'purple'},
  {id:4, name:"Michelangelo", weapon: "Nunchuk", color: 'orange'},
]

const totalCount = ref(0);
const turtleName = ref('');

const updateCounter = (name) => {
  totalCount.value++;
  turtleName.value = name;
}

myAPI.getPhotos().then( (response) => {
  console.log(response.data);
});


</script>

<template>
  <div class="new">
    <h1>API example</h1>
    <p>Total counter: {{  totalCount }}</p>
    <p v-if="turtleName != ''">Turtle: {{  turtleName }}</p>
      <section class="cards">
        <TurtleCard v-for="turtle in turtles" :key="turtle.id" :infoTurtles="turtle" @response="updateCounter"/>       
      </section> 
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
  .cards {
    display:flex;
    gap: 2rem;
  }
</style>
