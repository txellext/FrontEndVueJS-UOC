<script setup>
import myAPI from '../services/services.js';
import { ref, onMounted } from 'vue';

const props = defineProps(['cardId']);

const information = ref({})

onMounted(() => {
  myAPI.getSingleCard(props.cardId).then( (response) => {
    console.log(response.data);
    information.value = response.data;
  });
});

</script>

<template>
  <div class="new">
    <h1>Pokemon Card View</h1>
    <h2>{{ information.name }}</h2>
    <p>Id props: {{props.cardId}}</p>
    <p>Id api: {{information.id}}</p>
  </div>
</template>



<style>
  .new {
    display: grid;

  }
</style>
