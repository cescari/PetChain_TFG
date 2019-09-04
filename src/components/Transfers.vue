/********************************************************/
/* File: Transfers.vue                             */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 20/08/2019                                     */
/* Version: 1.0                                         */
/* Webcomponent para la visualización de tranferencias  */
/* en ETH                                               */
/********************************************************/
<template>
    <div class="container pb-5">
      <h1 class="mt-5">Transferencias ETH</h1>
      <!-- Page Heading/Breadcrumbs -->
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
          <div class="h-75 w-75 p-3">
            <img class="card-img-top" src="../../public/img/currency-exchange.png" alt="Transfers ETH" style="width:40%;" />
          </div>
        </div>
      </div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="/main">Inicio</a>
        </li>
        <li class="breadcrumb-item active">Transferencias ETH</li>
      </ol>
    </div>
</template>
<script>
export default {
    name: "Tranfers"
}
</script>