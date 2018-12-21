const express = require("express");
const app = express();
const port = 8000 || process.env.PORT;
const Web3 = require("web3");
const truffle_request_data_connect = require("./connection/data_request_app.js");
const truffle_response_data_connect = require("./connection/data_response_app.js");
bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/respond", (req, res) => {
  console.log("Got response");
  console.log(req.body);
  truffle_response_data_connect.sendResponse(req.body);
  res.end();
});

app.listen(port, () => {
  truffle_request_data_connect.setWeb3(
    new Web3(new Web3.providers.HttpProvider(`http://localhost:${7545}`))
  );
  truffle_request_data_connect.setInstance({
    account: "0x9b99Df0515830fabF1eeF93045239Bd729fdA67C",
    type: "store"
  });
  truffle_response_data_connect.setWeb3(
    new Web3(new Web3.providers.HttpProvider(`http://localhost:${7545}`))
  );
  truffle_response_data_connect.setInstance();
  console.log("Express Listening at http://localhost:" + port);
});
