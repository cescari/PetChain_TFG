/********************************************************/
/* File: App.vue                                        */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent raiz                                    */
/********************************************************/
<template>
  <div>
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import accounts from "../public/js/services/getAccounts.js"

export default {
    data(){
        return{
            mainView: false
        }
    },
    components: {
        Footer
    }
}
</script>


<style>
</style>
