const { ethers } = require('hardhat');

async function main() {
  const NftCollection = await ethers.getContractFactory('CR7');
  const nftCollection = await NftCollection.deploy('CR7LOGO', 'CR7');

  await nftCollection.deployed();

  console.log('Contract deployed successfully to: ', nftCollection.address);

  await nftCollection.mint(
    'https://ipfs.io/ipfs/QmfXsEDr8pxFRDA2nUC9UF82aYASN6Sj7gWgpKm2j42KAw'
  );

  console.log('NFT minted successfully');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
