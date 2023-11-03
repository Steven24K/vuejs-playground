<script>
import { ref, watch } from 'vue'

export default {
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

    return {
      question,
      answer,
    }
  }
}
</script>

<template>
  <div class="playground">
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <h3>{{ answer }}</h3>
  </div>
</template>

<style>
.playground {
  margin: 3px;
  padding: 3px;
  border: 1px solid rgb(212, 33, 33);
}
</style>