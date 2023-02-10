const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL

const config = {
  title: 'Dapp',
  description: 'minting Dapp',
  contractAddress: '0xe703B7E445dFe32e80C2bb4cb8DFF3D4a12d75ff',
  maxMintAmount_Public: 200,
  maxMintAmount_PreSale:3,
  preSalePrice:0.08,
  publicSalePrice:0.095
}

const onboardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 5, // Goerli
  darkMode: true,
  walletSelect: {
    description:'Plaese select a wallet',
    wallets: [
      { walletName: 'metamask', preferred: true },
      { walletName: 'coinbase', preferred: true },
      {
        walletName: 'walletLink',
        preferred: true,
        rpcUrl: RPC_URL,
        appName: 'Dapp'
      }
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' }
  ]
}

export { config, onboardOptions }
