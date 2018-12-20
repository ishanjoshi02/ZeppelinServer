const contract = require("truffle-contract");

const RequestDataArtifact = require("../build/contracts/RequestData.json");
const RequestDataContract = contract(RequestDataArtifact);

module.exports = {
  setInstance: ({ account, type }) => {
    RequestDataContract.deployed()
      .then(instance => {
        this.instance = instance;
      })
      .then(() => {
        switch (type) {
          case "owner": {
            this.instance.requestDataOwner({}, (err, res) => {
              if (err) {
                console.error(err);
              } else {
                // console.log(res.args.data);
                console.log("Hi there");
                // send axios request containin the data
              }
            });
            break;
          }
          case "consumer": {
            this.instance.requestDenied({}, (err, res) => {
              if (err) {
                console.error(err);
              } else {
                console.log("Denied");
              }
            });
            break;
          }
          case "store": {
            this.instance.requestDataStore({}, (err, res) => {
              if (err) {
                console.error(err);
              } else {
                console.log("Got acceptance from user");
              }
            });
          }
        }
      });
  },
  setWeb3: web3 => {
    this.web3 = web3;
    RequestDataContract.setProvider(this.web3.currentProvider);
  },
  request: data => {
    this.instance.requestDataFromOwner(data, {
      from: "0x9b99Df0515830fabF1eeF93045239Bd729fdA67C",
      gas: 3000000
    });
  },
  denyRequest: data => {
    console.log("Denying");
    this.instance.acceptRequestAndForward(false, data, {
      from: "0x9b99Df0515830fabF1eeF93045239Bd729fdA67C",
      gas: 3000000
    });
  },
  acceptRequest: data => {
    console.log("Accepting Request with data " + data);
    this.instance.acceptRequestAndForward(true, data, {
      from: "0x9b99Df0515830fabF1eeF93045239Bd729fdA67C",
      gas: 3000000
    });
  }
};
