<template>
  <div>
    <Menu />
    <Header />
    <Mainpage class="container"/> 
    <footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Mainpage from "@/components/Mainpage.vue"

export default {
  name: "Main",
  components: {
    Menu,
    Header,
    Footer,
    Mainpage
  }
};
</script>

<style>
</style>
