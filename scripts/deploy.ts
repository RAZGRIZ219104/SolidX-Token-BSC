import { ethers } from "hardhat";

async function main() {
  // const lock = await ethers.deployContract("Lock", []);

  // await lock.waitForDeployment();

  // console.log("SolidX deployed on BSC, ", lock.getAddress);

  const exampleContract = await ethers.deployContract("SolidX");
  await exampleContract.waitForDeployment();
  console.log(
    "SolidX deployed to address:",
    await exampleContract.getAddress()
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
