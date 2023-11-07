<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <h2>My friends:</h2>
  <ul>
    <friend-contact v-for="friend in friends" :key="friend.id" :id="friend.id" :name="friend.name" :phone="friend.phone" :email="friend.email"></friend-contact>
  </ul>

  <HelloWorld msg="Welcome to Your Vue.js App!" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      friends: [
        {
          id: 'Manuel',
          name: 'Manuel Lorenz',
          phone: '01233456678',
          email: 'info@sample.com'
        },
        {
          id: 'Lucy', 
          name: 'Lucy blackstone', 
          phone: '3242343243', 
          email: 'infor@lucy.com'
        }
      ]
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
