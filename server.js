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
  // console.log(req.body);
  console.log(req.body);
  truffle_customer_connect.signUp();
  res.send("ok");
});

app.listen(port, () => {
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  truffle_customer_connect.web3 = new Web3(
    new Web3.providers.HttpProvider(`http://localhost:${port}`)
  );
  console.log("Express Listening at http://localhost:" + port);
});
