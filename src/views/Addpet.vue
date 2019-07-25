<template>
  <div>
    <Menu />
    <div class="container">
      <h1 class="mt-5">Alta de mascotas</h1>
      <!-- Page Heading/Breadcrumbs -->
      <div class="row">
        <div class="col-lg-2 col-sm-2 col-xs-2">
          <div class="h-100">
            <img
              class="card-img-top"
              src="../../public/img/collar.svg"
              alt
              width="75%"
              height="75%"
            />
          </div>
        </div>
      </div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/main">Inicio</a>
        </li>
        <li class="breadcrumb-item active">Alta de mascotas</li>
      </ol>
      <vetidentificador />
      <Mascota />
      <Propietario />
    </div>
    <Footer />
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
import vetidentificador from "@/components/Vet_identificador.vue";
import Mascota from "@/components/Mascota.vue";
import Propietario from "@/components/Propietario.vue";

export default {
  name: "addpet",
  components: {
    Menu,
    Footer,
    vetidentificador,
    Mascota,
    Propietario
  }
};
</script>
