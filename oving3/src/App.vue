<template>
  <NavHeader @toCalculator="handleToCalculator"></NavHeader>

  <component :is="currentComponent" />

  <footer>
    <p>© 2024</p>
  </footer>

</template>

<script>
import NavHeader from './components/NavHeader.vue'
import GifContent from './components/GifContent.vue'
import CalculatorContent from './components/CalculatorContent.vue'

export default {
  name: 'App',
  components: {
    NavHeader,
    GifContent,
    CalculatorContent,
  },
  data() {
    return {
      currentComponent: 'GifContent',
    }
  },
  methods: {
    handleToCalculator() {
      if(this.currentComponent === 'GifContent'){
        this.currentComponent = 'CalculatorContent';
      } else {
        this.currentComponent = 'GifContent';
      }
    },
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

    position: relative;
    display: flex;
    flex-direction: column;
    
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
</style>
