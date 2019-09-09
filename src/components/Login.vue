/********************************************************/
/* File: Login.vue                                      */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent de implementación del acceso            */
/********************************************************/
<template>
  <div>
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
          <input
            type="button"
            id="btnLogin"
            class="btn btn-primary"
            value="Log In"
            @click="login();"
          />
        </form>
        <!-- Remind Passowrd -->
        <div id="formFooter">
          <a class="underlineHover" href="#" @click="myModal=true">{{ remind }}</a>
        </div>
      </div>
    </div>
    <Modal
      v-if="myModal"
      :msgModal="modalMsg"
      :titleModal="titleModal"
      :typeMsg="typeMsg"
      @close="myModal=false"
      @send="sendEmail();"
    />
  </div>
</template>
<script>
import users from "../data/users.json";
import Modal from "./Modal.vue";

const $ = require("jquery");
const _ = require("lodash");

export default {
  name: "Login",
  components: {
    Modal
  },
  data() {
    return {
      noUser: "Usuario no encontrado",
      insertUsr: "Por favor introduzca su nombre de usuario.",
      insertPsw: "Por favor introduzca su contraseña.",
      remind: "Recuperar contraseña",
      userEmail: "",
      password: "",
      myModal: false,
      typeMsg: "email",
      titleModal: "Recuperar contraseña",
      modalMsg: "Introduzca un e-mail para recuperar la contraseña"
    };
  },
  methods: {
    login: function() {
      var userEmail = this.userEmail;
      var psw = this.password;

      var user = _.find(users, function(user) {
        return user.userName === userEmail;
      });

      if (user.psw != psw || user == null) {
        if ($("#invalidUser").hasClass("d-none"))
          $("#invalidUser").toggleClass("d-block d-none");
      } else if (user.psw == psw) {
        if ($("#invalidUser").hasClass("d-block"))
          $("#invalidUser").toggleClass("d-block d-none");
        sessionStorage.setItem("sessionUser", JSON.stringify(user));
        this.$router.push("/main");
      }
    },

    sendEmail: function() {
      emailjs.init("user_4E92VEYfZTJZEjjwfaXeY");
      var template_params = {
        reply_to: "reply_to_value",
        from_name: "from_name_value",
        to_name: "to_name_value",
        message_html: "message_html_value"
      };

      var service_id = "default_service";
      var template_id = "template_Jiy6Ohgx";
      emailjs.send(service_id, template_id, template_params);
      this.myModal = false;
    }
  }
};
</script>
<style>
</style>


