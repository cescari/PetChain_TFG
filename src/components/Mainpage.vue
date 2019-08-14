/********************************************************/
/* File: Mainpage.vue                                   */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent de la pagina inicial de PetChain        */
/********************************************************/
<template>
  <!-- Page Content -->
  <div>
    <h2 class="my-4">Sistema de gesti&oacute;n veterinaria</h2>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/">Inicio</a>
      </li>
    </ol>

    <!-- Portfolio Section -->
    <div class="row portfolio d-flex justify-content-center">
      <div class="col-lg-3 col-md-4 col-sm-4 col-xs-4">
        <div class="card">
          <div class="card-body text-center">
            <h6>
              <a href="/addpet">Alta de mascotas</a>
            </h6>
            <p class="card-text">
              <a href="/addpet">
                <img class="imgMenu" src="../../public/img/collar.svg" alt="Alta mascotas" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-4 col-xs-4">
        <div class="card">
          <div class="card-body text-center">
            <h6>
              <a href="/updatePet">Modificaci&oacute;n de datos de mascotas</a>
            </h6>
            <p class="card-text">
              <a href="/updatePet">
                <img class="imgMenu" src="../../public/img/pet.svg" alt="Modificaci&oacute;n de datos de mascotas" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-4 col-xs-4">
        <div class="card">
          <div class="card-body text-center">
            <h6>
              <a href="/deletepet">Baja de mascotas</a>
            </h6>
            <p class="card-text">
              <a href="/deletepet">
                <img class="imgMenu" src="../../public/img/love.svg" alt="Baja de mascotas"/>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->

    <!-- Features Section -->
    <div class="row mt-5 mb-4">
      <div class="col-lg-6">
        <!-- <h2>Modern Business Features</h2> -->
        <h2>Petchain 1.0 le ofrece:</h2>
        <ul>
          <li>
            <strong>Dar de alta las mascotas</strong>
          </li>
          <li>
            <strong>Modificar los datos de mascotas y propietarios</strong>
          </li>
          <li>
            <strong>Dar de baja mascotas del sistema</strong>
          </li>
          <li>
            <strong>Visualizar el hist&oacute;rico de transacciones realizadas</strong>
          </li>
        </ul>
        <p>Mant&eacute;gase atento pronto llegar&aacute;n nuevas versiones!!</p>
      </div>
      <!-- <div class="col-lg-4 mb-4">
        <div class="p-3 bg-primary text-white rounded">
          <p>
            El primer sistema de gesti&oacute;n sanitaria animal basado en la Blockchain de Ethereum. Aqu&iacute;
            tendr&aacute; toda la privacidad e inmutamilidad que le ofrece esta tecnolog&iacute;a. 
          </p>
        </div>
      </div>-->
      <div class="col-lg-6">
        <img class="img-fluid rounded" src="http://placehold.it/700x450" alt />
      </div>
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</template>

<script>
export default {
  name: "mainpage"
};
</script>

<style>
/* Small devices (portrait phones, less than 576px)*/
@media (max-width: 575.98px) {
  .imgMenu {
    width: 25% !important;
  }
}

/* Small devices (landscape phones, less than 768px)*/
@media (min-width: 576px) and (max-width: 1199.98px) {
  .imgMenu {
    width: 50% !important;
  }
}

@media (min-width: 1200px) {
  .imgMenu {
    width: 60% !important;
  }
}
</style>
