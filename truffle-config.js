require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const { MNEMONIC, INFURA_API_KEY } = process.env;
const kovanUrl = `https://kovan.infura.io/v3/${INFURA_API_KEY}`;
const mainnetUrl = `https://mainnet.infura.io/v3/${INFURA_API_KEY}`;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    mainnet: {
      provider: () => new HDWalletProvider(MNEMONIC, mainnetUrl),
      network_id: 1,
    },
    kovan: {
      provider: () => new HDWalletProvider(MNEMONIC, kovanUrl),
      network_id: 42,
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      version: "pragma",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
