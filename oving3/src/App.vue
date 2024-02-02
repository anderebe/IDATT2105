<template>
  <nav-header />
  <div class = 'content'>
    <h1>Velkommen til min side!</h1>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'

export default {
  name: 'App',
  components: {
    NavHeader,
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
    grid-row: auto;
  }

  body {
    background-image: url("@/assets/images/landscapecss2.jpg");
    background-color: #ffff;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  content{
  }

  
</style>
