import mongooseMatch from "./PetdataSchema.js";
const mongoose = require("mongoose");

const UserdataSchema = new mongoose.Schema({
  _id: { type: Number },
  F_Name: { type: String, required: true },
  L_Name: { type: String, required: true },
  Email: { type: String, required: true },
  Phone_Number: { type: String, required: true },
  Adrress: { type: String, required: true },
  Birthday: { type: Date, required: true },
  Pets: [PetData],
});
const UserData = mongoose.model("UserData", UserdataSchema);
module.exports = UserData;
