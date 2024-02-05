<template>
    <nav>
        <img src="../assets/images/highfiveslogo.png" class="logo" @click="newPage1">
        <ul>
            <li><a href='#' @click="goHome">HOME</a></li>
            <li><a href='#' @click="toCalculator">CALCULATOR</a></li>
            <li><a href='#' @click="goFeedback">FEEDBACK</a></li>
            <li><a href='#' @click="goClose">LOGOUT</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavHeader',
    methods: {
        toCalculator() {
            this.$emit('toCalculator');
        },
        goFeedback() {
            this.$emit('goFeedback');
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  nav{
      width: 98%;
      height: 10vh;
      position: absolute;
      top: 0;
      padding-top: 20px, 8%;
      display: flex;
      align-items: center;
      justify-content: space-between;
  }

  nav .logo{
      width: 80px;
      margin-top: 5px;
      margin-left: 10px;
      cursor: pointer;
  }

  nav .logo:active {
      transform: translateY(1px);
  }

  nav ul li{
      list-style: none;
      display: inline-block;
      margin-left: 20px;
  }

  nav ul li a{
      text-decoration: none;
      color: white;
      font-size: 17px;
      position: relative;
      cursor: pointer;
  }

  .gif-button{
      color: white;
  }

  nav ul li a::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: white;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
  }

  nav ul li a:hover::after {
      transform: scaleX(1);
  }
</style>
