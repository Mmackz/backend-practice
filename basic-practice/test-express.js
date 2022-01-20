const express = require("express");
const square = require("./squares");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
   console.log(`App listening on port ${port} \n 4x4 square area: ${square.area(4)}`)
);
