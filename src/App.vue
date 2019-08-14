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
    <Header v-show="mainView"/>
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import accounts from "../public/js/services/getAccounts.js"

export default {
    data(){
        return{
            mainView: false
        }
    },
    components: {
        Header, Footer
    }
}
</script>


<style>
</style>
