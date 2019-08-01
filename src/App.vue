<template>
  <div>
    <Header v-show="mainView"/>
    <router-view />
    <Footer id="myFooter" ref="myFooter"/>
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
    },
  mounted() {
    this.$parent.mainView=false
  }
}
</script>


<style>
</style>
