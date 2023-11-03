<script>
import { ref } from 'vue'

export default {
  props:['title'],
  setup(props) {
    const howMuch = ref(1)
    const count = ref(0)

    function increment(amount) {
      count.value+=amount
    }

    function decrement(amount) {
      count.value-=amount
    }

    return {
      count,
      increment,
      decrement,
      howMuch,
      props,
    }
  }
}
</script>

<template>
  <div class="playground">
    <h2>{{ props.title }}</h2>
    How much: <input type="number" v-model="howMuch"  /> 
    <h2>{{ count }}</h2>
    <button v-on:click="increment(howMuch)">+</button>
    <button v-on:click="decrement(howMuch)">-</button>
  </div>
</template>

<style>
.playground {
  margin: 3px;
  padding: 3px;
  border: 1px solid rgb(65, 62, 62);
}
</style>