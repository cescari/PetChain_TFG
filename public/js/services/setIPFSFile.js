import { Promise, resolve } from 'q';

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
//const ipfs = new IPFS({ host: '127.0.0.1', port: 5001, protocol: 'http' });

export function setIPFSdata (_data){
    ipfs.add(_data, (_error, _hash) => {
        if (_error) {
            return console.log(_error);
        } else {
            return console.log('https://ipfs.infura.io/ipfs/' + _hash);
        }
    });
}
//https://ipfs.infura.io/ipfs/QmNwprouJRYqQhn7ApviCAukeef2KZmWB5u8XGKCcMU877
export function getIPFSdata(){
    return new Promise( 
        resolve => {ipfs.cat('QmNwprouJRYqQhn7ApviCAukeef2KZmWB5u8XGKCcMU877', (_error, _result) => {
            if (_error) {
                resolve(_error);
            } else {
                resolve(_result);
            }
        });
    });
}

