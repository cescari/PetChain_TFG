/*********************************************************/
/* File: setIPFSFile.js                                  */
/* Author: Carlos Escario Bajo                           */
/* Proyecto: TFG UNIR                                    */
/* Date: 01/08/2019                                      */
/* Version: 1.0                                          */
/* Servicio I/O de ficheros a la IPFS               */
/*********************************************************/
import { Promise, resolve, reject } from 'q';
var ipfsClient = require('ipfs-http-client')
var ipfs = ipfsClient('localhost', '5001', { protocol: 'http' });

/* Envia el JSON a la IPFS */
export function setIPFSdata(_data) {
    return new Promise((resolve, reject) => {
        ipfs.add(_data, (_error, _hash) => {
            if (_error) {
                reject(_error);
            } else {
                resolve(_hash);
            }
        });
    });
}
/* Busca el fichero en la IPFS */
export function getIPFSdata(_hash) {
    return new Promise((resolve, reject) => {
        ipfs.cat(_hash, (_error, _result) => {
            if (_error) {
                reject('No existe el fichero');
            } else {
                resolve(_result);
            }
        });
    });
}
