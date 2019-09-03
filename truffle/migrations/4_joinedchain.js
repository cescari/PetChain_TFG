const JoinChain = artifacts.require("./JoinedUser.sol");

module.exports = function (deployer) {
    deployer.deploy(JoinChain);
};