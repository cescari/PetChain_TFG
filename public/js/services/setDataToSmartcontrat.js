/************************************************************/
/* File: setDataToSmartcontrat.js                            */
/* Author: Carlos Escario Bajo                              */
/* Proyecto: TFG UNIR                                       */
/* Date: 28/08/2019                                         */
/* Version: 2.0                                             */
/* Javascript para guardar el HASH en la red de Ethereum    */
/************************************************************/
import { petchain_ABI, joinedUser_ABI } from '@/data/ABI_contracts.js';

const Web3 = require('web3');
const url = 'http://127.0.0.1:7545';

const petchain_Addr = '0xa88f1b3242413a574a9497e0d48cc4fba23adc75';
const joineduser_Addr = '0xa88f1b3242413a574a9497e0d48cc4fba23adc75';
const web3 = new Web3(new Web3.providers.HttpProvider(url));

const contract = web3.eth.contract(petchain_ABI).at(petchain_Addr);
const contractUser = web3.eth.contract(joinedUser_ABI).at(joineduser_Addr);

export function setDataInContract(_hash, _petId) {
    const fromAddress = getDefaultAccount();
    web3.eth.defaultAccount = fromAddress;

    contract.setPet(_petId, _hash, {
        from: fromAddress,
        gas: 3000000
    });

    contract.getPet(_petId, {
        from: fromAddress,
        gas: 3000000
    });
}
export function getDataFromContract(_petId){
    const fromAddress = getDefaultAccount();
    web3.eth.defaultAccount = fromAddress;

    return contract.getPet(_petId, {
        from: fromAddress,
        gas: 3000000
    });
}

export function getJoinedUser(){
    const fromAddress = getDefaultAccount();
    web3.eth.defaultAccount = fromAddress;
    
    const sesionUser = JSON.parse(sessionStorage.getItem('sessionUser'));
    return contractUser.joinedUser((sesionUser.userName).toString(),{
        from: fromAddress,
        gas: 3000000
    });
}

export function setJoinedUser(){
    const fromAddress = getDefaultAccount();
    web3.eth.defaultAccount = fromAddress;

    const sesionUser = JSON.parse(sessionStorage.getItem('sessionUser'));
    return contractUser.join((sesionUser.name).toString(), (sesionUser.surname).toString(), (sesionUser.userName).toString(), {
        from: fromAddress,
        gas: 3000000
    });
}

function getDefaultAccount() {
    var userData = JSON.parse(localStorage.getItem('users'));
    var sesionUser = JSON.parse(sessionStorage.getItem('sessionUser'));
    
    var userIndex = _.findIndex(userData, function(obj) { 
        return obj.userName == sesionUser.userName; 
    });
    return userData[userIndex].account;
}

export function registerTX() {
    const fromAddress = getDefaultAccount();
    web3.eth.defaultAccount = fromAddress;

    web3.eth.sendTransaction({
        from: '0x7C83b59Ad20b66D34Fd086E63178C9BCD96E123d',
        to:  fromAddress,
        value: 3e18
      })
}