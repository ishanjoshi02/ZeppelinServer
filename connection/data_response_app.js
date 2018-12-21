const contract = require("truffle-contract");

const ResponseDataArtifact = require("../build/contracts/ResponseChain.json");
const ResponseDataContract = contract(ResponseDataArtifact);

module.exports = {
  setInstance: () => {
    ResponseDataContract.deployed().then(instance => {
      this.instance = instance;
    });
  },
  sendResponse: ({ data, qid, rid }) => {
    this.instance.sendResponse(qid, rid, JSON.stringify(data), {
      from: "0x9b99Df0515830fabF1eeF93045239Bd729fdA67C",
      gas: 3000000
    });
    console.log("sent response");
  },
  setWeb3: web3 => {
    this.web3 = web3;
    ResponseDataContract.setProvider(this.web3.currentProvider);
  }
};
