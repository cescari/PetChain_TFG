/********************************************************/
/* File: Contactoview.vue                               */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent para la visualización del la ventana de */
/* contacto de Petchain                                 */
/********************************************************/
<template>
    <div>
    <Menu />
    <Contacto /> 
    
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Contacto from "@/components/Contacto.vue"
name: 'Contactoview';

export default {
    components: {
        Menu, Contacto
    },
  props: {
    headerVisible: false
  }
}
</script>
