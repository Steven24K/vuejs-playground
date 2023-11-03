<script>
import { ref } from 'vue'

export default {
  props: [],
  data() {
    return {
      name: '',
      email: '',
      msg: '',
      errors: new Map()
    }
  },

  watch: {
    email() {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      // Test the email against the regular expression
      const isEmail = emailRegex.test(this.email);
      if (isEmail || this.email === '') {
        this.errors.delete('email')
      } else {
        this.errors.set('email', 'Please provide a valid emailadress')
      }
    },

    name() {
      if (this.name.length > 25) {
        this.errors.set('name', 'Name is to long')
      } else if (this.name.length == 0) {
        this.errors.set('name', 'Name is required')
      } else {
        this.errors.delete('name')
      }
    }, 

    msg() {
      if (this.msg.length > 0 && this.msg.length <= 250) {
        this.errors.delete('msg')
      } else {
        this.errors.set('msg', 'Message must be longer than 0 and smaller 250 characters')
      }
    }
  },

  // Use computed properties to output data
  computed: {
    form() {
      return `
        Name: ${this.name}<br>
        Email: ${this.email}<br>
        Msg: ${this.msg}<br>
      `
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
    },
    formValid(){
      return this.errors.size == 0 && this.name !== '' && this.email != '' && this.msg != ''
    }
  }

}
</script>

<template>
  <div class="playground">
    <h2>Contact</h2>
    <h4>There are {{ errors.size }} errors</h4>
    <ul>
      <li v-for="error in Array.from(errors.values())">{{ error }}</li>
    </ul>
    <form v-on:submit.prevent="submitForm">
      Name: <input v-on:input="setValue($event, 'name')" v-bind:value="name" />
      Email: <input v-on:input="setValue($event, 'email')" v-bind:value="email" />
      Message: <textarea v-on:input="setValue($event, 'msg')" v-bind:value="msg" cols="50" rows="10"></textarea>
      <button :disabled="!formValid()">Submit</button>
    </form>

    Output:
    <p v-html="form"></p>
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

.playground input,
textarea {
  display: block;
}
</style>