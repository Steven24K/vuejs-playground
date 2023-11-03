<script>
import { ref } from 'vue'

export default {
  props:[],
  data() {
    return {
       name: '', 
       email: '', 
       msg: '', 
    }
  },

  methods: {
    submitForm(event) {
        alert(`
        You submited the form!!!
        Name: ${this.name}
        Email: ${this.email}
        Msg: ${this.msg}
        `)
    }, 
    setValue(event, key) {
        this[key] = event.target.value
    }
  }

}
</script>

<template>
  <div class="playground">
    <h2>Contact</h2>
    <form v-on:submit.prevent="submitForm">
        Name: <input v-on:input="setValue($event, 'name')"/>
        Email: <input v-on:input="setValue($event, 'email')"/>
        Message: <textarea v-on:input="setValue($event, 'msg')" cols="50" rows="10"></textarea>
        <button>Submit</button>
    </form>
  </div>
</template>

<style>
.playground {
  margin: 3px;
  padding: 3px;
  border: 1px solid rgb(65, 62, 62);
}

button {
    background-color: rgb(92, 158, 92);
    border: none; 
    width: 30%;
    height: 30px;
    margin: 15px;
}

.playground input, textarea {
    display: block;
}
</style>