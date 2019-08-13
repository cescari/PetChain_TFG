<template>
  <div>
    <Menu />
    <Deletepet />
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Deletepet from "@/components/Deletepet.vue";

export default {
  components: {
    Menu,
    Deletepet
  },
  props: {
    headerVisible: false
  }
};
</script>