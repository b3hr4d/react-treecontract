import { config as dotEnvConfig } from 'dotenv'
import { HardhatUserConfig } from 'hardhat/config'

import '@nomicfoundation/hardhat-toolbox'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@typechain/hardhat'
import 'hardhat-abi-exporter'
import 'hardhat-watcher'

dotEnvConfig()

const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY! // well known private key
const BINANCE_API_KEY = process.env.BINANCE_API_KEY
const INFURA_KOVAN = process.env.INFURA_KOVAN

const config: HardhatUserConfig = {
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
      accounts: [
        '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
        '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d',
        '0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a',
      ],
    },
    testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    mainnet: {
      url: 'https://bsc-dataseed.binance.org/',
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
      url: 'http://127.0.0.1:8555',
    },
  },
  watcher: {
    deploy: {
      tasks: [
        'clean',
        { command: 'run', params: { script: './scripts/deploy.ts' } },
        // {
        //   command: 'test',
        //   params: { noCompile: true, testFiles: ['testfile.ts'] },
        // },
      ],
      files: ['./contracts'],
      ignoredFiles: ['**/.vscode'],
      verbose: true,
      clearOnStart: true,
      start: 'echo Running task now..',
    },
  },
  typechain: {
    outDir: './frontend/typechain',
    target: 'ethers-v5',
  },
  abiExporter: [
    {
      path: './frontend/contracts',
      clear: true,
      only: ['UserData.sol'],
      rename: (_: string, contractName: string) =>
        `${contractName}/${contractName}`,
      runOnCompile: true,
      pretty: false,
    },
    {
      path: './frontend/contracts',
      format: 'minimal',
      clear: true,
      only: ['UserData.sol'],
      rename: (_: string, contractName: string) =>
        `${contractName}/${contractName}.min`,
      runOnCompile: true,
      pretty: false,
    },
  ],
  solidity: {
    compilers: [
      {
        version: '0.8.9',
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
}

export default config
