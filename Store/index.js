const axios = require("axios");
const URL = "http://localhost:3004/data";
const fs = require("fs");
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient("localhost", "5001", { protocol: "http" });

module.exports = {
  solve: ({ data }) => {
    console.log("ME aloy");
    console.log(data);
    const { qid, values } = data;
    switch (qid) {
      case 1: {
        console.log("me 1 madhe aloy");
        // Check if bank balance is above value.

        const { first_name, last_name, balance } = values;
        axios
          .get(`${URL}?first_name=${first_name}&last_name=${last_name}`)
          .then(res => {
            axios.post("http://localhost:8000/respond", {
              qid: qid,
              rid: 0,
              data:
                Number(res.data[0].balance.replace(/[^0-9.-]+/g, "")) >= balance
            });
          })
          .catch(e => {
            console.error(e);
          });
        break;
      }
      case 2: {
        const { first_name, last_name, age } = values;
        axios
          .get(`${URL}?first_name=${first_name}&last_name=${last_name}`)
          .then(res => {
            const dob = res.data[0]["DOB"].toDate("dd/MM/yyyy", "/");
            axios.post("http://localhost:8000/respond", {
              qid: qid,
              rid: 0,
              data: calculateAge(dob) >= age
            });
          });
        break;
      }
      case 3: {
        const { first_name, last_name } = values;
        axios
          .get(`${URL}?first_name=${first_name}&last_name=${last_name}`)
          .then(res => {
            axios.post("http://localhost:8000/respond", {
              qid: qid,
              rid: 1,
              data: res.data[0]["company"]
            });
          });
        break;
      }
      case 4: {
        const { first_name, last_name } = values;
        axios
          .get(`${URL}?first_name=${first_name}&last_name=${last_name}`)
          .then(res => {
            fs.readFile(`Store/dummy.txt`, (err, data) => {
              if (err) {
                console.log(err);
                throw err;
              }
              const buffer = Buffer.from(data);
              ipfs.add(buffer, {}, (err, res) => {
                axios.post("http://localhost:8000/respond", {
                  qid: qid,
                  rid: 2,
                  data: res[0].hash
                });
              });
            });
          });
        break;
      }
      // TODO: Create case 5 which would be used for the demo
    }
  }
};
function calculateAge(birthday) {
  // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
String.prototype.toDate = function(format, delimiter) {
  var date = this;
  var formatedDate = null;
  var formatLowerCase = format.toLowerCase();
  var formatItems = formatLowerCase.split(delimiter);
  var dateItems = date.split(delimiter);
  var monthIndex = formatItems.indexOf("mm");
  var monthNameIndex = formatItems.indexOf("mmm");
  var dayIndex = formatItems.indexOf("dd");
  var yearIndex = formatItems.indexOf("yyyy");
  var d = dateItems[dayIndex];
  if (d < 10) {
    d = "0" + d;
  }
  if (monthIndex > -1) {
    var month = parseInt(dateItems[monthIndex]);
    month -= 1;
    if (month < 10) {
      month = "0" + month;
    }
    formatedDate = new Date(dateItems[yearIndex], month, d);
  } else if (monthNameIndex > -1) {
    var monthName = dateItems[monthNameIndex];
    month = getMonthIndex(monthName);
    if (month < 10) {
      month = "0" + month;
    }
    formatedDate = new Date(dateItems[yearIndex], month, d);
  }
  return formatedDate;
};

function getMonthIndex(name) {
  name = name.toLowerCase();
  if (name == "jan" || name == "january") {
    return 0;
  } else if (name == "feb" || name == "february") {
    return 1;
  } else if (name == "mar" || name == "march") {
    return 2;
  } else if (name == "apr" || name == "april") {
    return 3;
  } else if (name == "may" || name == "may") {
    return 4;
  } else if (name == "jun" || name == "june") {
    return 5;
  } else if (name == "jul" || name == "july") {
    return 6;
  } else if (name == "aug" || name == "august") {
    return 7;
  } else if (name == "sep" || name == "september") {
    return 8;
  } else if (name == "oct" || name == "october") {
    return 9;
  } else if (name == "nov" || name == "november") {
    return 10;
  } else if (name == "dec" || name == "december") {
    return 11;
  }
}

writeData = async data => {
  const hash = await node.files.add(Buffer.from(JSON.stringify(data)));
  console.log(hash);
  return hash[0].hash;
};
