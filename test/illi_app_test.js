const IlliApp = artifacts.require("./IlliApp.sol");

const testServiceName = "best windex cleaners";
const testServiceName2 = "mighty scriptkiddies";


contract("EchoApp", accounts => {

  const SCHAIN_ACCT = accounts[0];
  const ETH_ACCT = accounts[1];
  const ETH_ACCT2 = accounts[2];
   

  it("...should create a seviceProvider and then get the name", async () => {
    const illiInstance = await IlliApp.deployed();
    const tx  = await illiInstance.addProviderName(testServiceName, ETH_ACCT, {from: SCHAIN_ACCT});
    let retval = await illiInstance.getProviderName(ETH_ACCT);

    assert.equal (tx.logs[0].args.name, testServiceName, "not blockchain tx value expected for test provider created");
    assert.equal(retval, testServiceName, "created provider name should match")
  });


  it("...should return back correct counts, and all addresses", async () => {
    const illiInstance = await IlliApp.deployed();
    let total = await illiInstance.getTotalAddrCount();
    assert.equal(total, 1, "expecting 1 addr to exist");
    const tx  = await illiInstance.addProviderName(testServiceName2, ETH_ACCT2, {from: SCHAIN_ACCT});
    total = await illiInstance.getTotalAddrCount();
    assert.equal(total, 2, "expecting 2 addrs to exist");

    let addressArray = await illiInstance.getAllEthAddresses();
    assert.equal(ETH_ACCT, addressArray[0], "expecting addr" + ETH_ACCT);
    assert.equal(ETH_ACCT2, addressArray[1], "expecting addr" + ETH_ACCT2);
    });


});
/*
  it("...should follow the index that was created", async () => {
    const echoInstance = await EchoApp.deployed();

    let count = await echoInstance.followCount(INDEX_OWNER);
    assert.equal(0, count, 'should be no followers at this stage');

    await echoInstance.follow(INDEX_OWNER, FOLLOWER_ONE);
    count = await echoInstance.followCount(INDEX_OWNER);
    assert.equal(1, count, 'should be 1 follower, that we just created, at this stage');
  });


  it("...add another follower and get both back", async () => {
    const echoInstance = await EchoApp.deployed();

    let count = await echoInstance.followCount(INDEX_OWNER);
    assert.equal(1, count, 'should be 1 followers at this stage');

    await echoInstance.follow(INDEX_OWNER, FOLLOWER_TWO);
    count = await echoInstance.followCount(INDEX_OWNER);
    assert.equal(2, count, 'should be 2 follower, that we just created, at this stage');

    let totalFollowers = await echoInstance.getTotalFollowers();
    console.log("totalFollowers;", totalFollowers);

    let allFollowers = await echoInstance.getAllFollowers();
    console.log("allFollowers", allFollowers);

    let followerIds = await echoInstance.allFollowersOfAnIndex(INDEX_OWNER);
    for (let i in followerIds){
      console.log(i, followerIds[i]); 
      //assert.equal(followerIds[i], 0, "expect first item to have id of 0");
      //assert.equal(followerIds[i], 1, "expect second item to have id of 1");
    }

  });


});




*/

