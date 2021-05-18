import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-deploy'
import 'hardhat-deploy-ethers'
import { HardhatUserConfig, task } from 'hardhat/config'
import { deployerAccounts } from './keys/deployer'

task('accounts', 'Prints the list of accounts', async (args, hre) => {
    const accounts = await hre.ethers.getSigners()

    for (const account of accounts) {
        console.log(account.address)
    }
})

const config: HardhatUserConfig = {
    solidity: {
        version: '0.7.1',
        settings: {
            optimizer: {
                enabled: false,
            },
        },
    },
    networks: {
        hardhat: {
            // forking: {
            //     url: 'https://eth-mainnet.alchemyapi.io/v2/PVyuKzTstUnizfSwYzQ2FDhzkIWSuXrt',
            // },
        },
        matic: {
            url: 'https://rpc-mainnet.matic.network',
            chainId: 137,
            accounts: deployerAccounts,
        },
        mumbai: {
            url: 'https://rpc-mumbai.matic.today',
            chainId: 80001,
            accounts: deployerAccounts,
        },
    },
    namedAccounts: {
        deployer: 0,
    },
}
module.exports = config
