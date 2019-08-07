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
    <div class="row mb-4 portfolio d-flex justify-content-center">
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <div class="card">
          <div class="card-body text-center">
            <h6>
              <a href="/addpet">Alta de mascotas</a>
            </h6>
            <p class="card-text">
              <a href="/addpet">
                <img src="../../public/img/collar.svg" alt="Alta mascotas"  style="width:50%;" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <div class="card">
          <div class="card-body text-center">
            <h6>
              <a href="/updatePet">Modificaci&oacute;n de datos de mascotas</a>
            </h6>
            <p class="card-text">
              <a href="/updatePet">
                <img
                  src="../../public/img/pet.svg"
                  alt="Modificaci&oacute;n de datos de mascotas"
                  style="width:50%;"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <div class="card">
          <div class="card-body text-center">
            <h6>
              <a href="/deletepet">Baja de mascotas</a>
            </h6>
            <p class="card-text">
              <a href="/deletepet">
                <img src="../../public/img/love.svg" alt style="width:50%;" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->

    <!-- Features Section -->
    <div class="row">
      <div class="col-lg-6">
        <h2>Modern Business Features</h2>
        <p>The Modern Business template by Start Bootstrap includes:</p>
        <ul>
          <li>
            <strong>Bootstrap v4</strong>
          </li>
          <li>jQuery</li>
          <li>Font Awesome</li>
          <li>Working contact form with validation</li>
          <li>Unstyled page elements for easy customization</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id
          reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia
          dolorum
          ducimus unde.
        </p>
      </div>
      <div class="col-lg-6">
        <img class="img-fluid rounded" src="http://placehold.it/700x450" alt />
      </div>
    </div>
    <!-- /.row -->

    <hr />

    <!-- Call to Action Section -->
    <div class="row mb-4">
      <div class="col-md-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum
          deleniti
          beatae veniam harum neque nemo praesentium cum alias asperiores commodi.
        </p>
      </div>
      <div class="col-md-4">
        <a class="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>
      </div>
    </div>
  </div>
  <!-- /.container -->
</template>

<script>
export default {
  name: "mainpage"
};
</script>

<style>
</style>
