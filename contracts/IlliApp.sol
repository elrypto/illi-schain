pragma solidity ^0.4.23;

contract IlliApp {
  //address is eth(not sidechain) address
  mapping (address => string) ethAddrToProviderName;

  event providerAdded(string name, address addrOnEthNetwork, address addrOnSideChain);

  function addProviderName(string memory _name, address _addrOnEthNetwork) public {
    ethAddrToProviderName[_addrOnEthNetwork] = _name;
    emit providerAdded(_name, _addrOnEthNetwork, msg.sender);
  }

  function getProviderName(address _ethAddr) public view returns (string memory) {
    return ethAddrToProviderName[_ethAddr];
  }
}