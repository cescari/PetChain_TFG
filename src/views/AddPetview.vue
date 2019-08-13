<template>
  <div>
    <Menu />
    <Addpet />
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Addpet from "@/components/Addpet.vue";

export default {
  components: {
    Menu,
    Addpet
  },
  props: {
    headerVisible: false
  }
};
</script>