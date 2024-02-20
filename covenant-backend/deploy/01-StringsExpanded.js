const verify = require("../helperFunction");

const developmentChains = ["localhost", "hardhat"];
module.exports = async ({ getNamedAccounts, deployments, network }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const stringsExpanded = await deploy("StringsExpanded", {
    from: deployer,
    args: [],
    log: true,
  });

//   if (!developmentChains.includes(network.name)) {
//     await verify(stringsExpanded.address, []);
//     log("VERFiFIEEEEEDDDDDDDDDDDDDDDDDDDDDDDDD");
//   }
};
module.exports.tags = ["all", "StringsExpanded"];
