/********************************************************/
/* File: Addpet.vue                                     */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent para el alta de la mascota              */
/********************************************************/
<template>
    <div class="container">
      <form name="mainFrm" action="POST" @submit.prevent="onSubmit" novalidate>
      <h1 class="mt-5">Alta de mascotas</h1>
      <!-- Page Heading/Breadcrumbs -->
      <div class="row">
        <div class="col-lg-2 col-sm-2 col-xs-2">
          <div class="h-100">
            <img
              class="card-img-top"
              src="../../public/img/collar.svg"
              alt
               style="width:75%;"
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
      <input type="submit" value="Alta mascota" />
      </form>
    </div>
    
</template>
<script>

import vetidentificador from "@/components/Vet_identificador.vue";
import Mascota from "@/components/Mascota.vue";
import Propietario from "@/components/Propietario.vue";
import { setIPFSdata } from '../../public/js/services/setIPFSFile.js'


export default {
  name: "Addpet",
  components: {
    vetidentificador,
    Mascota,
    Propietario
  },
  mounted() {
    this.$parent.mainView = true;
  },
  methods: {
    onSubmit(){
      const data = {vetidentificador:{},mascota:{},propietario:{}};
      data['vetidentificador'].vetName = this.$children[0].$data.vetName;
      data['vetidentificador'].vetId = this.$children[0].$data.vetId;
      data['vetidentificador'].vetSurname = this.$children[0].$data.vetSurname;
      data['vetidentificador'].vetCol = this.$children[0].$data.vetCol;
      //data['mascota'] = this.$children[1].$data;
      //data['propietario'] = this.$children[2].$data
      
      setIPFSdata(JSON.stringify(data));
    }
  },
  props: {
    headerVisible: false
  }
};
</script>
