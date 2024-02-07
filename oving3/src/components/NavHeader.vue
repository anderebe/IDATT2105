<template>
  <nav>
    <img
      src="../assets/images/highfiveslogo.png"
      class="logo"
      @click="newPage1"
    />
    <ul>
      <li><router-link to="/" class="nav-link">HOME</router-link></li>
      <li>
        <router-link to="/calculator" class="nav-link">CALCULATOR</router-link>
      </li>
      <li>
        <router-link to="/feedback" class="nav-link">FEEDBACKS</router-link>
      </li>
      <li><router-link to="/logout" class="nav-link">LOGOUT</router-link></li>
    </ul>
  </nav>
</template>

<script></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  width: 96%;
  height: 10vh;
  position: absolute;
  top: 0;
  padding-top: 20px, 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav .logo {
  width: 60px;
  margin-left: 3%;
  cursor: pointer;
}

nav .logo:active {
  transform: translateY(1px);
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 17px;
  position: relative;
  cursor: pointer;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: white;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.gif-button {
  color: white;
}

nav ul li {
  list-style: none;
  display: inline-block;
  margin-left: 20px;
}
</style>
