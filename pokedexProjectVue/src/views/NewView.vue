<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import { ref } from 'vue';

const visible = ref(false);

</script>

<template>
  <div class="new">
    <h1>New View</h1>
    <h2>This is our new page</h2>
    <HelloWorld msg="You did it again!!!" />
    <button @click="visible = !visible">Toggle</button>
    <p v-if="visible">Only visible when variable is true</p>
    <p v-else>Only visible when variable is false</p>
  </div>
</template>

<style>
  .new {
    display: grid;

  }
  
@media (min-width: 1024px) {
  .new {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
