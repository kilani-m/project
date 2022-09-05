const { populate } = require("../models/User");

module.exports.addUsers= async function (req, res) {
  console.log(req.file)
  const url = `${req.protocol}://${req.get('host')}`;
  console.log(req.file);
  const { file } = req;

    try {
      const existUsers = await Product.findOne({ email: req.body.email });
      if (existUsers) {
        res.status(400).send({ msg: "User exist" });
      } else {
        const newUsers = new User({
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