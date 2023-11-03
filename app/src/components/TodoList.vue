<script>
import { ref } from 'vue'

export default {
  setup(props) {
    const items = ref([{ message: 'Sample 1' }, { message: 'Sample 2' }])
    const message = ref('')

    function addTodoItem() {
      if (message.value != '') {
        items.value.push({ message: message.value })
        message.value = ''
      }
    }

    return {
      items,
      message,
      addTodoItem,
    }
  }
}
</script>

<template>
  <div class="playground">
    <h1>TODO list:</h1>

    <p>Add new item: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />

    <button v-if="message != ''" @click="addTodoItem">Add todo item</button>

    <ul>
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>

  </div>
</template>

<style>
.playground {
  margin: 3px;
  padding: 3px;
  border: 1px solid rgb(54, 165, 39)
}
</style>