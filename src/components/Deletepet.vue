/********************************************************/
/* File: DeletePet.vue                                  */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/07/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent para la baja de la mascota              */
/********************************************************/
<template>
  <div class="container pb-5">
    
      <!-- Page Heading/Breadcrumbs -->
      <div class="row">
      <h1 class="mt-3">Baja de mascotas</h1>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
          <div class="h-75 w-75 p-3">
            <img class="card-img-top" src="../../public/img/love.svg" alt="Baja de mascotas" style="width:40%;"/>
          </div>
        </div>
      </div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/main">Inicio</a>
        </li>
        <li class="breadcrumb-item active">Baja de mascotas</li>
      </ol>
      <vetidentificador />
      <form name="deleteFrm" @submit.prevent="onSubmit();">
        <div class="row">
          <div class="col-lg-12 mb-2">
            <div class="card border-primary h-100">
              <h4 class="card-header border-primary">Animal</h4>
              <div class="card-body">
                <div class="form-group">
                  <div class="form-row mb-2">
                    <div class="col-md-2">
                      <label for="petIdNumber">Nº de identificación:</label>
                      <input
                        v-model="petIdNumber"
                        type="text"
                        class="form-control"
                        id="petIdNumber"
                        placeholder="Numero de identificacion:"
                        required
                        v-on:keypress.prevent="getPetHash(petIdNumber);"
                      />
                    </div>
                    <div class="col-md-1" v-if="update">
                      <label for="btbSearch" style="visibility: hidden;">Buscar</label>
                      <button id="btbSearch" title="Buscar mascota" type="button" class="btn btn-primary" aria-label="Buscar" @click="myModal=true;">
                        <i class="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div class="col-md-2">
                      <label for="fechImplantacion">Microchip fecha:</label>
                      <input type="date" id="fechImplantacion" v-model="fechImplantacion" class="form-control" disabled />
                    </div>
                    <div class="col-md-2">
                      <label for="fechaBaja">Fecha baja:</label>
                      <input type="date" id="fechaBaja"  v-model="fechaBaja" class="form-control" disabled />
                    </div>
                  </div>
                  <div class="form-row mb-2">
                    <div class="col-md-3">
                      <label for="petName">Nombre:</label>
                      <input
                        type="text"
                        v-model="petName"
                        class="form-control"
                        id="petName"
                        placeholder="Nombre del animal"
                        disabled
                      />
                    </div>
                    <div class="col-md-3">
                    <label for="petCausaBaja">Causa del fallecimiento:</label>
                      <select class="custom-select" id="selBaja" v-model="selBaja">
                        <option>Seleccione una opcion</option>
                        <option value="0">Eutanasia</option>
                        <option value="1">Accidente</option>
                        <option value="1">Enfermedad</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-right">
          <button type="submit" class="btn btn-primary" @submit="onSubmit();">Baja mascota</button>
        </div>
      </form>
    <SelectPet v-if="myModal" @close="myModal=false" @getHash="getPetHash($event);"/>
    <Confirm v-if="confirmModal" :msgTitle="msgTitle" :msgBody="msgBody" :msgBtnConfirm="msgBtnConfirm" @close="confirmModal=false" @setConfirm="deletePet($event)" />
  </div>
</template>
<script>
import vetidentificador from "@/components/Vet_identificador.vue";
import Mascota from "@/components/Mascota.vue";
import SelectPet from "@/components/SelectpetModal.vue";
import Confirm from "@/components/ConfirmModal.vue";
import { setIPFSdata, getIPFSdata } from "../../public/js/services/setIPFSFile.js";
import { getDataFromContract } from "../../public/js/services/setDataToSmartcontrat.js"

export default {
  name: "Deletepet",
  data() {
    return {
      myModal: false,
      confirmModal: false,
      petIdNumber: null,
      fechImplantacion: null,
      fechaBaja: new Date().toISOString().slice(0, 10),
      petName: null,
      selBaja: null,
      msgTitle: 'Confirmar eliminación',
      msgBody: 'ATENCION: Esta mascota será eliminada de la base de datos principal.¿Está Ud. seguro? Esta acción no podrá deshacerse.',
      msgBtnConfirm: 'Eliminar'
    }
  },
  components: {
    vetidentificador,
    Mascota,
    SelectPet,
    Confirm
  },
  props: ["update"],
  methods: {
    onSubmit: function() {
      if (!this.$props.consultaPet) this.confirmModal = true;
    },
    getPetHash: function(_petId){
      //console.log(_petId);
      getIPFSdata (getDataFromContract(_petId)[1])
      .then((response)=> {
        var data = JSON.parse(response);
        this.petIdNumber = data.mascota.petIdNumber;
        this.fechImplantacion = data.mascota.fechImplantacion;
        this.fechaBaja = new Date().toISOString().slice(0, 10);
        this.petName = data.mascota.petName;
      })
      .catch((error) => {
        console.log(error);
      });

      this.myModal = false;
    }
  }
};
</script>
