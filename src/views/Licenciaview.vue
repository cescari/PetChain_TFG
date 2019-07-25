<template>
    <div>
    <Menu />
    <Licencia /> 
    <Footer />
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
import Licencia from "@/components/Licencia.vue";

name: 'Licenciaview';

export default {
    components: {
        Menu, Footer, Licencia
    }

}
</script>
