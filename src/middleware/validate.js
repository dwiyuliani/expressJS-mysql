const validateCreateNewUsers = (req, res, next) => {
  // Add your validation logic here
  // Example: Check if the required fields are present in the request body
  
  const { body } = req;
  
  if (!body.name || !body.email || !body.password) {
    return res.status(400).send({
      message: "error",
      serverMessage: "Missing required fields",
    });
  }
  
  next();
};


module.exports = validateCreateNewUsers;