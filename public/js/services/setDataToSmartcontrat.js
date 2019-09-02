/************************************************************/
/* File: setDataToSmartcontrat.js                            */
/* Author: Carlos Escario Bajo                              */
/* Proyecto: TFG UNIR                                       */
/* Date: 28/08/2019                                         */
/* Version: 2.0                                             */
/* Javascript para guardar el HASH en la red de Ethereum    */
/************************************************************/
import { petchain_ABI } from '@/data/ABI_contracts.js';

const Web3 = require('web3');
const url = 'http://127.0.0.1:7545';

const fromAddress = getDefaultAccount();
const petchain_Addr = '0x37d2306340c17ccf986f97677eb86adf32fe1978';
const web3 = new Web3(new Web3.providers.HttpProvider(url));

web3.eth.defaultAccount = fromAddress;
const contract = web3.eth.contract(petchain_ABI).at(petchain_Addr);

export function setDataInContract(_hash, _petId) {

    var petin = contract.setPet(_petId, _hash, {
        from: fromAddress,
        gas: 3000000
    });

    var pet = contract.getPet(_petId, {
        from: fromAddress,
        gasPrice: 3000000
    });
}
export function getDataFromContract(_petId){
    return contract.getPet(_petId, {
        from: fromAddress,
        gasPrice: 3000000
    });
}
function getDefaultAccount() {
    var userData = JSON.parse(JSON.stringify(sessionStorage.getItem('sessionUser')));
    return JSON.parse(userData).account;
}