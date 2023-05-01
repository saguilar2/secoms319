const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const UserdataSchema = new mongoose.Schema({
  _id: { type: Number },
  F_Name: { type: String, required: true },
  L_Name: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  Phone_Number: { type: String, required: true },
  Adrress: { type: String, required: true },
  Birthday: { type: Date, required: true },
  Pets: [
    {
      type: ObjectId,
      ref: "PetData",
    },
  ],
});

const UserData = mongoose.model("UserData", UserdataSchema);

UserData.find({})
  .populate("PetData")
  .exec((err, result) => {
    if (err) {
      return res.json({ error: err });
    }
    res.json({ result: result });
  });

module.exports = UserData;
