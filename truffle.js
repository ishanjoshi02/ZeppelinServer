// Allows us to use ES6 in our migrations and tests.
<<<<<<< HEAD
// require("babel-register");
=======
//require("babel-register");
>>>>>>> fea39f88976c919033a74975d23c993c3e4e532f

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
