<script setup>

//import { ref } from 'vue'
const props = defineProps(['info']);
//console.log(props.infoTurtles);


</script>

<template>
  <article class="card">
    I'm a photo!
    <h2>{{ props.info.title }}</h2>
    <img :src="props.info.thumbnailUrl" alt="">
    <button @click="$router.push({name: 'photo', params: {photoId: props.info.id}})">View More</button>
  </article>
</template>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    border: 2p solid #333;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 0 5px 5px #eee;
    width: fit-content;
    min-width: 200px;
    padding: 1rem;
    max-width: 250px;
  }
  .card button {
    margin-top: auto;
  }
</style>
