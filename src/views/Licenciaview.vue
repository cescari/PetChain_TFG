<template>
<div>
    <Menu />
    <Licencia />
</div>
     
</template>
<script>
import Menu from "@/components/Menu.vue";
import Licencia from "@/components/Licencia.vue";

name: 'Licenciaview';

export default {
    components: {
        Menu, Licencia
    },
  mounted() {
    this.$parent.mainView=true
  }

}
</script>
