const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/OnlineAppointmentSheduler");

const userSchema = new mongoose.Schema({
  fullName: String,
  service: String,
  date: Date,
});

const User = mongoose.model("onlineappointments", userSchema);

app.post("/insert", async (req, res) => {
  const { fullName, service, date } = req.body;
  const newUser = new User({ fullName, service, date });
  await newUser.save();
  res.send("User data saved successfully!");
});

app.get("/appointments", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    console.error("Error fetching all users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
