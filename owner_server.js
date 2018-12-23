const express = require("express");
const app = express();
const port = 5000 || process.env.PORT;
const Web3 = require("web3");
const OWNER_ADDRESS = "0x44a4c1fcaf21b9251ced63Ac1Aa79De020141Db5";
const truffle_request_data_connect = require("./connection/data_request_app.js");
const identity_connection = require("./IdentityAPI/identity_connection");
//
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
//
bodyParser = require("body-parser");
//
app.use(cors());

// app.use(function(req, res, next) {
//   res.header(
//     "Access-Control-Allow-Origin",
//     "http://localhost:3003",
//     "http://localhost:5000"
//   );
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
// our server instance
const server = http.createServer(app).listen(8001);

// This creates our socket using the instance of the server
const io = socketIO(server);
//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/create", (req, res) => {
  const { uniqueNumber, password } = req.body;
  identity_connection.create({ uniqueNumber, password, res });
  res.end();
});
app.post("/permission", (req, res) => {
  console.log("getting permission...");
  const { qid, values, dataStore } = req.body;
  io.sockets.emit("permission", { qid, values, dataStore });
});
app.get("/getTransactions", (req, res) => {
  truffle_request_data_connect.getTransactions();
  res.end();
});
app.post("/signIn", (req, res) => {
  // console.log(req);
  const { uniqueNumber, password } = req.body;
  console.log(req.body);
  identity_connection.signIn({ uniqueNumber, password, res });
});
app.post("/accepted", (req, res) => {
  console.log(req.body);
  truffle_request_data_connect.acceptRequest(JSON.stringify(req.body));
  res.end();
});
app.post("/denied", (req, res) => {
  console.log(req.body);
  truffle_request_data_connect.denyRequest(JSON.stringify(req.body));
  // io.sockets.emit("permission", { qid, values, dataStore });
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
