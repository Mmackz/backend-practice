const express = require("express");
const things = require("./things");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));
app.route("/").get((req, res) => res.send("Hello Express"));
app.use("/things", things);
app.get("/:id([0-9]{5})", (req, res) => res.send("The id is " + req.params.id))
app.get("/json", (req, res) => {
   res.send({"hi": "hi"})
})
app.get("/first_template", (req, res) => res.render("first_view"));
app.get("/dynamic_view", (req, res) => {
   res.render("dynamic", {
      name: "TutorialsPoint",
      url: "https://tutorialspoint.com"
   });
});
app.get("/components", (req, res) => {
   res.render("content")
})
app.get("/image_test", (req, res) => {
   res.render("testimage")
})
app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);