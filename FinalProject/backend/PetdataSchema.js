const mongoose = require("mongoose");
const PetdataSchema = new mongoose.Schema({
  _id: { type: Number },
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  image: { type: String, required: true },
  Birthday: { type: Date, required: true },
  species: { type: String, required: true },
  breed: { type: String, required: true },
  gender: { type: String, required: true },
  Avalible: { type: Boolean, default: true },
});
const PetData = mongoose.model("PetData", PetdataSchema);
module.exports = PetData;
