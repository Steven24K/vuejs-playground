<script setup lang="ts">
import Counter from '../components/Counter.vue';
import TodoList from '../components/TodoList.vue';
import FetchAnswer from '../components/FetchAnswer.vue';
</script>

<template>
  <div class="counter">
    <h1>This is the playground page</h1>

    <Counter title="This component is just a simple counter"/>

    <TodoList/>

    <FetchAnswer/>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .counter {
    border-bottom: 1px solid gray;
  }
}
</style>
