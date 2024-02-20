const { ethers, run } = require("hardhat");

const verifyAll = async (
  strings,
  proofsMetadata,
  proofsVerification,
  proofsHelper,
  proofs
) => {
  // StringsExpanded
  await run("verify:verify", {
    address: strings,
    network: "scrollSepolia",
  });
  // ProofsMetadata
  await run("verify:verify", {
    address: proofsMetadata,
    libraries: { StringsExpanded: strings },
    network: "scrollSepolia",
  });
  // ProofsVerification
  await run("verify:verify", {
    address: proofsVerification,
    network: "scrollSepolia",
  });
  // ProofsHelper
  await run("verify:verify", {
    address: proofsHelper,
    libraries: { StringsExpanded: strings },
    network: "scrollSepolia",
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
    network: "scrollSepolia",
  });
};
module.exports = verifyAll;
