/********************************************************/
/* File: Vet_identificador.vue                                     */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent datos del veterinario identificador     */
/********************************************************/
<template>
  <div class="row">
    <div class="col-lg-12 mb-2">
      <div class="card border-primary h-100">
        <h4 class="card-header border-primary">{{ vet_id }}</h4>
        <div class="card-body">
          <div class="form-group row pl-4">
            <label for="vetName" class="col-form-label font-weight-bold">{{ nombre }}</label>
            <div class="col-md-2">
              <input type="text" class="form-control-plaintext" readonly id="vetName" v-model="vetName_prop"/>
            </div>
            <label for="vetSurname" class="col-form-label font-weight-bold">{{ apellidos }}</label>
            <div class="col-md-2">
              <input type="text" class="form-control-plaintext" readonly id="vetSurname" v-model="vetSurname_prop"/>
            </div>
            <label for="vetNum" class="col-form-label font-weight-bold">{{ num_col }}</label>
            <div class="col-md-1">
              <input type="text" class="form-control-plaintext" readonly id="vetNum" v-model="vetId_prop"/>
            </div>
            <label for="vetCol" class="col-form-label font-weight-bold">{{ colegio }}</label>
            <div class="col-md-2">
              <input class="form-control-plaintext" id="vetCol" readonly v-model="vetCol_prop"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vetidentificador',
  data() {
    return {
      vet_id: "Veterinario identificador",
      nombre: "Nombre: ",
      apellidos: "Apellidos: ",
      num_col: "Nº de colegiado: ",
      colegio: "Colegio: "
    };
  },
  props:['vetId_prop', 'vetName_prop','vetSurname_prop','vetCol_prop','vetaccount_prop']
};
</script>
<style>
</style>


