const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;
const Web3 = require("web3");
const OWNER_ADDRESS = "0x44a4c1fcaf21b9251ced63Ac1Aa79De020141Db5";
const truffle_request_data_connect = require("./connection/data_request_app.js");
bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/accepted", (req, res) => {
  console.log(req.body);
  truffle_request_data_connect.acceptRequest(JSON.stringify(req.body));
  res.end();
});
app.post("/denied", (req, res) => {
  console.log(req.body);
  truffle_request_data_connect.denyRequest(JSON.stringify(req.body));
  res.end();
});
app.listen(port, () => {
  truffle_request_data_connect.setWeb3(
    new Web3(new Web3.providers.HttpProvider(`http://localhost:${7545}`))
  );
  truffle_request_data_connect.setInstance({
    account: OWNER_ADDRESS,
    type: "owner"
  });
  console.log("Express Listening at http://localhost:" + port);
});
