<template>
    <div>
    <Menu />
    <Contacto /> 
    
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Contacto from "@/components/Contacto.vue"
name: 'Contactoview';

export default {
    components: {
        Menu, Contacto
    },
  props: {
    headerVisible: false
  }
}
</script>
