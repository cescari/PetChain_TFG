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

const petchain_Addr = '0xe4c40fac187657410e9744ab08070963a5b3697b';
const joineduser_Addr = '0x37d2306340c17ccf986f97677eb86adf32fe1978';
const registerTX_Addr = '0x3dabf759931ba4b5d6693c504448b96df55d3a1b';

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

export function registerTX(_toAddr) {
    web3.eth.defaultAccount = getDefaultAccount();
        console.log(_toAddr)
    web3.eth.sendTransaction({
        from: web3.eth.defaultAccount,
        to:  _toAddr,
        value: 3e18
      })
}