const { Schema, model } = require("../config/db-connection");

const userSchema = Schema({
  full_name: {
    type: String,
    required: true,
  },
  class_id: {
    type: Number,
    required: true,
  },
  learner_id: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 120,
    message: "Age must be between 18 and 120",
  },
});

module.exports = model("User", userSchema);
