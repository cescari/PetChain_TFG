<template>
<div>
    <Header />
    <Mainpage class="container"/>
</div>
</template>

<script>
// @ is an alias to /src
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
    Mainpage, Header
  },
  props: {
    headerVisible: true
  }
};
</script>

<style>
</style>
