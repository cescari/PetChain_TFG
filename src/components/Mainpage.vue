/********************************************************/
/* File: Mainpage.vue                                   */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 10/08/2019                                     */
/* Version: 2.0                                         */
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
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <div class="card">
          <div class="card-square card-body align-items-center justify-content-center">
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
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 align-content-center">
        <div class="card align-content-center">
          <div class="card-square card-body">
            <h6>
              <a href="/updatePet">Modificar mascota</a>
            </h6>
            <p class="card-text">
              <a href="/updatePet">
                <img
                  class="imgMenu"
                  src="../../public/img/pet.svg"
                  alt="Modificaci&oacute;n de datos de mascotas"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <div class="card">
          <div class="card-square card-body align-items-center justify-content-center">
            <h6>
              <a href="/deletepet">Baja de mascotas</a>
            </h6>
            <p class="card-text">
              <a href="/deletepet">
                <img class="imgMenu" src="../../public/img/love.svg" alt="Baja de mascotas" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <div class="card">
          <div class="card-square card-body align-items-center justify-content-center">
            <h6>
              <a href="/transferencias">Transferencias</a>
            </h6>
            <p class="card-text">
              <a href="/deletepet">
                <img
                  class="imgMenu"
                  src="../../public/img/currency-exchange.png"
                  alt="Transferencias"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->

    <!-- Features Section -->
    <div class="row mt-5 mb-4">
      <div class="col-lg-6 col-md-6 col-sm-6">
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
      <div class="col-lg-4 col-md-4 col-sm-4 d-flex align-items-center justify-content-center">
        <img
          class="img-fluid rounded"
          src="../../public/img/veterinarian.png"
          alt="veterinarian"
          style="width:75%; border: 1px solid silver;"
        />
      </div>
    </div>
    <!-- /.row -->
    <JoinedModal @send="setJoinUser();" v-if="modalJoined"/>
  </div>
  <!-- /.container -->
</template>

<script>
import JoinUserModal from '@/components/JoinUserModal.vue'
import { setJoinedUser, getJoinedUser } from '../../public/js/services/setDataToSmartcontrat.js';

export default {
  name: "mainpage",
  data() {
    return {
      modalJoined: false
    }
  },
  components: {
    JoinedModal: JoinUserModal
  },
  methods: {
    setJoinUser: function(){
      if(!getJoinedUser()){ 
        this.modalJoined = !setJoinedUser();
      }
    }
  },
  mounted() {
    this.modalJoined = !getJoinedUser();
  }
};
</script>

<style scoped>
/* Small devices (portrait phones, less than 576px)*/
.card-body {
  padding: 1rem !important;
}
.card {
  margin: auto;
  text-align: center;
}
@media (max-width: 768px) {
  .imgMenu {
    width: 25% !important;
  }
  h6 {
    font-size: 0.8rem !important;
  }
}

/* Small devices (landscape phones, less than 768px)*/
@media (min-width: 576px) and (max-width: 1199.98px) {
  .imgMenu {
    width: 60% !important;
  }
  .card-square {
    border: 3px solid #007bff !important;
    border-radius: 5px;
  }
}

@media (min-width: 1200px) {
  .imgMenu {
    max-width: 50% !important;
  }
  .card-square {
    border: 3px solid #007bff !important;
    border-radius: 5px;
  }
}
</style>
