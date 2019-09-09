/********************************************************/
/* File: Transfersview.vue                              */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/08/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent view para la visualización de           */
/* tranferencias en ETH                                 */
/********************************************************/
<template>
  <div>
    <Menu />
    <Transfers :sessionUser="sessionUser"/>
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Transfers from "@/components/Transfers.vue";

export default {
  components: {
    Menu,
    Transfers
  },
  data(){
    return {
      sessionUser: JSON.parse(sessionStorage.getItem('sessionUser'))
    }
  }
};
</script>