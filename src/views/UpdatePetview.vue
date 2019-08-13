<template>
  <div>
    <Menu />
    <Updatepet />
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Updatepet from "@/components/Updatepet.vue";

export default {
  components: {
    Menu,
    Updatepet
  },
  props: {
    headerVisible: false
  }
};
</script>