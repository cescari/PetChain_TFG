<template>
  <div class="row">
    <div class="col-lg-12 mb-2">
      <div class="card border-primary h-100">
        <h4 class="card-header border-primary">Veterinario modificador</h4>
        <div class="card-body">
          <div class="form-group row pl-4">
            <label for="vetName" class="col-form-label font-weight-bold">Nombre:</label>
            <div class="col-md-2">
              <input type="text" class="form-control-plaintext" readonly id="vetName" />
            </div>
            <label for="vetSurname" class="col-form-label font-weight-bold">Apellidos:</label>
            <div class="col-md-2">
              <input type="text" class="form-control-plaintext" readonly id="vetSurname" />
            </div>
            <label for="vetNum" class="col-form-label font-weight-bold">Nº de colegiado:</label>
            <div class="col-md-1">
              <input type="text" class="form-control-plaintext" readonly id="vetNum" />
            </div>
            <label for="vetCol" class="col-form-label font-weight-bold">Colegio:</label>
            <div class="col-md-2">
              <input class="form-control-plaintext" id="vetCol" readonly />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>

