const mongoose = require("mongoose");
const PetdataSchema = new mongoose.Schema({
  _id: { type: Number },
  Name: { type: String, required: true },
  Description: { type: String, required: true },
  Image: { type: String, required: true },
  Birthday: { type: Date, required: true },
  Species: { type: String, required: true },
  Breed: { type: String, required: true },
  Gender: { type: String, required: true },
  Avalible: { type: Boolean, default: true },
});
const PetData = mongoose.model("PetData", PetdataSchema);
module.exports = PetData;
