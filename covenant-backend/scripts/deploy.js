// /**
//  * Deploy all project smart contracts and libraries
//  */

// export const deployStringsExpanded = async (hre) => {
//   const strings = await (
//     await hre.ethers.getContractFactory("StringsExpanded")
//   ).deploy();
//   await strings.waitForDeployment();

//   return { strings };
// };

// export const deployProofsVerification = async (hre) => {
//   const proofsVerification = await (
//     await hre.ethers.getContractFactory("ProofsVerification")
//   ).deploy();
//   await proofsVerification.waitForDeployment();

//   return { proofsVerification };
// };

// export const deployProofsHelper = async (hre, stringsAddr) => {
//   const proofsHelper = await (
//     await hre.ethers.getContractFactory("ProofsHelper", {
//       libraries: { StringsExpanded: stringsAddr },
//     })
//   ).deploy();
//   await proofsHelper.waitForDeployment();

//   return { proofsHelper };
// };

// export const deployProofsMetadata = async (hre, stringsAddr) => {
//   const proofsMetadata = await (
//     await hre.ethers.getContractFactory("ProofsMetadata", {
//       libraries: { StringsExpanded: stringsAddr },
//     })
//   ).deploy();
//   await proofsMetadata.waitForDeployment();

//   return { proofsMetadata };
// };

// export const deployProofs = async (
//   hre,
//   stringsAddr,
//   proofsVerificationAddr,
//   proofsHelperAddr,
//   proofsMetadataAddr,
//   ownerAddr
// ) => {
//   const proofs = await (
//     await hre.ethers.getContractFactory("Proofs", {
//       libraries: {
//         StringsExpanded: stringsAddr,
//         ProofsVerification: proofsVerificationAddr,
//         ProofsHelper: proofsHelperAddr,
//       },
//     })
//   ).deploy(proofsMetadataAddr, ownerAddr);
//   await proofs.waitForDeployment();

//   return { proofs };
// };

// export const deployAll = async (hre, ownerAddr) => {
//   const { strings } = await deployStringsExpanded(hre);
//   const stringsAddr = await strings.getAddress();
//   const { proofsMetadata } = await deployProofsMetadata(hre, stringsAddr);
//   const { proofsVerification } = await deployProofsVerification(hre);
//   const { proofsHelper } = await deployProofsHelper(hre, stringsAddr);
//   const proofs = await (
//     await hre.ethers.getContractFactory("Proofs", {
//       libraries: {
//         StringsExpanded: await strings.getAddress(),
//         // ProofsVerification: await proofsVerification.getAddress(),
//         // ProofsHelper: await proofsHelper.getAddress(),
//       },
//     })
//   ).deploy(await proofsMetadata.getAddress(), ownerAddr);

//   return { proofs, proofsMetadata, strings, proofsVerification, proofsHelper };
// };
