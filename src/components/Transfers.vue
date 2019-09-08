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
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <div class="h-75 w-75 p-3">
          <img
            class="card-img-top"
            src="../../public/img/currency-exchange.png"
            alt="Transfers ETH"
            style="width:40%;"
          />
        </div>
      </div>
    </div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="/main">Inicio</a>
      </li>
      <li class="breadcrumb-item active">Transferencias ETH</li>
    </ol>
    <div>
    <label>{{from}}</label>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">{{column}}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tr-body" v-for="(item, index) in items" :key="index">
          <td v-for="(column, indexColumn) in item_id" :key="indexColumn">{{item[column]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { getIPFSdata } from "../../public/js/services/setIPFSFile.js";
import { getTXDataFromContract } from "../../public/js/services/setDataToSmartcontrat.js";

//const toAddr = JSON.parse(sessionStorage.getItem("sessionUser")).account;
export default {
  name: "Tranfers",
  data() {
    return {
      from: null,
      items: [
        /* {
          'tx_date': "01/02/2019",
          'pet_id': "12345-AA",
          'nombre': "Chula",
          'amount': "3ETH"
        },
        {
          'tx_date': "01/02/2019",
          'pet_id': "98765-BB",
          'nombre': "Atom",
          'amount': "3ETH"
        },
        {
          'tx_date': "01/02/2019",
          'pet_id': "98485-BB",
          'nombre': "Tara",
          'amount': "3ETH"
        },
        {
          'tx_date': "01/03/2019",
          'pet_id': "98265-ZZ",
          'nombre': "Chola",
          'amount': "3ETH"
        }*/
      ],
      columns: ["Fecha", "ID Mascota", "Nombre mascota", "Cantidad"],
      item_id: ["tx_date", "pet_id", "nombre", "amount"]
    };
  },
  created: function() {
   // llenar: function(){
      //QmdkVKGUDJqWSzZNQfYuJnbGV7F7txkmxQo2dM3cRZMtmZ
      //getIPFSdata(getTXDataFromContract(toAddr))
      getIPFSdata('QmWGhXHbUMC51S9GrCN4DA7bWNYH9s1r4eSCuzYsLeiaCE')
      .then(response => {
        console.log(JSON.parse(response).from)
        this.from = JSON.parse(response).from;
        this.items = JSON.parse(response).tx;
      })
      .catch(error => {
        console.log(error);
      });
   // }
    
  }
};
</script>
<style scoped>
th,
td {
  text-align: center;
}
tr.tr-body:hover {
  background-color: lightgray;
  cursor: pointer;
}

@media (max-width: 384px) {
  th,
  td {
    font-size: 0.8rem;
  }
}
</style>