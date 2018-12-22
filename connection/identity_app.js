const contract = require("truffle-contract");

const IdentityArtifact = require("../build/contracts/Identity.json");
const IdentityContract = contract(IdentityArtifact);

module.exports = {
  setInstance: () => {
    IdentityContract.deployed().then(instance => {
      this.instance = instance;
    });
  },
  setWeb3: web3 => {
    this.web3 = web3;
    IdentityContract.setProvider(this.web3.currentProvider);
  },
  create: ({ address, publicKey, privateKey }) => {
    IdentityContract.deployed().then(instance => {
      instance
        .createAccount(address, privateKey, publicKey, {
          from: "0x9b99Df0515830fabF1eeF93045239Bd729fdA67C",
          gas: 3000000
        })
        .then(res => console.log(res));
    });
  },
  signIn: ({ address, publicKey, privateKey }) => {
    IdentityContract.deployed().then(instance => {
      instance
        .signIn(address, privateKey, publicKey, {
          from: "0x9b99Df0515830fabF1eeF93045239Bd729fdA67C",
          gas: 3000000
        })
        .then(res => console.log(res));
    });
  }
};
