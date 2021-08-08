const express = require("express");
const {
  createItem,
  fetchItems,
  updateItem,
  deleteItem,
  getSpecificItem,
} = require("../controllers/todolist");

const router = express.Router();

//Get All Items
router.get("/items", fetchItems);

//Get Specific Item
router.get("/item", getSpecificItem);

//Create a new item
router.post("/item", createItem);

//Update a specific item
router.patch("/item/:id", updateItem);

//Delete an item
router.delete("/item/:id", deleteItem);

module.exports = router;
