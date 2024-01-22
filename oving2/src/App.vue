<template>
  <div id="app">
    <Calculator2 />
  </div>
</template>

<script>
import Calculator2 from './components/Calculator2.vue'

export default {
  name: 'App',
  components: {
    Calculator2
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
