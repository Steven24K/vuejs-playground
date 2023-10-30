<script>
import { ref, watch } from 'vue'

export default {
  props:['title'],
  setup(props) {
    const question = ref('')
    const answer = ref('Questions usually contain a question mark. ;-)')

    watch(question, async (newQuestion, oldQuestion) => {
      if (newQuestion.indexOf('?') > -1) {
        answer.value = 'Thinking...'
        try {
          const res = await fetch('https://yesno.wtf/api')
          answer.value = (await res.json()).answer
        } catch (error) {
          answer.value = 'Error! Could not reach the API. ' + error
        }
      }
    })

    const count = ref(0)
    const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
    const message = ref('')

    function increment() {
      // .value is needed in JavaScript
      count.value++
    }

    function addTodoItem() {
      if (message.value != '') {
        items.value.push({ message: message.value })
        message.value = ''
      }
    }

    // don't forget to expose the function as well.
    return {
      count,
      items,
      message,
      increment,
      addTodoItem,
      question,
      answer,
      props,
    }
  }
}
</script>

<template>
  <div class="playground">
    <h2>{{ props.title }}</h2>
    <button @click="increment">
      {{ count }}
    </button>

    <h1>TODO list:</h1>

    <p>Add new item: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />

    <button v-if="message != ''" @click="addTodoItem">Add todo item</button>

    <ul>
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>

    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>

<style>
.playground {
  margin: 3px;
  padding: 3px;
  border: 1px solid rgb(65, 62, 62);
}
</style>