/********************************************************/
/* File: login.js                                       */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Fichero js de implementación del acceso              */
/********************************************************/
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
          placeholder="email usuario"
          v-model="userEmail"
          required
        />
        <div class="invalid-feedback">{{ insertUsr }}</div>
        <input
          type="password"
          id="password"
          class="fadeIn third"
          name="login"
          placeholder="password"
          v-model="password"
          required
        />
        <div class="invalid-feedback">{{ insertPsw }}</div>
        <input type="button" id="btnLogin" class="btn btn-primary" value="Log In" @click="login();" />
      </form>
      <!-- Remind Passowrd -->
      <div id="formFooter">
        <a class="underlineHover" href="#">{{ remind }}</a>
      </div>
    </div>
  </div>
</template>
<script>
import users from "../data/users.json";

const $ = require("jquery");
const _ = require("lodash");

export default {
  name: "Login",

  data() {
    return {
      noUser: "Usuario no encontrado",
      insertUsr: "Por favor introduzca su nombre de usuario.",
      insertPsw: "Por favor introduzca su contraseña.",
      remind: "Recordar contraseña",
      userEmail: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      var userEmail = this.userEmail;
      var psw = this.password;

      var user = _.find(users, function(user) {
        return user.userName === userEmail || {};
      });

      if (user.psw != psw || user == null) {
        if ($("#invalidUser").hasClass("d-none"))
          $("#invalidUser").toggleClass("d-block d-none");
      } else if (user.psw == psw) {
        if ($("#invalidUser").hasClass("d-block"))
          $("#invalidUser").toggleClass("d-block d-none");
        sessionStorage.setItem('sessionUser', JSON.stringify(user));
        this.$router.push("/main");
      }
    }
  }
};
//localStorage.setItem("users", JSON.stringify(users));
</script>
<style>
</style>


