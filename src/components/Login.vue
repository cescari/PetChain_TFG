<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <!-- Tabs Titles -->
      <!-- Icon -->
      <div class="fadeIn first">
        <img src="../../public/img/logo.png" id="icon" alt="PetChain" />
      </div>
      <div id="invalidUser" class="d-none">
        <label style="color: red; font-weight: 600;">{{ noUser }}</label>
      </div>
      <!-- Login Form -->
      <form id="loginForm">
        <input
          type="text"
          id="login"
          class="fadeIn second"
          name="login"
          placeholder="login"
          required
        />
        <div class="invalid-feedback">{{ insertUsr }}</div>
        <input
          type="password"
          id="password"
          class="fadeIn third"
          name="login"
          placeholder="password"
          required
        />
        <div class="invalid-feedback">{{ insertPsw }}</div>
        <input type="button" id="btnLogin" class="btn btn-primary" value="Log In" @click="login();"/>
      </form>
      <!-- Remind Passowrd -->
      <div id="formFooter">
        <a class="underlineHover" href="#">{{ remind }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import users from '../data/users.json';

export default {
  name: 'Login',
  data() {
    return {
      noUser: "Usuario no encontrado",
      insertUsr: "Por favor introduzca su nombre de usuario.",
      insertPsw: "Por favor introduzca su contraseña.",
      remind: "Recordar contraseña"
    }
  },
  methods: {
    login(){
      this.$router.push('/main');
    }
  }
};
localStorage.setItem('users', JSON.stringify(users));
</script>
<style>
</style>


