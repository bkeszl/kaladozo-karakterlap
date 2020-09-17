const express = require("express");
const userService = require("./Services/userService");
const encryptService = require("./Services/encryptService");
const emailService = require("./Services/emailService");
const characterService = require("./Services/characterService.js");
const weaponService = require("./Services/weaponService");

const randomstring = require("randomstring");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("routing yay");
});

router.post("/user/register", async (req, res) => {
  let user = await userService.validateUser(req.body);
  if (user.code === 200) {
    let verificationId = randomstring.generate(9);
    try {
      userService.createUser({
        username: req.body.username,
        password: await encryptService.encryptPassword(req.body.password),
        email: req.body.email,
        verified: false,
        verificationId: verificationId,
      });
    } catch (error) {
      res.status(503).json({ status: error });
    }
    res.status(200).json({ status: user.status });
    emailService.sendVerificationEmail(req.body.email, verificationId);
  } else {
    res.status(user.code).json({ status: user.status });
  }
});

router.get("/verification/:verificationId", async (req, res) => {
  let info = await userService.verifyUser(req.params.verificationId);
  res.status(info.code).json(info.status);
});

router.post("/login", async (req, res) => {
  let login = await userService.loginUser({
    username: req.body.username,
    password: req.body.password,
  });
  res.status(login.code).json({ status: login.status });
});

router.post("/weapon", async (req, res) => {
  let weapon = await weaponService.createWeapon({
    name: req.body.name,
    trial: req.body.trial,
    damage: req.body.damage,
    notes: req.body.notes,
    image: req.body.image,
  });
  res.status(weapon.code).json({ status: weapon.status });
});

router.post("/character", async (req, res) => {
  let characterCreator = await characterService.createCharacter(req.body);
  res.status(characterCreator.code).json(characterCreator.status);
});

module.exports = router;
