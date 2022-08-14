const {ethers} = require ("hardhat");
require ("dotenv").config({path: ".env"});

async function main() {
  const metadataURL = "ipfs://QmQBHarz2WFczTjz5GnhjHrbUPDnB48W5BM2v2h6HbE1rZ/";
  const NFTcontract = await ethers.getContractFactory("NFT");

  const deploy = await NFTcontract.deploy(metadataURL);
  await deploy.deployed();

  console.log("NFT contract Deployed to Address", deploy.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});