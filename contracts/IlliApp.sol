pragma solidity ^0.4.23;

contract IlliApp {
  //address is eth(not sidechain) address
  mapping (address => string) ethAddrToProviderName;
  address[] ethAddresses;
  uint addrCounter;

  event providerAdded(string name, address addrOnEthNetwork, address addrOnSideChain);

  function addProviderName(string memory _name, address _addrOnEthNetwork) public {
    ethAddrToProviderName[_addrOnEthNetwork] = _name;
    //ethAddresses[addrCounter] = _addrOnEthNetwork;
    //addrCounter++;
    ethAddresses.push(_addrOnEthNetwork); 
    addrCounter++;
    emit providerAdded(_name, _addrOnEthNetwork, msg.sender);
  }

  function getProviderName(address _ethAddr) public view returns (string memory) {
    return ethAddrToProviderName[_ethAddr];
  }

  function getAllEthAddresses()  public view returns (address[]){
    return ethAddresses;
  }

  function getTotalAddrCount() public view returns (uint){
    return addrCounter;
  }
}