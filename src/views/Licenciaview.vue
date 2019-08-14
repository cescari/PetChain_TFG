/**************************************************************/
/* File: Licenciaview.vue                                     */
/* Author: Carlos Escario Bajo                                */
/* Proyecto: TFG UNIR                                         */
/* Date: 01/05/2019                                           */
/* Version: 1.0                                               */
/* Webcomponent para la visualizacion del tipo de licencia    */
/**************************************************************/
<template>
  <div>
    <Menu />
    <Licencia />
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Licencia from "@/components/Licencia.vue";

name: "Licenciaview";

export default {
  components: {
    Menu,
    Licencia
  }
};
</script>
