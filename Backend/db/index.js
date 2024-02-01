const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rayayush47:AxhOWsByFx0icRjR@cluster0.aqvkhv5.mongodb.net/todo"
);

const TodoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todos = mongoose.model("todos", TodoSchema);

module.exports = {
  Todos,
};
