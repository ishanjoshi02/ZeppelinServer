// const ipfs = require("ipfs");
// const node = new ipfs();
// node.on("ready", async () => {
//   console.log("Node is ready");
// });

const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient("localhost", "5001", { protocol: "http" });
module.exports = {
  addFileToIPFS: arrayBuffer => {
    let hash;
    ipfs.add(arrayBuffer, {}, (err, res) => {
      hash = res[0].hash;
    });
    return hash;
  }
};
