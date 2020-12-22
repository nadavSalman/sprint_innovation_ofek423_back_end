const express = require("express");
const router = express.Router();

const ItemsController = require('../controllers/item-controller');

router.get("/:listID", ItemsController.item_get);
router.post("/", ItemsController.item_by_list);


module.exports = router; 
