/********************************************************/
/* File: Mascota.vue                                    */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent para gestion de datos del animal        */
/********************************************************/
<template>
  <div>
    <div class="row">
      <div class="col-lg-12 mb-2">
        <div class="card border-primary h-100">
          <h4 class="card-header border-primary">Animal</h4>
          <div class="card-body">
            <div class="form-group">
              <div class="form-row mb-2">
                <div class="col-md-3">
                  <label for="petIdNumber">Número de identificación:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="petIdNumber"
                    placeholder="Número de identificación:"
                    v-model="petIdNumber"
                    required
                  />
                </div>
                <div class="col-md-2">
                  <label for="fechImplantacion">Microchip fecha:</label>
                  <input
                    type="date"
                    id="fechImplantacion"
                    class="form-control"
                    v-model="fechImplantacion"
                    required
                    :disabled="update"
                    @change="checKDates()"
                  />
                </div>
                <div class="col-md-2">
                  <label for="fechalta">Alta base de datos:</label>
                  <input
                    type="date"
                    id="fechalta"
                    class="form-control"
                    v-model="fechalta"
                    required
                    :disabled="update"
                    @change="checKDates()"
                  />
                </div>
              </div>
              <div class="form-row mb-2">
                <div class="col-md-3">
                  <label for="petName">Nombre:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="petName"
                    v-model="petName"
                    placeholder="Nombre del animal"
                    required
                  />
                </div>
              </div>

              <div class="card border-primary h-100 mb-4">
                <h5 class="card-header border-primary">Raza</h5>
                <div class="ml-4 mr-4 mt-2 mb-2">
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="raza"
                      name="razaCan"
                      value="pura"
                      class="custom-control-input"
                      @click="pura=true"
                      v-model="raza"
                      :disabled="update"
                    />
                    <label class="custom-control-label" for="raza">Raza canina pura.</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="cruceDesc"
                      name="razaCan"
                      value="cruce1"
                      class="custom-control-input"
                      @click="pura=false"
                      v-model="raza"
                      :disabled="update"
                    />
                    <label class="custom-control-label" for="cruceDesc">
                      Cruce de razas caninas
                      desconocidas.
                    </label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="cruceCon"
                      name="razaCan"
                      value="cruce2"
                      class="custom-control-input"
                      @click="pura=true"
                      v-model="raza"
                      :disabled="update"
                    />
                    <label class="custom-control-label" for="cruceCon">
                      Cruce de razas caninas,
                      al menos una conocida.
                    </label>
                  </div>

                  <div class="form-row mt-2">
                    <div class="col-md-3">
                      <label for="razaPet">Raza:</label>
                      <select
                        class="custom-select"
                        id="razaPet"
                        @change="razaOtraDis = onChange($event)"
                        v-model="razaPet"
                        required
                        :disabled="update || !pura"
                      >
                        <option selected value="0">Seleccione una raza</option>
                        <option value="Dogo aleman">Dogo alem&aacute;n</option>
                        <option value="Bull terrier">Bull terrier</option>
                        <option value="Pastor aleman">Pastor alem&aacute;n</option>
                        <option value="Yorkshire">Yorkshire</option>
                        <option value="Collie">Collie</option>
                        <option value="Chow chow">Chow chow</option>
                        <option value="Siberian Huskie">Siberian Huskie</option>
                        <option value="Alaskan malamuten">Alaskan malamuten</option>
                        <option value="Perdiguero de Burgos">Perdiguero de Burgos</option>
                        <option value="Beagle">Beagle</option>
                        <option value="Galgo">Galgo</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label for="petName">
                        Si la raza no figura entre las anteriores,
                        ind&iacute;quela:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="razaOtra"
                        placeholder="Raza del animal"
                        required
                        v-model="razaOtra"
                        size="10"
                        :disabled="update || !pura || razaOtraDis"
                      />
                    </div>
                    <div class="col-md-12 mt-2">
                      <label>
                        (Recuerde que si se trata de un cruce debe marcar la
                        opci&oacute;n
                        correspondiente.)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row mb-2">
                <label>Potencialmente peligroso:</label>
                <div class="col-md-4" id="dangerous">
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="rdoYes"
                      name="danger"
                      value="dangerYes"
                      v-model="danger"
                      class="custom-control-input"
                      :disabled="update"
                    />
                    <label class="custom-control-label" for="rdoYes">Si</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="rdoNo"
                      name="danger"
                      value="dangerNo"
                      v-model="danger"
                      class="custom-control-input"
                      :disabled="update"
                    />
                    <label class="custom-control-label" for="rdoNo">No</label>
                  </div>
                </div>
                <div class="col-md-12">
                  <label>
                    Si la raza que indique para este animal est&aacute; considerada
                    potencialmente peligrosa seg&uacute;n
                    el RD 287/2002, debe forzosamente elegir el valor
                    <strong>SI</strong> en
                    este
                    campo.
                    <strong>
                      Razas consideradas peligrosas:
                      Pitbull Terrier, American Standffordshire Terrier, Rottweiler, Dogo
                      Argentino, Fila Brasileño, Tosa Inu,
                      Akita Inu, as&iacute; como sus cruces u otras razas que resulten del
                      cruce
                      de alguna de ellas, como el
                      Pampa Argentino, PitBull Mexicano, American Bully, Shorty Bull, Akita
                      americano, Red Nose, etc.
                    </strong>
                    <br />Tambi&eacute;n en el caso de que el animal tenga todas o la mayor&iacute;a
                    de
                    estas
                    <u>caracter&iacute;sticas</u>
                    .
                  </label>
                </div>
              </div>
              <div class="form-row mb-2">
                <div class="col-md-2">
                  <label for="fechNac">Fecha de nacimiento:</label>
                  <input
                    type="date"
                    id="fechNac"
                    class="form-control"
                    v-model="fechNac"
                    required
                    @change="checKDates()"
                    :disabled="update"
                  />
                </div>
              </div>
              <div class="form-row mb-2">
                <div class="col-md-3">
                  <label for="capa">Capa:</label>
                  <input
                    type="text"
                    id="capa"
                    class="form-control"
                    v-model="capa"
                    required
                    :disabled="update"
                  />
                </div>

                <div class="col-md-2">
                  <label for="pelo">Pelo:</label>
                  <select
                    class="custom-select"
                    id="pelo"
                    v-model="pelo"
                    required
                    :disabled="update"
                  >
                    <option selected value>Seleccione pelo</option>
                    <option value="alava">Corto</option>
                    <option value="albacete">Medio</option>
                    <option value="alicante">Largo</option>
                  </select>
                </div>
              </div>
              <div class="form-row mb-3">
                <div class="col-md-3">
                  <label>G&eacute;nero:</label>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="rdoMacho"
                      name="genero"
                      value="macho"
                      v-model="genero"
                      class="custom-control-input"
                      :disabled="update"
                    />
                    <label class="custom-control-label" for="rdoMacho">Macho</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="rdoHembra"
                      name="genero"
                      value="hembra"
                      v-model="genero"
                      class="custom-control-input"
                      :disabled="update"
                    />
                    <label class="custom-control-label" for="rdoHembra">Hembra</label>
                  </div>
                </div>
              </div>
              <div class="form-row mb-2">
                <div class="col-md-3">
                  <label for="capa">Nº de pasaporte animal:</label>
                  <input
                    type="text"
                    id="passport"
                    class="form-control"
                    maxlength="11"
                    v-model="passport"
                  />
                </div>

                <div class="col-md-3">
                  <label for="aptitud">Aptitud:</label>
                  <select
                    class="custom-select"
                    id="aptitud"
                    v-model="aptitud"
                    required
                    :disabled="update"
                  >
                    <option selected value>Seleccione aptitud</option>
                    <option value="Compania">Compañ&iacute;a</option>
                    <option value="Deportivo">Deportivo</option>
                    <option value="Acompañamiento">Acompañamiento</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Datos de la última revisión -->
    <div v-if="update" class="row">
      <div class="col-lg-12 mb-2">
        <div class="card border-primary h-100">
          <h5 class="card-header border-primary">Datos &uacute;ltima revisi&oacute;n</h5>
          <div class="card-body">
            <div class="form-group col-md-2">
              <label for="fechaRev">Fecha:</label>
              <input type="date" id="fechaRev" class="form-control" v-model="fechaUltRev" disabled />
            </div>
            <div class="form-group">
              <div class="card border-primary h-100">
                <h5 class="card-header border-primary">Colegiado</h5>
                <div class="card-body">
                  <div class="form-row">
                    <div class="col-md-2 mb-2">
                      <label for="vetNameUpdate">Nombre:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="vetNameUpdate"
                        v-model="vetNameUpdate"
                        placeholder="Nombre del colegiado"
                      />
                    </div>
                    <div class="col-md-3 mb-2">
                      <label for="vetSurnameUpDate">Apellidos:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="vetSurnameUpDate"
                        v-model="vetSurnameUpDate"
                        placeholder="Apellidos del colegiado"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-3 mb-2">
                      <label for="vetNumUpdate">N&uacute;mero de colegiado:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="vetNumUpdate"
                        v-model="vetNumUpdate"
                        placeholder="Número del colegiado"
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-3 mb-2">
                      <label for="vetCol">Colegio:</label>
                      <select class="custom-select" id="vetCol" required v-model="vetProvUpdate">
                        <option selected>Seleccione una provincia</option>
                        <option
                          v-for="prov in provincias"
                          :key="prov.code"
                          :value="prov.code"
                        >{{ prov.name }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group col-md-3">
              <label for="estado">Estado:</label>
              <select class="custom-select" id="estado" v-model="estado">
                <option>Seleccione estado</option>
                <option value="0">Bueno</option>
                <option value="1">Malo</option>
              </select>
            </div>
            <div class="form-group col-md-6 mb-2" id="lesiones">
              <label for="rdoLesionSi">Presenta cicatrices\lesiones:</label>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="rdoLesionSi"
                  name="lesion"
                  v-model="lesion"
                  value="true"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="rdoLesionSi">SI</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="rdoLesionNo"
                  name="lesion"
                  v-model="lesion"
                  value="false"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="rdoLesionNo">No</label>
              </div>
            </div>
            <div class="form-group col-md-3">
              <label for="numCertf">Nº certificado:</label>
              <input type="text" id="numCertf" class="form-control" v-model="numCertf" />
            </div>
            <div class="form-group col-md-12">
              <label for="obsTextArea">Observaciones</label>
              <textarea class="form-control" id="obsTextArea" rows="3" v-model="observaciones"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal v-if="myModal" :msgModal="modalMsg" @close="myModal=false" />
  </div>
  <!-- Fin datos última revisión -->
</template>

<script>
import Modal from "./Modal.vue";
import provincias from "../data/provincias_es.json";
import { getValidDate } from "../../public/js/services/setValidDate.js";

var user = JSON.parse(sessionStorage.getItem("sessionUser"));

export default {
  name: "Mascota",
  data() {
    return {
      petIdNumber: null,
      fechImplantacion: new Date().toISOString().slice(0, 10),
      fechNac: null,
      petName: null,
      raza: "pura",
      razaPet: null,
      razaOtra: null,
      razaOtraDis: false,
      danger: "dangerNo",
      capa: null,
      pelo: null,
      genero: null,
      passport: null,
      aptitud: null,
      fechalta: new Date().toISOString().slice(0, 10),
      fechaUltRev: new Date().toISOString().slice(0, 10),
      pura: true,
      myModal: false,
      vetNameUpdate: null,
      vetSurnameUpDate: null,
      vetNumUpdate: null,
      vetProvUpdate: null,
      provincias: null,
      estado: null,
      lesion: false,
      numCertf: null,
      observaciones: null,
      modalMsg:
        "La fecha de nacimiento debe ser anterior a la fecha de implantación del chip y de alta en la BBDD."
    };
  },
  components: {
    Modal
  },
  methods: {
    checKDates() {
      var dateImpl = this.fechImplantacion;
      var dateNac = this.fechNac;
      var dateAlta = this.fechalta;

      this.myModal = !getValidDate(dateNac, dateAlta, dateImpl);
    },
    onChange(event) {
      return event.target.value != 0;
    }
  },
  props: ["update"]
};
</script>
<style>
</style>

