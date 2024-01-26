const usersModel = require("../models/users");

const getAllUser = async (req, res) => {
  try {
    const [data] = await usersModel.getDataUser();
    res.status(200).send({
      message: "succes",
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message: "error",
      serverMessage: error,
    });
  }
};

const createNewUsers = async (req, res,next) => {
  const { body } = req;
  
  try {
    await usersModel.createUser(body);

    res.status(201).send({
      message: "success",
      data: body,
    });
  } catch (error) {
    res.status(500).send({
      message: "error",
      serverMessage: error,
    });
  }
  next();
};


const updateUsers = async (req, res) => {
  const idUser = req.params.id;
  const body = req.body;
  try {
    await usersModel.updateUser(body, idUser);
    res.status(201).send({
      message: "succes",
      data: body,
    });
  } catch (error) {
    res.status(500).send({
      message: "error",
      serverMessage: error,
    });
  }
};

const deleteUsers = async (req, res) => {
  const idUser = req.params.id;
  try {
    await usersModel.deleteUser(idUser);
    res.status(200).send({
      message: "succes",
    });
  } catch (error) {
    res.status(500).send({
      message: "error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUser,
  createNewUsers, 
  updateUsers,
  deleteUsers,
};
