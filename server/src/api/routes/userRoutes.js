const express = require("express");

const { postRegister } = require("../controller/userController");

const router = express.Router();

router.post("/register", postRegister);

module.exports = router;
