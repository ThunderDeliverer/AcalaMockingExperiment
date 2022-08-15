const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

const { smock } = require("@defi-wonderland/smock");
const { ACA } = require("@acala-network/contracts/utils/MandalaAddress");
const { Contract } = require("ethers");

const TokenContract = require("@acala-network/contracts/build/contracts/Token.json");

describe("Experiment", function () {
  let deployer;
  let instance;

  beforeEach(async function () {
    [deployer] = await ethers.getSigners();
    instance = new Contract(ACA, TokenContract.abi, deployer);
  });

  describe("Mocking", function () {
    it("Should allow to mock to the same address as the already deployed smart contract", async function () {
      const originalAddress = instance.address;
      console.log(originalAddress);

      // This prepares the value to be returned by a mocked call
      const fakeName = "Fake Acala";
      console.log(fakeName);

      // This instantiates a mocked smart contract from an already instantiated one at a specified address
      const myFake = await smock.fake(instance, { address: ACA });
      console.log(myFake.address);

      myFake.name.returns(fakeName);

      // This showcases that calling an instatiated smart contract that is being overwritten by mocked one, returns the mocked value
      const mockedName = await instance.name();
      console.log(mockedName);

      // Check that the chain was forked from a recent state
      const bln = await ethers.provider.getBlockNumber();
      console.log(bln);
    });
  });
});
