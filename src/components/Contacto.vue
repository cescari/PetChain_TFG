/********************************************************/
/* File: Contacto.vue                                    */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent muestra contacto                        */
/********************************************************/
<template>
  <!-- Page Content -->
  <div class="container">
    <!-- Page Heading/Breadcrumbs -->
    <h1 class="mt-4 mb-3">Contacto</h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/">Inicio</a>
      </li>
      <li class="breadcrumb-item active">Contacto</li>
    </ol>
    <!-- Content Row -->
    <div class="row">
      <!-- Map Column -->
      <div class="col-lg-8 mb-4">
        <!-- Embedded Google Map -->
        <iframe
          width="100%"
          height="400px"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=40.4367252,-3.694797&amp;spn=56.506174,79.013672&amp;t=m&amp;z=11&amp;output=embed"
        ></iframe>
      </div>
      <!-- Contact Details Column -->
      <div class="col-lg-4 mb-4">
        <h3>Nuestra dirección central</h3>
        <p>
          1234 Calle del Pez
          <br />Madrid, Madrid 28200
          <br />
        </p>
        <p>
          <abbr title="Phone">P</abbr>: (123) 456-7890
        </p>
        <p>
          <abbr title="Email">E</abbr>:
          <a href="mailto:name@example.com">name@example.com</a>
        </p>
        <p>
          <abbr title="Hours">H</abbr>: Lunes - Domingo: 24 x 7
        </p>
      </div>
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</template>
<script>
export default {
  name: "Contacto",
  mounted() {
    this.$parent.mainView = true;
  }
};
</script>
<style>
</style>
