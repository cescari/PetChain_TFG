/********************************************************/
/* File: Deletepetview.vue                              */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/09/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent para la eliminacion de la mascota      */
/********************************************************/
<template>
  <div>
    <Menu />
    <Deletepet :update="true"/>
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Deletepet from "@/components/Deletepet.vue";

export default {
  components: {
    Menu,
    Deletepet
  },
  props: {
    headerVisible: false
  }
};
</script>