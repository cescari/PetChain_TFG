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
  ]