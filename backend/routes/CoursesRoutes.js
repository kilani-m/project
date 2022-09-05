const express = require("express");
const Courses = require("../models/Courses");
const { coursesRules, validator } = require("../middleweares/validator");
const isAuth = require("../middleweares/passport");
const isAdmin = require("../middleweares/isAdmin");
const isFormateur= require("../middleweares/isFormateur")
const router = express.Router();





//Add courses
router.post("/AddCourses",coursesRules(), validator, isFormateur, async function (req, res) {
      try {
        const existCourses = await Courses.findOne({ courses: req.body.courses });
        if (existCourses) {
          res.status(400).send({ msg: "Courses exist" });
        } else {
          const newCourses = new Courses({
            ...req.body
          });
  
          await newCourses.save();
          res.send({ msg: "Courses added" });
        }
      } catch (error) {
        console.log(error);
      }
    });


//DELETE ONE Courses


router.delete("/:id", async (req, res) => {
  try {
    const result = await Courses.deleteOne({ _id: req.params.id });
    if (!result.deletedCount) {
      return res.status(400).send({ msg: "Course already deleted" });
    }
    res.send({ msg: "Course successfully deleted" });
  } catch (error) {
    console.log(error);
  }
});

//UPDATE ONE Courses
router.put("/:id", async (req, res) => {
  try {
    const result = await Courses.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    if (!result.modifiedCount) 
    {return res.status(400).send({msg:"no things to update"});}
      res.send({msg:"Courses update"})
  } catch (error) {
    console.log(error);
  }
});

//Get all courses
router.get("/allCourses", isAuth(), isAdmin, async (req, res) => {
  try {
    const courses = await Courses.find();
    res.send(courses);
  } catch (error) {
    console.log(error);
  }
});

router.get("/allCoursesF", isAuth(), isFormateur, async (req, res) => {
  try {
    const courses = await Courses.find({ former:req.body.former });
    res.send(courses);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const oneCourses = await Courses.findOne({ _id: req.params.id });
    res.send(oneCourses);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;