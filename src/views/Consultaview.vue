/********************************************************/
/* File: Consultaview.vue                               */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent para la consulta de los datos de        */
/* una mascota                                          */
/********************************************************/
<template>
  <div>
    <Menu />
    <Updatepet :consultaPet="true" :pageTitle="pageTitle"/>
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Updatepet from "@/components/Updatepet.vue";

export default {
    data(){
        return {
            pageTitle: 'Consulta de mascotas'
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