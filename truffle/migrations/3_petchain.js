const PetChain = artifacts.require("./PetChain.sol");

module.exports = function (deployer) {
    deployer.deploy(PetChain);
};