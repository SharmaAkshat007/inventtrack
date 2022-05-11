const express = require("express");
const router = express.Router();
const inventory = require("../controllers/inventoryCtrl");
const warehouse = require("../controllers/warehouseCtrl");

// inventory

router.get("/fetchAllInventory", inventory.fetchAllInventory);
router.post("/createInventoryItems", inventory.createInventoryItems);
router.post("/updateInventoryItems", inventory.updateInventoryItems);
router.post("/deleteInventoryItems", inventory.deleteInventoryItems);
router.post("/assignWarehouse", inventory.assignWarehouse);

// warehouse
router.get("/getWarehouseByPinCode/:pinCode", warehouse.getWarehouseByPinCode);
router.post("/createWarehouse", warehouse.createWarehouse);

module.exports = router;
