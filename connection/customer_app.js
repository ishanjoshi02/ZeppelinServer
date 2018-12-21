const contract = require("truffle-contract");

const CustomerArtifact = require("../build/contracts/Customer.json");
const CustomerContract = contract(CustomerArtifact);

const ResponseArtifact = require("../build/contracts/ResponseChain.json");
const ResponseContract = contract(ResponseArtifact);

module.exports = {
  start: callback => {
    CustomerContract.setProvider(this.web3.currentProvider);

    this.web3.eth.getAccounts((err, accs) => {
      if (err != null) {
        console.log("There was an error fetching your accounts.");
        return;
      }
      if (accs.length == 0) {
        console.log(
          "Couldn't get any accounts! Make sure your Ethereum client is configured correctly."
        );
        return;
      }
      this.accounts = accs;
      this.account = this.account[9];
    });
  },
  setInstance: () => {
    CustomerContract.deployed().then(instance => {
      this.instance = instance;
    });
    ResponseContract.deployed().then(inst => {
      inst.responseSent({}, (err, res) => {
        if (err) {
          console.error(err);
        } else {
          try {
            let values = {};
            values.qid = res.args.qid.toNumber();
            values.rid = res.args.rid.toNumber();
            switch (values.rid) {
              case 0: {
                values.result = JSON.parse(res.args.result);
                console.log(values);
                break;
              }
            }
            // axios post
            // TODO: axios request with this data
          } catch (e) {}
        }
      });
    });
  },
  setWeb3: web3 => {
    this.web3 = web3;
    CustomerContract.setProvider(this.web3.currentProvider);
    ResponseContract.setProvider(this.web3.currentProvider);
  },
  signUp: (account, name, username, password) => {
    this.instance
      .signup(name, username, password, { from: account, gas: 470000 })
      .then(res => console.log(res))
      .catch(e => console.log(e));
  },
  logIn: (account, password, callback) => {
    this.instance
      .login(password, { from: account, gas: 470000 })
      .then(res => console.log(res));
  },
  getUserCount: () => {
    this.instance.getUserCount.call().then(res => console.log(res.toNumber()));
  }
};
