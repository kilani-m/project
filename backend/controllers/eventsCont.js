const { populate } = require("../models/Events");

module.exports.addEvents= async function (req, res) {
  console.log(req.file)
  const url = `${req.protocol}://${req.get('host')}`;
  console.log(req.file);
  const { file } = req;

    try {
      const existEvents = await Product.findOne({ name: req.body.name });
      if (existEvents) {
        res.status(400).send({ msg: "product exist" });
      } else {
        const newEvents = new Product({
          ...req.body,user:req.user._id
        });
    newEvents.pic = `${url}/${file.path}`;

        await newEvents.save();
        res.send({ msg: "product added" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  exports.getALL=async function (req, res) {
    // console.log(req.query.price)
    try {
      // const price = req.query.price || 0
      const allEvents = await Product.find({
        $and: [
          { price: { $gte: req.query.price || 0 } },
          { name: { $regex: req.query.name || "" } },
        ],
      }).populate("user","fullName");
      res.send({ allEvents });
    } catch (error) {
      console.log(error);
    }
  }