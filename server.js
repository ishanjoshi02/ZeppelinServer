const express = require("express");

const app = express();
const port = 3000 || process.env.PORT;
const Web3 = require("web3");
const truffle_customer_connect = require("./connection/customer_app.js");
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

app.get("/usercount", (req, res) => {
  truffle_customer_connect.getUserCount();
});

app.listen(port, () => {
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  truffle_customer_connect.setWeb3(
    new Web3(new Web3.providers.HttpProvider(`http://localhost:${7545}`))
  );
  truffle_customer_connect.setInstance();
  console.log("Express Listening at http://localhost:" + port);
});
