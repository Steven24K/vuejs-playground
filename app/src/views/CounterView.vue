<script setup lang="ts">
import Counter from '../components/Counter.vue';
</script>

<template>
  <div class="counter">
    <h1>This is the counter page</h1>

    <Counter/>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .counter {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
