/********************************************************/
/* File: Addpet.vue                                     */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent para la modificacion de la mascota      */
/********************************************************/
<template>
  <div class="container pb-5">
    <form name="mainFrm" action="POST" v-on:submit.prevent="onSubmit" novalidate>
      <h1 class="mt-5">Modificar mascota</h1>
      <!-- Page Heading/Breadcrumbs -->
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
          <div class="h-75 w-75 p-3">
            <img class="card-img-top" src="../../public/img/pet.svg" alt="Modificar mascota" style="width:40%;" />
          </div>
        </div>
      </div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/main">Inicio</a>
        </li>
        <li class="breadcrumb-item active">Modificaci&oacute;n de mascotas</li>
      </ol>
      <vetidentificador />
      <Mascota :update="true" />
      <Propietario />
      <div class="text-right">
        <button type="submit" class="btn btn-primary">Modificar datos</button>
      </div>
    </form>
    <SelectPet v-if="myModal" @close="myModal=false" @getHash="getPetHash();"/>
  </div>
</template>
<script>
import vetidentificador from "@/components/Vet_identificador.vue";
import Mascota from "@/components/Mascota.vue";
import Propietario from "@/components/Propietario.vue";
import SelectPet from "@/components/SelectpetModal.vue"
import { setJSONToData, setDataToJSON } from "../../public/js/services/setDataToJSON.js";
import { setIPFSdata, getIPFSdata } from "../../public/js/services/setIPFSFile.js";
import { getDataFromContract } from "../../public/js/services/setDataToSmartcontrat.js"

var data = {};

export default {
  name: "Updatepet",
  components: {
    vetidentificador,
    Mascota,
    Propietario,
    SelectPet
  },
  data(){
    return {
      myModal: true
    }
  },
  methods: {
    onSubmit: function() {
      setDataToJSON(data, this, 2)
    },
    getPetHash: function(){
      var petId = document.getElementById('petHashID').value;

      getIPFSdata (getDataFromContract(petId)[1])
      .then((response)=> {
        setJSONToData(JSON.parse(response), this);
        data = JSON.parse(response);
      })
      .catch((error) => {
        console.log(error);
      });

      this.myModal = false;
    },
    search: function(){
      this.myModal = true;
    }
  },
  mounted: function() {
   /* getIPFSdata ('QmcK1hAc9sYTHJZcr68HxdHLCPMFgSn9QMSSar7j85TFg5')
      .then((response)=> {
        setJSONToData(JSON.parse(response), this);
        data = JSON.parse(response);
      })
      .catch((error) => {
        console.log(error);
      });*/
  }
};
</script>
