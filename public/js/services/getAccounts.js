/********************************************************/
/* File: getAccounts.js                                 */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/05/2019                                     */
/* Version: 1.0                                         */
/* Obtiene las cuentas desplegadas en la Blockchain     */
/********************************************************/
import users from '@/data/users.json';

const Web3 = require('web3');

var url = 'http://127.0.0.1:7545';

const web3 = new Web3(new Web3.providers.HttpProvider(url));


web3.eth.getAccounts(function (_error, _result) {
    if (_error != null) { console.log("Couldn not get accounts"); }
    else {
        if (_result.length > 0) {
            for (var i = 0; i < _result.length; i++) {
                users[i]['account'] = _result[i];
            }
            sessionStorage.setItem('sessionAccounts', _result);
            localStorage.setItem('users', JSON.stringify(users));
        }
    }

});