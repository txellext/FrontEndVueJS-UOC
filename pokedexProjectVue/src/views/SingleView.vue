<script setup>

const props = defineProps(['turtleId']);


</script>

<template>
  <div class="new">
    <h1>This is our Single View page</h1>
    <p>Id: {{props.turtleId}}</p>

  </div>
</template>

<style>
  .new {
    display: grid;

  }
</style>
