const express = require("express");
const things = require("./things");
const app = express();

app.route("/").get((req, res) => res.send("Hello Express"));
app.use("/things", things);
app.get("/:id", (req, res) => res.send("The id is " + req.params.id))
app.get("/json", (req, res) => {
   res.send({"hi": "hi"})
})

app.listen(3000);