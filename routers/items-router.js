const express = require("express");
const router = express.Router();

const ItemsController = require('../controllers/item-controller');

router.get("/:listID", ItemsController.item_by_list);
router.post("/", ItemsController.item_create);


module.exports = router; 
