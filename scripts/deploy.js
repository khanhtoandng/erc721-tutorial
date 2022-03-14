const { ethers } = require('hardhat');

async function main() {
  const NftCollection = await ethers.getContractFactory('NftCollection');
  const nftCollection = await NftCollection.deploy(
    'NFTCOLLECTION',
    'HTKT-test'
  );

  await nftCollection.deployed();

  console.log('Contract deployed successfully to: ', nftCollection.address);

  await nftCollection.mint(
    'https://ipfs.io/ipfs/QmXaxhLwXn3xPkZCzGtohy1htthRe3GFfizoqe6Wnvsi37'
  );

  console.log('NFT minted successfully');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
