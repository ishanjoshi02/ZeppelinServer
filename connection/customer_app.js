const contract = require("truffle-contract");

const CustomerArtifact = require("../build/contracts/Customer.json");
const CustomerContract = contract(CustomerArtifact);

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
  signUp: (account, name, username, password, callback) => {
    let cust;
    CustomerContract.setProvider(this.web3.currentProvider);
    CustomerContract.deployed().then(instance => {
      return instance.signup
        .call(name, username, password, { from: account })
        .then(res => callback(res.value));
    });
  },
  logIn: (account, password, callback) => {
    CustomerContract.setProvider(this.web3.currentProvider);
    CustomerContract.deployed().then(instance => {
      return instance.login
        .call(password, { from: account })
        .then(res => callback(res.value));
    });
  }
};
