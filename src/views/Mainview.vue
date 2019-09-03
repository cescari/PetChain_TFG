/********************************************************/
/* File: Mainview.vue                                   */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent para la vista principal de Petchain     */
/********************************************************/
<template>
<div>
    <Menu />
    <Header />
    <Mainpage class="container"/>
</div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";
import Mainpage from "@/components/Mainpage.vue";
 
export default {
  name: "Main",
  data() {
    return {
      mainView: true
    }
  },
  components: {
    Mainpage, Header, Menu
  }
};
</script>

<style>
</style>
