/********************************************************/
/* File: PetChain.sol                                   */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/08/2019                                     */
/* Version: 1.0                                         */
/*Smartcontract de almacenaje de historial de mascotas  */
/********************************************************/

pragma solidity ^0.4.24;

contract PetChain {
    
    struct Petinfo {
        string pet_id;
        string data_hash;
    }
    
    mapping(string => Petinfo) private pet;
    
    function setPet(string _pet_id, string _data_hash) public {
        Petinfo storage petInfo = pet[ _pet_id];
        petInfo.pet_id = _pet_id;
        petInfo.data_hash =_data_hash;
    }
    
    function getPet(string _pet_id) public view returns (string, string) {
        Petinfo memory petInfo = pet[_pet_id];
        
        return (petInfo.pet_id, petInfo.data_hash);
    }
    
}