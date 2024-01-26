const express = require("express");
const router = express.Router();
const userController = require("../controller/users.js");
const middlewareValidate = require("../middleware/validate");


router.get("/", userController.getAllUser);
router.post("/", middlewareValidate, userController.createNewUsers);
router.patch("/:id", userController.updateUsers);
router.delete("/:id", userController.deleteUsers);

module.exports = router;
