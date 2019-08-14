/********************************************************/
/* File: Menu.vue                                       */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/08/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent para gestion del menu de PetChain       */
/********************************************************/
<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top" style="background-color:#007bff!important;">
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
          <li class="nav-item">
            <a class="nav-link" href="/addpet">Alta de mascotas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/updatepet">Modificaci&oacute;n de mascotas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/deletepet">Baja de mascotas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contacto">Contacto</a>
          </li>
          <li class="nav-item" >
            <a class="nav-link" href="/licencia">Licencia</a>
          </li>
          <li class="nav-item ml-3">
            <a class="nav-link" href="/">Cerrar sesi&oacute;n</a>
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
.iconExit {
  display: inline-block;
}
.navbar-dark .navbar-nav .nav-link {
	color: rgba(255,255,255) !important;
}
.navbar-dark .navbar-nav .nav-link:hover {
	color: rgba(255,255,255, .7) !important;
}

@media (min-width: 768px) and (max-width: 1199.98px) {
  nav {
    background-color:#007bff !important;
  }
  .navbar-dark .navbar-nav .nav-link {
    font-size: small;
    
  }
  .navbar-brand {
	  font-size: medium !important;
  }
}
</style>
