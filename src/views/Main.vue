<template>
  <Mainpage class="container"/>
</template>

<script>
// @ is an alias to /src
import Mainpage from "@/components/Mainpage.vue";
 
export default {
  name: "Main",
  data() {
    return {
      mainView: true
    };
  },
  components: {
    Mainpage
  },
  mounted() {
    this.$parent.mainView=true
  }
};
</script>

<style>
</style>
