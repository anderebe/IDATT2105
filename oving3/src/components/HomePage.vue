<template>
  <div class="hero">
    <nav>
      <img src="../assets/images/highfiveslogo.png" class="logo" @click="newPage1">
      <ul>
        <li><a href='#' @click="goHome">HOME</a></li>
        <li><a href='#' @click="goSettings">SETTINGS</a></li>
        <li><a href='#' @click="toCalculator">CALCULATOR</a></li>
        <li><a class='gif-button' @click="changeGif">GIF</a></li>
        <li><a href='#' @click="goClose">LOGOUT</a></li>
      </ul>
    </nav>
    <div class="content">
      <h1>High Fives</h1>
      <a @click="revealCow">Share Gif</a>
      <div class="gif">
        <img src="../assets/gifs/polish-cow-cow.gif">
        <audio loop src="../assets/audio/polish-cow-cow.mp3"></audio>
      </div>
    </div>
    <footer class="footer">High Fives &copy; 2024</footer>
  </div>
</template>

<script>
export default {
  methods: {
    revealCow() {
      var gifVideo = document.querySelector('.gif img');
      var gifAudio = document.querySelector('.gif audio');

      if (gifAudio.paused) {
        gifVideo.style.opacity = '1';
        gifAudio.play();
      } else if (gifAudio.played) {
        gifVideo.style.opacity = '0';
        gifAudio.pause();
      }
    },

    changeGif() {
      var gifVideo = document.querySelector('.gif img');
      var gifAudio = document.querySelector('.gif audio');

      gifVideo.style.opacity = '0';
      gifAudio.pause();

      if (gifVideo.src.includes('ahmed-musin.gif')) {
        setTimeout(function() {
          gifVideo.src = '../assets/gifs/polish-cow-cow.gif';
          gifAudio.src = '../assets/audio/polish-cow-cow.mp3';
        }, 200); // Add a delay of 200 milliseconds
      } else {
        setTimeout(function() {
          gifVideo.src = '../assets/gifs/ahmed-musin.gif';
          gifAudio.src = '../assets/audio/ahmed-musin.mp3';
        }, 200); // Add a delay of 200 milliseconds
      }
    },

    newPage1() {
      window.location.href = "https://www.youtube.com/watch?v=2ZIpFytCSVc";
    },

    goHome() {
      window.location.href = "index.html";
    },

    goClose() {
      window.close();
    },

    goSettings() {
      // Implement the logic for navigating to the settings page
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: system-ui;
  }

  .hero{
      width: 100%;
      height: 300vh;
      

      background-color: #074f57;
      background-image: url("../assets/images/landscapecss2.jpg");

      background-size: cover;
      background-repeat: repeat;

      position: relative;
      display: flex;

      padding: 0 5%;

      justify-content: center;

  }

  nav{
      width: 95%;
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

  .content{
      margin-top: 200px;
      text-align: center;
      align-items: center;
      display: flex;
      flex-direction: column;
  }

  .content h1{
      font-size: 80px;
      color: white;
      font-weight: 700;
      cursor: default;
      transition: color 0.5s ease-in-out, -webkit-text-stroke 0.5s ease-in-out;
  }

  .content h1:hover{
      -webkit-text-stroke: 2px white;
      color: transparent;
  }


  .content a {
      text-decoration: none;
      display: inline-block;
      color: white;
      font-size: 24;
      border: 2px solid white;
      padding: 14px 70px;
      border-radius: 50px;
      margin-top: 20px;
      cursor: pointer;
      transition: background-color 0.5s ease-in-out;
  }

  .content a:hover {
      background-color: white;
      color: black;
  }


  .gif {
      height: 50%;
      margin-top: 40px;
  }
  .gif img {
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
  }

  .footer {
      color: white;
      padding: 20px;
      text-align: center;
      position: absolute;
      bottom: 0;
  }


</style>
