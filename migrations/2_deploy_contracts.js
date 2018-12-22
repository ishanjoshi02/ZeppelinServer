// var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MetaCoin = artifacts.require("./MetaCoin.sol");

// module.exports = function(deployer) {
//   deployer.deploy(ConvertLib);
//   deployer.link(ConvertLib, MetaCoin);
//   deployer.deploy(MetaCoin);
// };

let Customer = artifacts.require("./Customer.sol");
let RequestData = artifacts.require("./RequestData.sol");
let IdentityContract = artifacts.require("./Identity.sol");
let ResponseChain = artifacts.require("./ResponseChain.sol");
module.exports = deployer => {
  deployer.deploy(Customer);
  deployer.deploy(IdentityContract);
  deployer.deploy(RequestData);
  deployer.deploy(ResponseChain);
};
