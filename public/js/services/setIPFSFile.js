const IPFS = require('ipfs-mini');
const ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});
const data = 'ejemplo de ipfs';
ipfs.add(data, (error, hash) =>{
    if(error){
        return console.log(error);
    } else{
        return console.log('https://ipfs.infura.io/ipfs/' + hash);
    }
});