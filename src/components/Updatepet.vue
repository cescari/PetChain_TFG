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
    <form name="mainFrm" action="POST" @submit.prevent="onSubmit">
      <h1 class="mt-5">{{ pageTitle }}</h1>
      <!-- Page Heading/Breadcrumbs -->
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
          <div class="h-75 w-75 p-3">
            <img class="card-img-top" src="../../public/img/pet.svg" alt="pageTitle" style="width:40%;" />
          </div>
        </div>
      </div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/main">Inicio</a>
        </li>
        <li class="breadcrumb-item active">{{ pageTitle }}</li>
      </ol>
      <vetidentificador />
      <Mascota :update="true" :consulta="consultaPet"/>
      <Propietario :consulta="consultaPet"/>
      <div class="text-right">
        <button type="submit" class="btn btn-primary" @submit="confirmModal = true;">Modificar datos</button>
      </div>
    </form>
    <!-- <button class="btn btn-primary" @click="transfer()">Transfer</button> -->
    <SelectPet v-if="myModal" @close="myModal=false" @getHash="getPetHash($event);"/>
    <Confirm v-if="confirmModal" :msgTitle="msgTitle" :msgBody="msgBody" :msgBtnConfirm="msgBtnConfirm" :error="false" @close="confirmModal=false" @setConfirm="updatePet($event);" />
  </div>
</template>
<script>
import vetidentificador from "@/components/Vet_identificador.vue";
import Mascota from "@/components/Mascota.vue";
import Propietario from "@/components/Propietario.vue";
import SelectPet from "@/components/SelectpetModal.vue";
import Confirm from "@/components/ConfirmModal.vue";
import { setJSONToData, setDataToJSON } from "../../public/js/services/setDataToJSON.js";
import { setIPFSdata, getIPFSdata } from "../../public/js/services/setIPFSFile.js";
import { getDataFromContract, setDataInContract, registerTX } from "../../public/js/services/setDataToSmartcontrat.js"

var data = {};

export default {
  name: "Updatepet",
  components: {
    vetidentificador,
    Mascota,
    Propietario,
    SelectPet,
    Confirm
  },
  data(){
    return {
      myModal: false,
      confirmModal: false,
      msgTitle: 'Confirmar modificación',
      msgBody: 'ATENCION: Los datos de esta mascota van a ser modificados.¿Está Ud. seguro? Esta acción no podrá deshacerse.',
      msgBtnConfirm: 'Modificar'
    }
  },
  methods: {
    onSubmit: function() {
      if(!this.$props.consultaPet)this.confirmModal = true;
    },
    getPetHash: function(_petId){
      getIPFSdata (getDataFromContract(_petId)[1])
      .then((response)=> {
        setJSONToData(JSON.parse(response), this);
        data = JSON.parse(response);
      })
      .catch((error) => {
        this.confirmModal = true;
        this.msgTitle = 'Error en la búsqueda';
        this.msgBody = 'El identificador introducido no corresponde con ninguna mascota.';
      });

      this.myModal = false;
    },
    search: function(){
      this.myModal = true;
    },
    updatePet: function () {
      this.confirmModal = false;
      setDataToJSON(data, this, 2);
        const PET_ID = this.$children[1].petIdNumber;
        setIPFSdata(JSON.stringify(data))
          .then(response => {
            console.log(response);
            setDataInContract(response, PET_ID);
          })
          .catch(error => {
            console.log(error);
          });
    },
    transfer: function(){
      registerTX();
    }
  },
  props: ["consultaPet","pageTitle"]
};
</script>
