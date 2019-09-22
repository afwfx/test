<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/about">About</router-link> |
    <router-view></router-view>
    <img src="./assets/logo.png">
    <div>
      <el-button @click="getInfo">el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    getInfo: function () {
      this.$axios.get('mock')
              .then(function (response) {
                console.log(response.data.data.projects);
              })
              .catch(function (error) {
                console.log(error);
              });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
