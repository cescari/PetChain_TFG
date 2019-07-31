<template>
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
      <button @click="setData()">Guardar</button>
    </div>
    
</template>
<script>

import vetidentificador from "@/components/Vet_identificador.vue";
import Mascota from "@/components/Mascota.vue";
import Propietario from "@/components/Propietario.vue";
import { setDataToJSON } from '../../public/js/services/setDataToJSON.js'


export default {
  name: "addpet",
  components: {
    vetidentificador,
    Mascota,
    Propietario
  },
  mounted() {
    this.$parent.mainView=true
  },
  methods: {
    setData: function(){
      const data = JSON.stringify({ variable: '12', variable2: '22' });
      setDataToJSON(data);
    }
  }
};
</script>
