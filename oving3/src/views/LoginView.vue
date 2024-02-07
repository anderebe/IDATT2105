<template>
  <div id="loginContainer">
    <div id="loginTitle">
      <label>Please login!</label>
    </div>
    <div id="username">
      <label id="usernameLabel username">Username:</label>
      <textarea v-model="username"></textarea>
    </div>
    <div id="password">
      <label id="passwordLabel">Password: </label>
      <textarea v-model="password" id="password"></textarea>
      <button v-on:click="handleLoginClick" id="signinbutton">Sign in</button>
      <label id="loginstatusLabel">{{ loginStatus }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
export default {
  name: "LoginView",
  methods: {
    handleLoginClick() {
      router.push("/home");
    },
  },
  data() {
    return {
      username: "",
      password: "",
      loginStatus: "",
    };
  },
};
</script>

<style scoped>
#loginContainer {
  display: grid;
  justify-content: center;
  margin: 40px;
}

#loginTitle {
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 20px;
}

#username,
#password {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
}

#usernameLabel,
#passwordLabel {
  width: 100px;
}
</style>
