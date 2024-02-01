const express = require("express");
//const { createTodo, updateTodo } = require("./types");
const { Todos } = require("./db");
const cors = require("cors");
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.post("/todo", async (req, res) => {
  await Todos.create({
    title: req.body.title,
    description: req.body.description,
    completed: false,
  });
  res.json({
    msg: "Todo Created Successfuly",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await Todos.find({});
  res.json({
    todos,
  });
});

app.put("/completed", (req, res) => {
  Todos.update(
    {
      _id: req.body._id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "todo updated successfuly",
  });
});

app.listen(port, () => {
  console.log(`App runnng on ${port}`);
});
