export const petchain_ABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_pet_id",
        "type": "string"
      },
      {
        "name": "_data_hash",
        "type": "string"
      }
    ],
    "name": "setPet",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_pet_id",
        "type": "string"
      }
    ],
    "name": "getPet",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

export const joinedUser_ABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_surname",
        "type": "string"
      },
      {
        "name": "_userName",
        "type": "string"
      }
    ],
    "name": "join",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_userName",
        "type": "string"
      }
    ],
    "name": "joinedUser",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

export const registerTX_ABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_toAddr",
        "type": "address"
      },
      {
        "name": "_txHASH",
        "type": "string"
      }
    ],
    "name": "setTX",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_toAddr",
        "type": "address"
      }
    ],
    "name": "getTX",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];