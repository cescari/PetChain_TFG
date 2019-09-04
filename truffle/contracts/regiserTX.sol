/********************************************************/
/* File: registerTX.sol                                 */
/* Author: Carlos Escario Bajo                          */
/* Proyecto: TFG UNIR                                   */
/* Date: 20/08/2019                                     */
/* Version: 1.0                                         */
/* Smartcontract de registro para el historial de TX    */
/********************************************************/
pragma solidity ^0.4.24;

contract registerTX {
    struct TX {
        address fromAddr;
        string txHASH;
    }
    mapping ( address => TX ) private txReg;
    function setTX (address _toAddr, address _fromAddr, string _txHASH) public {
        TX storage toReg = txReg[_toAddr];
        toReg.fromAddr = _fromAddr;
        toReg.txHASH = _txHASH;
    }
    function getTX(address _toAddr) public view returns (string) {
        TX memory toReg = txReg[_toAddr];
        return (toReg.txHASH);
    }
}