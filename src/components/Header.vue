/********************************************************/
/* File: Header.vue                                    */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/08/2019                                     */
/* Version: 2.0                                         */
/* Webcomponent cabecera						        */
/********************************************************/
<template>
  <div>
   
    <header
      id="myHeader"
      ref="myHeader"
      v-show="headerVisible"
      style="border-bottom: 2px solid silver;"
    >
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
        data-interval="3000"
      >
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <!-- Slide One - Set the background image for this slide in the line below -->
          <div
            class="carousel-item active bg-size-initial"
            style="background-image: url('./img/logo.png');  max-height: 240px;"
          >
            <div class="carousel-caption d-none d-md-block">
              <div> 
                Logo made with
                <a
                  href="https://www.designevo.com/en/"
                  title="Free Online Logo Maker"
                >DesignEvo</a>
              </div>
            </div>
          </div>
          <!-- Slide Two - Set the background image for this slide in the line below -->
          <div class="carousel-item" style="background-image: url('./img/portara.jpg'); max-height: 240px;">
            <div class="carousel-caption d-none d-md-block">
              <!-- <h3>Second Slide</h3>
              <p>This is a description for the second slide.</p>-->
            </div>
          </div>
          <!-- Slide Three - Set the background image for this slide in the line below -->
          <div class="carousel-item" style="background-image: url('./img/cat_1.jpg'); max-height: 240px;">
            <div class="carousel-caption d-none d-md-block">
              <!-- <h3>Third Slide</h3>
              <p>This is a description for the third slide.</p>-->
            </div>
          </div>
          <!-- Slide Four - Set the background image for this slide in the line below -->
          <div class="carousel-item" style="background-image: url('./img/dog_2.jpg'); max-height: 240px;">
            <div class="carousel-caption d-none d-md-block">
              <!-- <h3>Fourth Slide</h3>
              <p>This is a description for the fourth slide.</p>-->
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </header>
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "Header",
  components: {
    Menu
  },
  data() {
    return {
      headerVisible: true
    };
  }
};
</script>
<style>
/* Small devices (portrait phones, less than 576px)*/
@media (max-width: 575.98px) {
  header {
    display: none !important;
  }
}

/* Small devices (landscape phones, less than 768px)*/
@media (min-width: 576px) and (max-width: 767.98px) {
  header {
    display: none !important;
  }
}
@media (min-width: 768px) and (max-width: 1199.98px) {
  .carousel-item {
    max-height: 100px !important;
  }
}
</style>