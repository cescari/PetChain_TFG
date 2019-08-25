/********************************************************/
/* File: Menu.vue                                       */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/08/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent para gestion del menu de PetChain       */
/********************************************************/
<template>
  <nav
    class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top"
    style="background-color:#007bff!important;"
  >
    <div class="container mr-0">
      <a class="navbar-brand" href="/main">PetChain - Home</a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Gesti&oacute;n de mascotas</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <a class="dropdown-item" href="/addpet">Alta de mascotas</a>
              <a class="dropdown-item" href="/updatepet">Modificaci&oacute;n de mascotas</a>
              <a class="dropdown-item" href="/deletepet">Baja de mascotas</a>
            </div>
          </div>
          <li class="nav-item">
            <a class="nav-link" href="/contacto">Transferencias</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contacto">Contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/licencia">Licencia</a>
          </li>
          <li class="nav-item ml-3">
            <a class="nav-link" href="/">Cerrar sesi&oacute;n</a>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <i class="fas fa-sign-out-alt"></i>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu"
};
</script>
<style>
.btn-secondary {
  color: #fff;
  background-color: #007bff !important;
  border-color: #007bff !important;
  font-weight: bold !important;
}
btn-secondary:focus {
  box-shadow: 0 0 0 0.2rem #007bff !important;
}

.btn-secondary:hover {
  color: rgba(255, 255, 255, 0.7) !important;
}
.fas {
  color: #fff;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255) !important;
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: rgba(255, 255, 255, 0.7) !important;
}

@media (min-width: 768px) and (max-width: 1199.98px) {
  nav {
    background-color: #007bff !important;
  }
  .navbar-dark .navbar-nav .nav-link {
    font-size: small;
  }
  .navbar-brand {
    font-size: medium !important;
  }
}
</style>
