const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: [ true, 'Add name'] },
  message: {type : String, required: [ true, 'Add message'] },
  email: { type: String, lowercase: true, required: [ true, 'Add email']},
  subject: { type: String , required: [ true, 'Add subject']},
  
  
});

module.exports = Contact = mongoose.model("contact", contactSchema);