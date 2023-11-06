<script>
import { ref } from 'vue'

export default {
  setup(props) {
    const items = ref([{ message: 'Sample 1', done: false }, { message: 'Sample 2', done: true }])
    const message = ref('')

    function addTodoItem() {
      if (message.value != '') {
        items.value.push({ message: message.value })
        message.value = ''
      }
    }

    function removeTodo(todo) {
      items.value = items.value.filter(v => v.message !== todo)
    }

    function toggleAll() {
      items.value = items.value.map(v => ({ ...v, done: true }))
    }

    function unToggleAll() {
      items.value = items.value.map(v => ({ ...v, done: false }))
    }

    return {
      items,
      message,
      addTodoItem,
      removeTodo,
      toggleAll,
      unToggleAll,
    }
  }
}
</script>

<template>
  <div class="playground">
    <h1>TODO list:</h1>

    <p>Add new item: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />

    <button v-if="message != ''" v-on:click="addTodoItem">Add todo item</button>

    <ul>
      <li v-for="item in items" :key="item.message">
        <span :style="{color: item.done ? 'green' : 'red'}">
          {{ item.message }}
        </span>
        <input type="checkbox" v-model="item.done">
        <button v-on:click="removeTodo(item.message)">X</button>
      </li>
    </ul>

    <button v-if="items.reduce((xs, x) => xs || !x.done, false)" v-on:click="toggleAll">Check all</button>
    <button v-if="items.reduce((xs, x) => xs || x.done, false)" v-on:click="unToggleAll">Uncheck all</button>

  </div>
</template>

<style>
.playground {
  margin: 3px;
  padding: 3px;
  border: 1px solid rgb(54, 165, 39)
}
</style>