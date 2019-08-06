<template>
  <div class="row">
    <div class="col-lg-12 mb-2">
      <div class="card border-primary h-100">
        <h5 class="card-header border-primary">Propietario</h5>
        <div class="card-body">
          <div class="form-group">
            <div class="form-row mb-2">
              <div class="col-md-2">
                <label for="propName">Nombre:</label>
                <input
                  type="text"
                  class="form-control"
                  id="propName"
                  placeholder="Nombre del propietario"
                  v-model="propName"
                  required
                />
              </div>
              <div class="col-md-3">
                <label for="propSurname">Apellidos:</label>
                <input
                  type="text"
                  class="form-control"
                  id="propSurname"
                  placeholder="Apellidos del propietario"
                  v-model="propSurname"
                  required
                />
              </div>
            </div>
            <div class="form-row mb-2">
              <div class="col-md-3">
                <label for="propId">DNI/Pasaporte/Tarjeta residente:</label>
                <input
                  type="text"
                  class="form-control"
                  id="propId"
                  placeholder="Nº documento"
                  required
                  v-model="propId"
                  maxlength="12"
                />
              </div>
            </div>
            <div class="form-row mb-2">
              <div class="col-md-2">
                <label for="propPhone">Tel&eacute;fono:</label>
                <input
                  type="tel"
                  pattern="^\d{2}\d{3}\d{4}$"
                  class="form-control"
                  id="propPhone"
                  placeholder="Teléfono"
                  required
                  v-model="propPhone"
                  maxlength="10"
                />
              </div>
            </div>
            <div class="form-row mb-2">
              <div class="col-md-3 mb-2">
                <label for="provProp">Provincia:</label>
                <select class="custom-select" id="provProp" v-model="provProp" required>
                  <option selected>Seleccione una provincia</option>
                  <option v-for="prov in provincias" value="prov.code" :key="prov.code">{{ prov.name}}</option>
                </select>
              </div>
              <div class="col-md-3 mb-2">
                <label for="ciudadProp">Ciudad:</label>
                <input
                  type="text"
                  class="form-control"
                  id="ciudadProp"
                  placeholder="Municipio"
                  v-model="ciudadProp"
                  required
                />
              </div>
              <div class="col-md-1 mb-2">
                <label for="cp">C.P:</label>
                <input
                  type="text"
                  class="form-control"
                  id="cp"
                  placeholder="C.P."
                  maxlength="5"
                  v-model="cp"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-3">
                <label for="propPais">Pa&iacute;s:</label>
                <select class="custom-select" id="propPais" v-model="propPais" required>
                  <option selected>Seleccione un pa&iacute;s</option>
                  <option v-for="pais in paises" value="pais.code" :key="pais.CODIGO">{{ pais.PAIS}}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import provincias from '../data/provincias_es.json';
import paises from '../data/paises_ue.json';

export default {
    name: 'propietario',
    data(){
      return {
        propName: '',
        propSurname: '',
        propId: '',
        propPhone: '',
        provProp: '',
        ciudadProp: '',
        cp: '',
        propPais: '',
        provincias:'',
        paises: ''
      }
    }
}
</script>

<style>

</style>

