/********************************************************/
/* File: UpdatePetview.vue                              */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent para la visualización del la ventana de */
/* modificación de Petchain                             */
/********************************************************/
<template>
  <div>
    <Menu />
    <Updatepet :pageTitle="pageTitle"/>
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Updatepet from "@/components/Updatepet.vue";

export default {
  data(){
        return {
            pageTitle: 'Modificar mascota'
        }
    },
  components: {
    Menu,
    Updatepet
  },
  props: {
    headerVisible: false
  }
};
</script>