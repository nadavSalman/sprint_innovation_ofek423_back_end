const express = require("express");
const router = express.Router();

const GroupsController = require('../controllers/group-controller');

router.get("/:userID", GroupsController.groups_by_userID);
router.post("/group", GroupsController.create_group);


module.exports = router;