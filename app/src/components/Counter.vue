<script>
import { ref } from 'vue'

export default {
  props:['title'],
  setup(props) {
    const count = ref(0)

    function increment() {
      count.value++
    }

    return {
      count,
      increment,
      props,
    }
  }
}
</script>

<template>
  <div class="playground">
    <h2>{{ props.title }}</h2>
    <button v-on:click="increment">
      {{ count }}
    </button>
  </div>
</template>

<style>
.playground {
  margin: 3px;
  padding: 3px;
  border: 1px solid rgb(65, 62, 62);
}
</style>