var mongo = require("mongodb");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Pets = require("./PetdataSchema.js");
const Users = require("./UserdataSchema.js");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/Pets", {
  dbName: "Pets",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const port = process.env.PORT || 4000;
const host = "localhost";
app.listen(port, () => {
  console.log(`App listening at http://%s:%s`, host, port);
});

// all requests for pets tables

app.get("/Pets", async (req, resp) => {
  const query = {};
  const allPets = await Pets.find(query);
  console.log(allPets);
  resp.send(allPets);
});

app.get("/Pets/:id", async (req, resp) => {
  const id = req.params.id;
  const query = { _id: id };
  const onePets = await Pets.findOne(query);
  console.log(onePets);
  resp.send(onePets);
});

app.post("/Pets/insert", async (req, res) => {
  console.log(req.body);
  const formData = new Pets();

  formData._id = req.body._id;
  formData.Description = req.body.Description;
  formData.Birthday = req.body.Birthday;
  formData.image = req.body.image;
  formData.species = req.body.species;
  formData.Avalible = req.body.Avalible;
  formData.gender = req.body.gender;
  formData.breed = req.body.breed;
  formData.Name = req.body.Name;

  try {
    // await formData.save();
    await Pets.create(formData);
    const messageResponse = { message: `Pets ${p_id} added correctly` };
    res.send(JSON.stringify(messageResponse));
  } catch (err) {
    console.log("Error while adding a new Pets:" + err);
  }
});

app.delete("/Pets/delete", async (req, res) => {
  console.log("Delete :", req.body);
  try {
    const query = { _id: req.body._id };
    await Pets.deleteOne(query);
    const messageResponse = {
      message: `Pets ${req.body._id} deleted correctly`,
    };
    res.send(JSON.stringify(messageResponse));
  } catch (err) {
    console.log("Error while deleting :" + p_id + " " + err);
  }
});

app.put("/Pets/edite/:id", async (req, res) => {
  console.log(req.body);
  const id = req.params.id;
  const query = { _id: id };
  const onePets = await Pets.findOne(query);
  try {
    if (!onePets) {
      const messageResponse = { message: `Pets ${id} does not exits` };
      return res.send(JSON.stringify(messageResponse));
    } else {
      let updatePets = await Pets.findByIdAndUpdate(id, req.body);
      const messageResponse = { message: `Pets ${id} edidted correctly` };
      res.send(JSON.stringify(messageResponse));
    }
  } catch (err) {
    console.log("Error while adding a new Pets:" + err);
  }
});

// all requests for Users tables

app.get("/Users", async (req, resp) => {
  const query = {};
  const allUsers = await Users.find(query);
  console.log(allUsers);
  resp.send(allUsers);
});

app.get("/Users/:id", async (req, resp) => {
  const id = req.params.id;
  const query = { _id: id };
  const oneUsers = await Users.findOne(query);
  console.log(oneUsers);
  resp.send(oneUsers);
});

app.get("/UsersEmail/:email", async (req, resp) => {
  const email = req.params.email;
  const query = { Email: email };
  const oneUsers = await Users.findOne(query);
  console.log(oneUsers);
  resp.send(oneUsers);
});

app.post("/Users/insert", async (req, res) => {
  console.log(req.body);
  const formData = new Users();

  formData._id = req.body._id;
  formData.F_Name = req.body.F_Name;
  formData.L_Name = req.body.L_Name;
  formData.Email = req.body.Email;
  formData.Password = req.body.Password;
  formData.Phone_Number = req.body.Phone_Number;
  formData.Adrress = req.body.Adrress;
  formData.Birthday = req.body.Birthday;
  formData.Pets.push(req.body.Pets);

  try {
    // await formData.save();
    await Users.create(formData);
    const messageResponse = { message: `Users ${p_id} added correctly` };
    res.send(JSON.stringify(messageResponse));
  } catch (err) {
    console.log("Error while adding a new Users:" + err);
  }
});

app.delete("/Users/delete", async (req, res) => {
  console.log("Delete :", req.body);
  try {
    const query = { _id: req.body._id };
    await Users.deleteOne(query);
    const messageResponse = {
      message: `Users ${req.body._id} deleted correctly`,
    };
    res.send(JSON.stringify(messageResponse));
  } catch (err) {
    console.log("Error while deleting :" + p_id + " " + err);
  }
});

app.put("/Users/edite/:id", async (req, res) => {
  console.log(req.body);
  const id = req.params.id;
  const query = { _id: id };
  const oneUsers = await Users.findOne(query);
  try {
    if (!oneUsers) {
      const messageResponse = { message: `Users ${id} does not exits` };
      return res.send(JSON.stringify(messageResponse));
    } else {
      let updateUsers = await Users.findByIdAndUpdate(id, req.body);
      const messageResponse = { message: `Users ${id} edidted correctly` };
      res.send(JSON.stringify(messageResponse));
    }
  } catch (err) {
    console.log("Error while adding a new Users:" + err);
  }
});
