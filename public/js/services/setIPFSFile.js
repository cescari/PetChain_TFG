const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
//const data = 'ejemplo de ipfs';

export function setIPFSdata (_data){
    ipfs.add(_data, (_error, _hash) => {
        if (_error) {
            return console.log(_error);
        } else {
            return console.log('https://ipfs.infura.io/ipfs/' + _hash);
        }
    });
}