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
    <form name="mainFrm" action="POST" @submit.prevent="onSubmit">
      <h1 class="mt-5">Baja de mascotas</h1>
      <!-- Page Heading/Breadcrumbs -->
      <div class="row">
        <div class="col-lg-2 col-sm-2 col-xs-2">
          <div class="h-75 w-75 p-3">
            <img class="card-img-top" src="../../public/img/love.svg" alt="Baja de mascotas" />
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
      <div class="row">
        <div class="col-lg-12 mb-2">
          <div class="card border-primary h-100">
            <h4 class="card-header border-primary">Animal</h4>
            <div class="card-body">
              <div class="form-group">
                <div class="form-row mb-2">
                  <div class="col-md-3">
                    <label for="petIdNumber">N&uacute;mero de identificaci&oacute;n:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="petIdNumber"
                      placeholder="Numero de identificacion:"
                      required
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="fechImplantacion">Microchip implantado el d&iacute;a:</label>
                    <input type="date" id="fechImplantacion" class="form-control" required />
                  </div>
                  <div class="col-md-3">
                    <label for="fechalta">Alta en la base de datos:</label>
                    <input type="date" id="fechalta" class="form-control" required />
                  </div>
                </div>
                <div class="form-row mb-2">
                  <div class="col-md-3">
                    <label for="petName">Nombre:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="petName"
                      placeholder="Nombre del animal"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-right">
        <button type="submit" class="btn btn-primary">Baja mascota</button>
      </div>
    </form>
  </div>
</template>
<script>
import vetidentificador from "@/components/Vet_identificador.vue";
import Mascota from "@/components/Mascota.vue";

export default {
  name: "Deletepet",
  components: {
    vetidentificador,
    Mascota
  }
};
</script>
