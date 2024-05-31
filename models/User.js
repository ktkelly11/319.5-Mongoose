const { Schema, model } = require("../config/db-connection");

const userSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    min: 5,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 120,
    message: "Age must be between 18 and 120",
  },
  isCool: Boolean,
  skills: [String],
  pets: [
    {
      name: String,
      petType: String,
      color: String,
      age: Number,
      isCute: Boolean,
    },
  ],
  whatever: String,
});

// Arrow functions do not support the "this keyword"

// Instance Schema method
userSchema.methods.logUserInfo = function () {
  console.log(
    `I am ${this.age} years old and I am ${this.isCool ? "" : "not"} cool`
  );
};

// Static Schema methods
userSchema.statics.findOver21 = function () {
  this.find({ age: { $gte: 21 } });
};

module.exports = model("User", userSchema);