var IlliApp = artifacts.require("./IlliApp.sol");

module.exports = function(deployer, network) {
  if (network === 'rinkeby') {
    return
  }

  deployer.deploy(IlliApp);
};
