const verify = require("../helperFunction");
const { deployProofsMetadata } = require("../scripts/deploy");
const { ethers } = require("hardhat");

const developmentChains = ["localhost", "hardhat"];
module.exports = async ({ getNamedAccounts, deployments, network }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const stringExpandedContract = await ethers.getContract(
    "StringsExpanded",
    deployer
  );

  const proofMetadata = await deploy("ProofsMetadata", {
    from: deployer,
    args: [],
    log: true,
    libraries: {
      StringsExpanded: stringExpandedContract.address,
    },
  });

  log("PROOF OF METADATA", proofMetadata.address);
};
module.exports.tags = ["all", "ProofsMetadata"];
