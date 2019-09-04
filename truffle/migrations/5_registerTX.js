const registerTX = artifacts.require("./registerTX.sol");

module.exports = function (deployer) {
    deployer.deploy(registerTX);
};