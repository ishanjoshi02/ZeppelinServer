const express = require("express");

const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, name: "abc" },
    { id: 2, name: "xyz" },
    { id: 3, name: "uio" },
    { id: 4, name: "uio" }
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
