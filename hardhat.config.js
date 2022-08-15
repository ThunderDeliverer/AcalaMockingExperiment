require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  compilers: {
    settings: {
      outputSelection: {
        "*": {
          "*": ["storageLayout"]
        }
      }
    }
  },
  networks: {
    hardhat: {
      forking: {
        // Hardhat requires for forking endpoint to be reachable using HTTPS, so forking local dev network is not an option
        // url: "https://acala-mandala-adapter.api.onfinality.io/public"
        url: "https://tc7-eth.aca-dev.network"
      }
    },
    localhost: {
      url: "127.0.0.1:8545"
    }
  },
  mocha: {
    timeout: 100000000
  },
};
