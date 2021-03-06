const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const GANACHE_PORT = 7545;
const CONSUMER_ADDRESS = "0x051a6f09bda7D219f3cD53cC3Aede30D3308EA61";
const Web3 = require("web3");
const identity_connection = require("./IdentityAPI/identity_connection");
const truffle_customer_connect = require("./connection/customer_app.js");
const truffle_request_data_connect = require("./connection/data_request_app.js");
const truffle_response_data_connect = require("./connection/data_response_app");
bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.post("/signup", (req, res) => {
  const { account, name, username, password } = req.body;
  truffle_customer_connect.signUp(account, name, username, password);
  res.send("Signed Up");
});
app.post("/login", (req, res) => {
  const { account, password } = req.body;
  truffle_customer_connect.logIn(account, password, val => {
    res.send(val);
  });
});
app.post("/requestData", (req, res) => {
  console.log(req.body);
  truffle_request_data_connect.request(req.body);
  res.end();
});

app.get("/usercount", (req, res) => {
  truffle_customer_connect.getUserCount();
  res.end();
});
app.post("/getAddress", (req, res) => {
  // console.log(req);
  identity_connection.getEthAddress(req.body.uniqueNumber);
});
app.listen(port, () => {
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  truffle_customer_connect.setWeb3(
    new Web3(new Web3.providers.HttpProvider(`http://localhost:${7545}`))
  );
  truffle_customer_connect.setInstance();
  truffle_request_data_connect.setWeb3(
    new Web3(new Web3.providers.HttpProvider(`http://localhost:${7545}`))
  );
  truffle_request_data_connect.setInstance({
    account: CONSUMER_ADDRESS,
    type: "consumer"
  });
  truffle_response_data_connect.setWeb3(
    new Web3(new Web3.providers.HttpProvider(`http://localhost:${7545}`))
  );
  truffle_response_data_connect.setInstance();
  console.log("Express Listening at http://localhost:" + port);
});
