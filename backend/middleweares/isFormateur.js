const isFormateur = (req, res, next) => {
    if (req.user.role == "formateur") {
      next();
    } else {
      res.status(401).send({ msg: "you are not auth/aut" });
    }
    
    
  };
  
  module.exports=isFormateur