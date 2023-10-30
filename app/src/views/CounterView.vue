<script setup lang="ts">
import Counter from '../components/Counter.vue';
</script>

<template>
  <div class="counter">
    <h1>This is the counter page</h1>

    <Counter title="This component is just a simple playground"/>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .counter {
    border-bottom: 1px solid gray;
  }
}
</style>
