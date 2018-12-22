const contract = require("truffle-contract");

const RequestDataArtifact = require("../build/contracts/RequestData.json");
const RequestDataContract = contract(RequestDataArtifact);
const axios = require("axios");
const http = require("http");
const socketIO = require("socket.io");

const StoreAPI = require("../Store/index");

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
                const { qid, values, dataStore } = JSON.parse(res.args.data);
                console.log("Request Data Owner" + JSON.stringify(res));
                // console.log(data);
                // send axios request containin the data
                console.log(qid);
                // Send to user
                axios.post("http://localhost:5000/permission", {
                  qid,
                  values,
                  dataStore
                });
                // axios
                //   .post("http://localhost:5000/accepted", {
                //     qid,
                //     values,
                //     dataStore
                //   })
                //   .then(res => console.log(res))
                //   .catch(e => console.error(e));

                // noti
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
                console.log(JSON.parse(res.args.data));

                // TODO: call the function according to the data
                StoreAPI.solve(JSON.parse(res.args.data));
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
    this.instance.requestDataFromOwner(JSON.stringify(data), {
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
  },
  getTransactions: data => {
    console.log("Gettin txs");
    this.instance.getTransactions({
      from: "0x9b99Df0515830fabF1eeF93045239Bd729fdA67C",
      gas: 3000000
    });
  }
};
