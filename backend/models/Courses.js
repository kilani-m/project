const mongoose = require('mongoose')


const CoursesSchema = new mongoose.Schema({
  courses:  { type: String, uppercase: true, trim: true, required: true },
  former : {type: String,  trim: true, required: true},
  email: { type: String, lowercase: true, required: [ true, 'Add email']},
  date : {type: String , required: [ true, 'Add date']},
  createdOn : {type : Date , default : Date.now},
  ammount: {type: Number , required: [ true, 'Add Ammount']},
  
});

module.exports = Courses = mongoose.model('courses', CoursesSchema);