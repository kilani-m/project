const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { registerRules, validator } = require("../middleweares/validator");
const isAuth = require("../middleweares/passport");
const isAdmin = require("../middleweares/isAdmin");
const router = express.Router();
const upload = require("../utils/multer");

//register new user

router.post(
  "/Register",
  
  upload("users").single("file"),
  registerRules(), 
  validator,
  async (req, res) => {
    const { email, password } = req.body;
    try {
      const existUser = await User.findOne({ email });

      if (existUser) {
        return res
          .status(400)
          .send({ msg: "user already exist , please login" });
      }
      else if (req.body.role == "formateur") {
        const url = `${req.protocol}://${req.get("host")}`;
        
        const { file } = req;
        const newUser = new User({ ...req.body });
        const hashedPassword = await bcrypt.hash(password, 10);

        newUser.password = hashedPassword;
        newUser.pic = `${url}/${file.path}`;
        await newUser.save();
        newUser.password = undefined;
        res.send({ user: newUser });
      } else {
        const newUser = new User({ ...req.body });
        const hashedPassword = await bcrypt.hash(password, 10);

        newUser.password = hashedPassword;

        await newUser.save();
        newUser.password = undefined;
        res.send({ user: newUser });
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  }
);

//login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await User.findOne({ email });
    console.log(req.body);
    if (!existUser) {
      return res.status(400).send({ msg: "Not exist" });
    }
    const isMatched = await bcrypt.compare(password, existUser.password);
    if (!isMatched) {
      return res.status(400).send({ msg: "bad password" });
    }
    const payload = { _id: existUser._id };
    const token = await jwt.sign(payload, process.env.privateKey);
    existUser.password = undefined;
    res.send({ user: existUser, token });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

router.get("/current", isAuth(), (req, res) => {
  res.send(req.user);
});
//get all candidat only for superAmin

router.get("/allCandidat", isAuth(), isAdmin, async (req, res) => {
  try {
    const users = await User.find({ role: "candidat" });
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});
//get all formateur only for superAmin

router.get("/allFormateur", isAuth(), isAdmin, async (req, res) => {
  try {
    const users = await User.find({ role: "formateur" });
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

//DELETE ONE user

router.delete("/:id", isAuth(), isAdmin, async (req, res) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    if (!result.deletedCount) {
      return res.status(400).send({ msg: "user already deleted" });
    }
    res.send({ msg: "user successfully deleted" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
