const express = require("express");
const router = express.Router();

const ListsController = require('../controllers/list-controller');

router.get("/:groupID", ListsController.lists_by_groupID);
router.post("/list", ListsController.create_list);

module.exports = router;