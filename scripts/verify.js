require ('@nomiclabs/hardhat-etherscan')
const hre = require( 'hardhat')

const _initBaseURI='ipfs://bafybeicmircqthslaiwshhiqnlwaf2d3byomgruqy425njrvbz7krc6ocu/'


async function main() {

  await hre.run('verify:verify', {
    address: '0x92ccd40D345B52730837E8a9f9683D284BCdDf89',
    constructorArguments: [_initBaseURI]
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
