// Allows us to use ES6 in our migrations and tests.
//require("babel-register");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gas: 4700000,
      from: "0x25d24a4151714A3925A6061974a8017b7e01DEC5"
    }
  }
};
