<script setup>

import { ref } from 'vue'
const props = defineProps(['infoTurtles']);
console.log(props.infoTurtles);
const count = ref(0);
const emit = defineEmits(['response'])

const increment = () => {
  count.value++;
  emit('response', props.infoTurtles.name);
}

</script>

<template>
  <div class="card" :class="props.infoTurtles.color">
    I'm a turtle!
    <h2>{{ props.infoTurtles.name }}</h2>
    <p>{{ props.infoTurtles.weapon }}</p>
    <button @click="$router.push({name: 'single', params: {turtleId: props.infoTurtles.id}})">View More</button>
    <button :class="{ max : count>=10}" @click="increment">Counter {{ count }}</button>
  </div>
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
    background-color: var(--bg-card);
    color: var(--text-card);
  }
  .card button {
    margin-top: auto;
  }
  .orange {
    box-shadow: 0 0 10px 5px orange;
  }
  .blue {
    box-shadow: 0 0 10px 5px blue;
  }
  .red {
    box-shadow: 0 0 10px 5px red;
  }
  .purple {
    box-shadow: 0 0 10px 5px purple;
  }
  .max {
    background-color: red;
  }
</style>
