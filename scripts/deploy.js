const hre = require("hardhat");
const ethers = require("ethers");
// import { utils } from "ethers";

async function main() {
  // const [randomPerson, owner] = await hre.ethers.getSigners();
  const ercContractFactory = await hre.ethers.getContractFactory("MyToken");
  const ercContract = await ercContractFactory.deploy(
    "1000000000000",
    "David",
    "DAV",
    "0x71bE63f3384f5fb98995898A86B02Fb2426c5788"
  );
  await ercContract.deployed();

  const supply = await ercContract.totalSupply();
  const formatedSupply = ethers.utils.formatUnits(supply);
  console.log("Initial Supply: ", formatedSupply);

  const address = ercContract.address;
  console.log("Contract Address at: ", address);

  const owner = await ercContract.getOwner();
  console.log("Owner of the contract is: ", owner);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// owner: "0x9da800B4585907bef289003d3a5aD43753a8Cca8", initialSupply: "10000", _name:"David", _symbol:
