const create = require("entropy-buffer");
const entropy = require("binary-shannon-entropy");
const EthCrypto = require("eth-crypto");
const Web3 = require("web3");
const Hashes = require("jshashes");
const IdentityApp = require("../connection/identity_app.js");

module.exports = {
  create: ({ uniqueNumber, password }) => {
    // Use sha to hash into one string
    const SHA256 = new Hashes.SHA256();
    const identity = EthCrypto.createIdentity(
      Buffer.from(combineString(uniqueNumber, password))
    );
    IdentityApp.setWeb3(
      new Web3(new Web3.providers.HttpProvider(`http://localhost:${7545}`))
    );
    IdentityApp.setInstance();
    IdentityApp.create(identity);
  },
  signIn: ({ uniqueNumber, password }) => {
    const identity = EthCrypto.createIdentity(
      Buffer.from(combineString(uniqueNumber, password))
    );
    IdentityApp.setWeb3(
      new Web3(new Web3.providers.HttpProvider(`http://localhost:${7545}`))
    );
    IdentityApp.setInstance();
    IdentityApp.signIn(identity);
  }
};

combineString = (str1, str2) => {
  return (
    str1 +
    "_" +
    str2 +
    str1 +
    str2 +
    str1 +
    str2 +
    str1 +
    str2 +
    str1 +
    str2 +
    str2 +
    str1 +
    str2 +
    str1 +
    str2
  );
};