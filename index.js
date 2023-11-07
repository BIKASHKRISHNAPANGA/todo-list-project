const express = require("express");
const app = express();
const port =3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Your routes go here
// Define a variable to store tasks
const tasks = [];

app.get("/", (req, res) => {
  res.render("home", { tasks });
});

app.post("/add", (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.redirect("/");
});

app.post("/edit/:id", (req, res) => {
  const taskId = req.params.id;
  const editedTask = req.body.editedTask;
  tasks[taskId] = editedTask;
  res.redirect("/");
});

app.get("/delete/:id", (req, res) => {
  const taskId = req.params.id;
  tasks.splice(taskId, 1);
  res.redirect("/");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});