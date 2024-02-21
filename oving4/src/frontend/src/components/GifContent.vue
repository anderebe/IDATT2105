<template>
  <div class="content">
    <h1 @click="changeGif">High Fives</h1>
    <a @click="revealCow">Share Gif</a>
    <div class="gif">
      <img :src="gifVideo" />
      <audio :src="gifAudio" loop />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "GifContent",
  setup() {
    const gifVideo = ref(require("../assets/gifs/polish-cow-cow.gif"));
    const gifAudio = ref(require("../assets/audio/polish-cow-cow.mp3"));

    const revealCow = () => {
      var audioElement = document.querySelector(".gif audio");
      var videoElement = document.querySelector(".gif img");

      if (audioElement.paused) {
        videoElement.style.opacity = "1";
        audioElement.play();
      } else {
        videoElement.style.opacity = "0";
        audioElement.pause();
      }
    };

    const changeGif = () => {
      var audioElement = document.querySelector(".gif audio");
      var videoElement = document.querySelector(".gif img");

      videoElement.style.opacity = "0";
      audioElement.pause();

      console.log(videoElement.src);

      if (gifVideo.value == require("../assets/gifs/ahmed-musin.gif")) {
        setTimeout(function () {
          gifVideo.value = require("../assets/gifs/polish-cow-cow.gif");
          gifAudio.value = require("../assets/audio/polish-cow-cow.mp3");
        }, 200); // Add a delay of 200 milliseconds
      } else {
        setTimeout(function () {
          gifVideo.value = require("../assets/gifs/ahmed-musin.gif");
          gifAudio.value = require("../assets/audio/ahmed-musin.mp3");
        }, 200); // Add a delay of 200 milliseconds
      }
    };

    return {
      revealCow,
      changeGif,
      gifVideo,
      gifAudio,
    };
  },
};
</script>

<style scoped>
.content {
  margin-top: 100px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.content h1 {
  font-size: 80px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.5s ease-in-out, -webkit-text-stroke 0.5s ease-in-out;
}

.content h1:hover {
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
</style>
