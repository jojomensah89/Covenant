const verify = require("../helperFunction");
const { deployProofsHelper } = require("../scripts/deploy");
const { ethers } = require("hardhat");

const developmentChains = ["localhost", "hardhat"];
module.exports = async ({ getNamedAccounts, deployments, network }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const stringExpandedContract = await ethers.getContract(
    "StringsExpanded",
    deployer
  );

  const proofHelpers = await deploy("ProofsHelper", {
    from: deployer,
    args: [],
    log: true,
    libraries: {
      StringsExpanded: stringExpandedContract.address,
    },
  });

  log("PROOF OF HELPERS", proofHelpers.address);
};
module.exports.tags = ["all", "ProofsHelpers"];
