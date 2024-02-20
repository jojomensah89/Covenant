const verify = require("../helperFunction");

const developmentChains = ["localhost", "hardhat"];
module.exports = async ({ getNamedAccounts, deployments, network }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const proofsVerification = await deploy("ProofsVerification", {
    from: deployer,
    args: [],
    log: true,
  });

  

  //   if (
  //     !developmentChains.includes(network.name) &&
  //     process.env.ETHERSCAN_API_KEY
  //   ) {
  //     await verify(Verificat.address, []);
  //   }
};
module.exports.tags = ["all", "ProofsVerification"];
