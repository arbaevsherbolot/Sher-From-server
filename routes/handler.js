require("dotenv").config();

const express = require("express");
const router = express.Router();

const fs = require("fs");

const WriteEventLog = require("../WriteEventLog");

router.post("/sendData", async (req, res) => {
  let { name, email, phone } = req.body;
  WriteEventLog(name, email, phone);
});

router.get("/replay", (req, res) => {
  const getUserData = JSON.parse(
    fs.readFileSync("./database/namesHistory.json")
  );

  const userIndex = 0;

  const username = `${getUserData.users[userIndex].userName}`;
  const email = `${getUserData.users[userIndex].userEmail}`;
  const phone = `${getUserData.users[userIndex].userPhone}`;
  const message = "The data is correct!";

  const userValid = () => {
    if (username === "Sherbolot Arbaev") {
      return "Admin";
    } else {
      return username;
    }
  };

  res.json({
    // user: `Welcome ${userValid()}`,
    // email: `Email: ${email}`,
    // phone: `Phone: ${phone}`,
    message: `${message}`,
  });
});

module.exports = router;
