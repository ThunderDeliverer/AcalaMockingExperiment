# Sample Acala fork & mock example

This project demonstrates a basic Hardhat forking of Acala and subsequent mocking of the predeployed smart contracts in tests.

To run the example use the following commands:

```shell
yarn
yarn test
```

In order to successfully fork the network, you have to provide the forkking `url` to the [`hardhat.config.js`](./hardhat.config.js:18).

In order to replicate the mocking please refer to the ["Example.js"](./test/Experiment.js).