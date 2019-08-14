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
                      class="custom-control-input"
                      v-model="raza"
                    />
                    <label class="custom-control-label" for="raza">Raza canina pura.</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input
                      type="radio"
                      id="cruceDesc"
                      name="razaCan"
                      class="custom-control-input"
                      v-model="raza"
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
                      class="custom-control-input"
                      v-model="cruceCon"
                    />
                    <label class="custom-control-label" for="cruceCon">
                      Cruce de razas caninas,
                      al menos una conocida.
                    </label>
                  </div>

                  <div class="form-row mt-2">
                    <div class="col-md-3">
                      <label for="razaPet">Raza:</label>
                      <select class="custom-select" id="razaPet" v-model="razaPet" required>
                        <option selected value>Seleccione una raza</option>
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
                      value="1"
                      v-model="danger"
                      class="custom-control-input"
                    />
                    <label class="custom-control-label" for="rdoYes">Si</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="rdoNo"
                      name="danger"
                      value="0"
                      v-model="danger"
                      class="custom-control-input"
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
                  />
                </div>
              </div>
              <div class="form-row mb-2">
                <div class="col-md-3">
                  <label for="capa">Capa:</label>
                  <input type="text" id="capa" class="form-control" v-model="capa" required />
                </div>

                <div class="col-md-2">
                  <label for="pelo">Pelo:</label>
                  <select class="custom-select" id="pelo" v-model="pelo" required>
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
                  <select class="custom-select" id="aptitud" v-model="aptitud" required>
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
            <div class="form-group col-md-3">
              <label for="fechaRev">Fecha:</label>
              <input type="date" id="fechaRev" class="form-control" />
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
                        placeholder="Nombre del colegiado"
                        disabled
                      />
                    </div>
                    <div class="col-md-3 mb-2">
                      <label for="vetSurnameUpDate">Apellidos:</label>
                      <input
                        type="text"
                        class="form-control"
                        id="vetSurnameUpDate"
                        placeholder="Apellidos del colegiado"
                        disabled
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
                        placeholder="N&uacute;mero del colegiado"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-3 mb-2">
                      <label for="vetCol">Colegio:</label>
                      <select class="custom-select" id="vetCol" required>
                        <option selected>Seleccione una provincia</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group col-md-3">
              <label for="estado">Estado:</label>
              <select class="custom-select" id="estado">
                <option>Seleccione estado</option>
                <option value="0">Bueno</option>
                <option value="1">Malo</option>
              </select>
            </div>
            <div class="form-group col-md-6 mb-2" id="lesiones">
              <label for="lesion">Presenta cicatrices\lesiones:</label>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="rdoLesionSi" name="lesion" class="custom-control-input" />
                <label class="custom-control-label" for="rdoLesionSi">SI</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="rdoLesionNo" name="lesion" class="custom-control-input" />
                <label class="custom-control-label" for="rdoLesionNo">No</label>
              </div>
            </div>
            <div class="form-group col-md-3">
              <label for="numCertf">Nº certificado:</label>
              <input type="text" id="numCertf" class="form-control" />
            </div>
            <div class="form-group col-md-12">
              <label for="obsTextArea">Observaciones</label>
              <textarea class="form-control" id="obsTextArea" rows="3"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Fin datos última revisión -->
</template>

<script>
export default {
  name: "Mascota",
  data() {
    return {
      petIdNumber: null,
      fechImplantacion: null,
      fechNac: null,
      petName: null,
      raza: null,
      cruceCon: null,
      razaPet: null,
      razaOtra: null,
      danger: null,
      capa: null,
      pelo: null,
      genero: null,
      passport: null,
      aptitud: null,
      fechalta: null
    };
  },
  methods: {
    checKDates() {
      var dateImpl = new Date(this.fechImplantacion);
      var dateNac = new Date(this.fechNac);
      var dateAlta = new Date(this.fechalta);

      console.log("dateImpl " + dateImpl < dateAlta);
      console.log("dateNac " + dateNac);
      console.log("dateAlta " + dateAlta);
    }
  },
  props: ['update']
};
</script>
<style>
</style>

