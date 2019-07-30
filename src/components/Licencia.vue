<template>
  <div class="container">
    <h1 class="my-4">Licencia</h1>
    <div class="row pt-5 pb-5">
      <div class="col-lg-4 col-sm-6 text-center">
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
          <img
            alt="Licencia de Creative Commons"
            style="border-width:0"
            src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
          />
        </a>
      </div>
      <div class="col-lg-8 col-sm-6">
        <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">PetChain</span> by
        <span
          xmlns:cc="http://creativecommons.org/ns#"
          property="cc:attributionName"
        >Carlos Escario Bajo</span>
        is
        licensed
        under a
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
        >
          Creative
          Commons
          Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional License
        </a>.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Licencia",
  mounted() {
    this.$parent.mainView = true;
  }
};
</script>
<style>
</style>


