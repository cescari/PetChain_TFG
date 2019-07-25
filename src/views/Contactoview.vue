<template>
    <div>
    <Menu />
    <Contacto /> 
    <Footer />
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
import Contacto from "@/components/Contacto.vue"
name: 'Contactoview';

export default {
    components: {
        Menu, Footer, Contacto
    }

}
</script>
