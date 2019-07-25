<template>
  <header style="border-bottom: 2px solid silver;">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
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
          style="background-image: url('./img/logo.png')"
        >
          <div class="carousel-caption d-none d-md-block">
            <div>
              Logo made with
              <a href="https://www.designevo.com/en/" title="Free Online Logo Maker">DesignEvo</a>
            </div>
          </div>
        </div>
        <!-- Slide Two - Set the background image for this slide in the line below -->
        <div class="carousel-item" style="background-image: url('./img/portara.jpg');">
          <div class="carousel-caption d-none d-md-block">
            <!-- <h3>Second Slide</h3>
            <p>This is a description for the second slide.</p>-->
          </div>
        </div>
        <!-- Slide Three - Set the background image for this slide in the line below -->
        <div class="carousel-item" style="background-image: url('./img/cat_1.jpg')">
          <div class="carousel-caption d-none d-md-block">
            <!-- <h3>Third Slide</h3>
            <p>This is a description for the third slide.</p>-->
          </div>
        </div>
        <!-- Slide Four - Set the background image for this slide in the line below -->
        <div class="carousel-item" style="background-image: url('./img/dog_2.jpg')">
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
</template>
<script>
export default {
    name: 'Header'
};
</script>
<style>
</style>
