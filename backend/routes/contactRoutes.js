const express = require("express");
const Contact = require("../models/Contact");
const { coursesRules, validator } = require("../middleweares/validator");
const isAuth = require("../middleweares/passport");
const router = express.Router();

//add message
router.post(
  "/Sendmessage",
  coursesRules(),
  validator,
  async function (req, res) {
    try {
      const newMessage = new Contact({
        ...req.body,
      });

      await newMessage.save();
      res.send({ msg: "Message sended" });
    } catch (error) {
      console.log(error);
    }
  }
);

//DELETE ONE Message

router.delete("/:id", async (req, res) => {
  try {
    const result = await Contacts.deleteOne({ _id: req.params.id });
    if (!result.deletedCount) {
      return res.status(400).send({ msg: "Message already deleted" });
    }
    res.send({ msg: "Message successfully deleted" });
  } catch (error) {
    console.log(error);
  }
});

//GET ONE message

router.get("/:id", async (req, res) => {
  try {
    const oneContacts = await Contacts.findOne({ _id: req.params.id });
    res.send(oneContacts);
  } catch (error) {
    console.log(error);
  }
});

//GET all message 

router.get("/AllMessage", async (req, res) => {
  try {
    const allContacts = await Contacts.findOne();
    res.send(allContacts);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
