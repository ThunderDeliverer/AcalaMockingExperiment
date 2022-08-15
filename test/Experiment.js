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

      const fakeName = "Fake Acala";
      console.log(fakeName);

      const myFake = await smock.fake(instance, { address: ACA });
      console.log(myFake.address);

      myFake.name.returns(fakeName);

      const mockedName = await instance.name();
      console.log(mockedName);

      const bln = await ethers.provider.getBlockNumber();
      console.log(bln);
    });
  });
});
