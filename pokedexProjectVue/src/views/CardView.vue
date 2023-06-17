<script setup>
import myAPI from '../services/services.js';
import { ref, onMounted } from 'vue';

const props = defineProps(['cardId']);

const information = ref({})

onMounted(() => {
  myAPI.getSinglePhoto(props.cardId).then( (response) => {
    console.log(response.data);
    information.value = response.data;
  });
});

</script>

<template>
  <div class="new">
    <h1>Pokemon Card View</h1>
    <h2>{{ information.title }}</h2>
    // <p>Id: {{props.cardId}}</p>
    <p>Id: {{information.id}}</p>
    <img :src="information.url" alt=""/>
  </div>
</template>



<style>
  .new {
    display: grid;

  }
</style>
