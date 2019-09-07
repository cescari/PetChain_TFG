/********************************************************/
/* File: Addpet.vue                                     */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent para el alta de la mascota              */
/********************************************************/
<template>
  <div class="container pb-5">
    <form name="mainFrm" id="addPetfrm" action="POST" @submit.prevent="confirm" novalidate>
      <!-- Page Heading/Breadcrumbs -->
      <div class="row">
      <h1 class="mt-5">Alta de mascotas</h1>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
          <div class="h-100">
            <img class="card-img-top" src="../../public/img/collar.svg" alt style="width:50%;" />
          </div>
        </div>
      </div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/main">Inicio</a>
        </li>
        <li class="breadcrumb-item active">Alta de mascotas</li>
      </ol>
      <vetidentificador :vetId_prop="sessionUser.col_id" :vetName_prop="sessionUser.name" :vetSurname_prop="sessionUser.surname" :vetCol_prop="sessionUser.colegio" :vetaccount_prop="sessionUser.account"/>
      <Mascota :update="false" />
      <Propietario />
      <div class="text-right">
        <button id="btnCancel" class="btn btn-primary mr-2" @click="$router.push('main')">Cancelar</button>
        <button id="btnSubmit" type="submit" class="btn btn-primary">Alta mascota</button>
      </div>
    </form>
     <Confirm v-if="confirmModal" :msgTitle="msgTitle" :msgBody="msgBody" :msgBtnConfirm="msgBtnConfirm" @close="confirmModal=false" @setConfirm="addPet()" />
     <Success v-if="successModal" @close="success();"/>
  </div>
</template>
<script>
import vetidentificador from "@/components/Vet_identificador.vue";
import Mascota from "@/components/Mascota.vue";
import Propietario from "@/components/Propietario.vue";
import Confirm from "@/components/ConfirmModal.vue";
import Success from "@/components/SuccessModal.vue";
import { setDataToJSON } from "../../public/js/services/setDataToJSON.js";
import { setIPFSdata } from "../../public/js/services/setIPFSFile.js";
import { setDataInContract } from "../../public/js/services/setDataToSmartcontrat.js";

export default {
  name: "Addpet",
  components: {
    vetidentificador,
    Mascota,
    Propietario,
    Confirm,
    Success
  },
  data(){
    return {
      sessionUser: JSON.parse(sessionStorage.getItem('sessionUser')),
      confirmModal: false,
      successModal: false,
      msgTitle: 'Alta de mascota',
      msgBody: 'ATENCION: Esta mascota será incluida en la base de datos principal.Pulse Aceptar para confirma el alta.',
      msgBtnConfirm: 'Aceptar'
    }
  },
  mounted() {
    this.$parent.mainView = true;
  },
  methods: {
    confirm(){
      this.confirmModal = true;
    },
    addPet() {
      this.confirmModal = false;
      const data = {
        vetidentificador: {},
        mascota: { ultima_rev: [] },
        propietario: {}
      };
      setDataToJSON(data, this, 1);
      const PET_ID = this.$children[1].petIdNumber;
      setIPFSdata(JSON.stringify(data))
        .then(response => {
          console.log(response + ' ' + PET_ID);
          setDataInContract(response, PET_ID);
          this.successModal = true;
        })
        .catch(error => {
          console.log(error);
        });
    },
    success() {
      this.successModal = false;
      this.$router.push("/main");
    }
  }
}
</script>
