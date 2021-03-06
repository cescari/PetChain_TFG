/********************************************************/
/* File: JoinedUser.sol                                 */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 01/09/2019                                     */
/* Version: 1.0                                         */
/* Smartcontract que almacena al usuario la primera      */
/* vez que entra en la aplicacion                        */
/********************************************************/
pragma solidity ^0.4.24;

contract JoinedUser {
    struct Userinfo {
        string name;
        string surName;
        string userName;
    }

    mapping (string => Userinfo) private users;
    mapping (string => bool) private joinedusers;

    function join(string _name, string _surname, string _userName) public returns (bool) {
        require(!joinedUser(_userName), "Usuario registrado en la Blockchain");
        Userinfo storage joined = users[_userName];
        joined.name = _name;
        joined.surName = _surname;
        joined.userName = _userName;
        joinedusers[_userName] = true;
        return joinedUser(_userName);
    }

    function joinedUser(string _userName) public view returns (bool) {
        return joinedusers[_userName];
    }
}