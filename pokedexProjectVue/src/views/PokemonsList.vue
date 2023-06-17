<script setup>

import PokemonCard from '../components/PokemonCard.vue';
import { ref, onMounted, computed } from 'vue';
import myAPI from '../services/services.js';

const cards = ref([])
const search = ref('')

onMounted(() => {
  myAPI.getPokemons().then( (response) => {
    console.log(response.data);
    cards.value = response.data;
  });
})

const filteredCards = computed(() => {
  return cards.value.filter((card) => {
    //return photo.title.toLowerCase().includes(search.value.toLowerCase())
    return card.title.toLowerCase().startsWith(search.value.toLowerCase())
  })
});

</script>

<template>
  <div class="new">
    <h1>Pokédex</h1>
    <input v-model="search" type="text" placeholder="type to search...">
    <br>
      <section class="cards">
        <PokemonCard v-for="card in filteredCards" :key="card.id" :info="card" />          
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
    max-width: 50vw;
    flex-wrap: wrap;
  }
</style>
