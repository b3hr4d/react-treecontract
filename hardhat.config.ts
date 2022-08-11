import { config as dotEnvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "hardhat-abi-exporter";

dotEnvConfig();

const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY!; // well known private key
const BINANCE_API_KEY = process.env.BINANCE_API_KEY;
const INFURA_KOVAN = process.env.INFURA_KOVAN;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_KOVAN}`,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_KOVAN}`,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    coverage: {
      url: "http://127.0.0.1:8555",
    },
  },
  typechain: {
    outDir: "./typechain",
    target: "ethers-v5",
  },
  abiExporter: {
    path: "./data/abi",
    clear: true,
    flat: true,
    only: [":ERC20$"],
    spacing: 2,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: BINANCE_API_KEY,
  },
};

export default config;
