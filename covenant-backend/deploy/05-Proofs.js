const verify = require("../helperFunction");

const { ethers, run } = require("hardhat");

const developmentChains = ["localhost", "hardhat"];

module.exports = async ({ getNamedAccounts, deployments, network }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  const stringExpandedContract = await ethers.getContract(
    "StringsExpanded",
    deployer
  );
  const proofVerificationContract = await ethers.getContract(
    "ProofsVerification",
    deployer
  );

  const proofHelperContract = await ethers.getContract(
    "ProofsHelper",
    deployer
  );

  const proofMetadataContract = await ethers.getContract(
    "ProofsMetadata",
    deployer
  );

  const proof = await deploy("Proofs", {
    from: deployer,
    args: [proofMetadataContract.address, deployer],
    log: true,
    libraries: {
      StringsExpanded: stringExpandedContract.address,
      ProofsVerification: proofVerificationContract.address,
      ProofsHelper: proofHelperContract.address,
      ProofsMetadata: proofMetadataContract.address,
    },
  });
  const verifyAll = async (
    hre,
    strings,
    proofsMetadata,
    proofsVerification,
    proofsHelper,
    proofs
  ) => {
    // StringsExpanded
    await run("verify:verify", {
      address: strings,
    });
    // ProofsMetadata
    await run("verify:verify", {
      address: proofsMetadata,
      libraries: { StringsExpanded: strings },
    });
    // ProofsVerification
    await run("verify:verify", {
      address: proofsVerification,
    });
    // ProofsHelper
    await run("verify:verify", {
      address: proofsHelper,
      libraries: { StringsExpanded: strings },
    });
    // Proofs
    await run("verify:verify", {
      address: proofs,
      libraries: {
        StringsExpanded: strings,
        ProofsVerification: proofsVerification,
        ProofsHelper: proofsHelper,
      },
      constructorArguments: [proofsMetadata],
    });
  };
  await verifyAll(
    stringExpandedContract.address,
    proofMetadataContract.address,
    proofVerificationContract.address,
    proofHelperContract.address,
    proof.address
  );
  log("PROOF ITSELF", proof.address);
};

module.exports.tags = ["all", "Proofs"];
