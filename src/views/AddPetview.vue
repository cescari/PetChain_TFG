/********************************************************/
/* File: Addpetview.vue                                 */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent para la modificacion de la mascota      */
/********************************************************/
<template>
  <div>
    <Menu />
    <Addpet />
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Addpet from "@/components/Addpet.vue";

export default {
  components: {
    Menu,
    Addpet
  }
};
</script>