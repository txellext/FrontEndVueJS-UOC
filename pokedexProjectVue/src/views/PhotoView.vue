<script setup>
import myAPI from '../services/services.js';
import { ref, onMounted } from 'vue';

const props = defineProps(['photoId']);

const information = ref({})

onMounted(() => {
  myAPI.getSinglePhoto(props.photoId).then( (response) => {
    console.log(response.data);
    information.value = response.data;
  });
})

</script>

<template>
  <div class="new">
    <h1>This is our Photo View page</h1>
    <h2>{{ information.title }}</h2>
    // <p>Id: {{props.photoId}}</p>
    <p>Id: {{information.id}}</p>
    <img :src="information.url" alt=""/>
  </div>
</template>



<style>
  .new {
    display: grid;

  }
</style>
