/********************************************************/
/* File: Updatepet.vue                                   */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 10/05/2019                                     */
/* Version: 3.0                                         */
/* Webcomponent para la modificacion de la mascota      */
/********************************************************/
<template>
  <div class="container pb-5">
    <form name="mainFrm" action="POST" @submit.prevent="onSubmit();">
      <!-- Page Heading/Breadcrumbs -->
      <div class="row">
        <h1 class="mt-3 pt-3 pl-3">{{ pageTitle }}</h1>
        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div class="h-75 w-75 p-3">
            <img
              v-if="!consultaPet"
              class="card-img-top"
              src="../../public/img/pet.svg"
              alt="pageTitle"
              style="width:20%;"
            />
            <img
              v-if="consultaPet"
              class="card-img-top"
              src="../../public/img/search.png"
              alt="pageTitle"
              style="width:20%;"
            />
          </div>
        </div>
      </div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/main">Inicio</a>
        </li>
        <li class="breadcrumb-item active">{{ pageTitle }}</li>
      </ol>
      <vetidentificador
        :vetId_prop="vetId"
        :vetName_prop="vetName"
        :vetSurname_prop="vetSurname"
        :vetCol_prop="vetCol"
        :vetaccount_prop="vetAccount"
      />
      <Mascota :update="true" :consulta="consultaPet" />
      <Propietario :consulta="consultaPet" />
      <div class="text-right">
        <button
          id="btnCancel"
          class="btn btn-primary mr-2"
          @click="$router.push('main')"
        >{{ msgBtnCancelar }}</button>
        <button
          v-if="showBtnSubmit"
          id="btnSubmit"
          type="submit"
          class="btn btn-primary"
          @submit="confirmModal = true;"
        >{{ msgBtnSubmit }}</button>
      </div>
    </form>
    <SelectPet v-if="myModal" @close="myModal=false" @getHash="getPetHash($event);" />
    <Success v-if="successModal" @close="success();" />
    <Confirm
      v-if="confirmModal"
      :msgTitle="msgTitle"
      :msgBody="msgBody"
      :msgBtnConfirm="msgBtnConfirm"
      :error="error"
      @close="confirmModal=false"
      @setConfirm="updatePet($event);"
    />
  </div>
</template>
<script>
import vetidentificador from "@/components/Vet_identificador.vue";
import Mascota from "@/components/Mascota.vue";
import Propietario from "@/components/Propietario.vue";
import SelectPet from "@/components/SelectpetModal.vue";
import Confirm from "@/components/ConfirmModal.vue";
import Success from "@/components/SuccessModal.vue";
import {
  setJSONToData,
  setDataToJSON,
  setDataToJSON_TX
} from "../../public/js/services/setDataToJSON.js";
import {
  setIPFSdata,
  getIPFSdata
} from "../../public/js/services/setIPFSFile.js";
import {
  getDataFromContract,
  setDataInContract,
  sendTransfer,
  registerTX,
  getTXDataFromContract,
  setTXDataInContract
} from "../../public/js/services/setDataToSmartcontrat.js";
import { stringify } from "querystring";

var data = {};
var data_tx = {
  txObj: []
};

export default {
  name: "Updatepet",
  components: {
    vetidentificador,
    Mascota,
    Propietario,
    SelectPet,
    Confirm,
    Success
  },
  data() {
    return {
      myModal: false,
      confirmModal: false,
      successModal: false,
      error: false,
      msgTitle: "Confirmar modificación",
      msgBody:
        "ATENCION: Los datos de esta mascota van a ser modificados.¿Está Ud. seguro? Esta acción no podrá deshacerse.",
      msgBtnConfirm: "Modificar",
      msgBtnSubmit: "Modificar datos",
      msgBtnCancelar: "Cancelar",
      showBtnSubmit: true,
      vetId: null,
      vetName: null,
      vetSurname: null,
      vetCol: null,
      vetAccount: null
    };
  },
   methods: {
    onSubmit: function() {
      if (!this.$props.consultaPet) this.confirmModal = true;
    },
    getPetHash: function(_petId) {
      /*Datos de la mascota */
      getIPFSdata(getDataFromContract(_petId)[1])
        .then(response => {
          data = response.toString('utf8');
          console.log('data ' + data);
          if(data.action != 3 || this.$props.consultaPet){
            setJSONToData(JSON.parse(data), this);
            this.vetId = JSON.parse(data).vetidentificador.vetId;
            this.vetName = JSON.parse(data).vetidentificador.vetName;
            this.vetSurname = JSON.parse(data).vetidentificador.vetSurname;
            this.vetCol = JSON.parse(data).vetidentificador.vetCol;
            this.vetAccount = JSON.parse(data).vetidentificador.account;

            getIPFSdata(getTXDataFromContract(this.vetAccount))
            .then(response => {
              data_tx = response.toString('utf8');
              console.log('data_tx ' + data_tx)
            })
            .catch(error => {
            /* this.confirmModal = true;
              this.error = true;
              this.msgTitle = "Error en la búsqueda";
              this.msgBody = "El dirección introducida no está registrada en la BlockChain.";*/
              console.log(error)
            });



          } else {
            this.$children[1].petIdNumber = null;
            this.error = true;
            this.confirmModal = true;
            this.msgBtnConfirm = 'Cerrar';
            this.msgTitle = "Error en la búsqueda";
            this.msgBody = "ATENCION: Esta mascota está dada de baja en la base de datos. Sus datos no pueden ser modificados."
          }
        })
        .catch(error => {
          this.confirmModal = true;
          this.error = true;
          this.msgTitle = "Error en la búsqueda";
          this.msgBody = "El identificador introducido no corresponde con ninguna mascota.";
          console.log(error)
        });
      /* Array de TX */
      
      this.myModal = false;
    },
    search: function() {
      this.myModal = true;
    },
    updatePet: function() {
      this.confirmModal = false;
      /* Datos mascota --> JSON */
      const data_pet = setDataToJSON(JSON.parse(data), this, 2);
      /* JSON mascota --> IPFS */
      setIPFSdata(JSON.stringify(data_pet))
        .then(response => {
          const PET_ID = this.$children[1].petIdNumber;
          setDataInContract(response[0].hash, PET_ID);
          this.successModal = true;
          registerTX(data_pet.vetidentificador.account);

            /* Datos TX --> JSON */
          
          /* JSON TX --> IPFS */
          setIPFSdata(JSON.stringify(setDataToJSON_TX(data_tx, this)))
            .then(response => {
              setTXDataInContract(data_pet.vetidentificador.account, response[0].hash);
            })
            .catch(error => {
            /* this.confirmModal = true;
              this.error = true;
              this.msgTitle = "Error la TX";
              this.msgBody = "Se ha producido un error en la TX de ETH. Contacte con su Administrador";*/
              console.log(error)
            });


        })
        .catch(error => {
          console.log(error)
          this.confirmModal = true;
          this.error = true;
          this.msgTitle = "Error en el almacenamiento";
          this.msgBody = "Se ha producido un error en el almacenamiento de los datos en la IPFS. Contacte con su Administrador";
        });
      
    },
    success() {
      this.successModal = false;
      this.$router.push("/main");
    }
  },
  props: ["consultaPet", "pageTitle"],
  mounted() {
    if (this.$props.consultaPet) {
      this.showBtnSubmit = false;
      this.msgBtnCancelar = "Aceptar";
    }
  }
};
</script>
