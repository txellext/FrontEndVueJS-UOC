<script setup>

const props = defineProps(['photoId']);


</script>

<template>
  <div class="new">
    <h1>This is our Photo View page</h1>
    <p>Id: {{props.photoId}}</p>

  </div>
</template>

<style>
  .new {
    display: grid;

  }
</style>
