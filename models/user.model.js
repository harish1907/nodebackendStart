const { Schema, model } = require("mongoose");

const testUserSchema = new Schema({
  name: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
});

module.exports = model("TestUser", testUserSchema, "testUsers");
