<template>
<div>
    <Menu />
    <Header />
    <Mainpage class="container"/>
</div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";
import Mainpage from "@/components/Mainpage.vue";
 
export default {
  name: "Main",
  data() {
    return {
      mainView: true
    }
  },
  components: {
    Mainpage, Header, Menu
  }
};
</script>

<style>
</style>
