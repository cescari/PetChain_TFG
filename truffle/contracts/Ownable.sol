pragma solidity ^0.4.24;

contract Ownable {
    address private owner;

    constructor() public {
        owner = msg.sender;
    }
    
    modifier isOwner(){
        require( owner == msg.sender);
        _;
    }
}