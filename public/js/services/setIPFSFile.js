import { Promise, resolve, reject } from 'q';

/*********************************************************/
/* File: setIPFSFile.js                                  */
/* Author: Carlos Escario Bajo                           */
/* Proyecto: TFG UNIR                                    */
/* Date: 01/08/2019                                      */
/* Version: 1.0                                          */
/* Servicio I/O de ficheros a la IPFS               */
/*********************************************************/
const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
//const ipfs = new IPFS({ host: '/ip4/127.0.0.1/tcp/', port: 5001, protocol: 'http' });

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
//https://ipfs.infura.io/ipfs/QmcK1hAc9sYTHJZcr68HxdHLCPMFgSn9QMSSar7j85TFg5

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
