const express = require("express");
const router = express.Router();

const UsersController = require('../controllers/user-controller');

router.get("/:phonenumber", UsersController.user_phone_number);
router.post("/user", UsersController.user_create);

module.exports = router;