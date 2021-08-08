const { generateTodoItem } = require("../models/todolist");

//List storing all todo items
var items = [];

//Create a todo item
const createItem = (req, res) => {
  try {
    const { title, description } = req.body;
    const item = generateTodoItem(title, description);
    items.push(item);
    return res.status(200).json({
      item,
      message: "Item Added Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.toString(),
    });
  }
};

//List all the items
const fetchItems = (req, res) => {
  try {
    return res.status(200).json({
      length: items.length,
      items,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.toString(),
    });
  }
};

//Update a specific item
const updateItem = (req, res) => {
  try {
    const index = items.findIndex((item) => item.id == req.params.id);
    if (index == -1) {
      res.status(404).json({
        message: "Item Not Found",
      });
    }
    const { title, description } = req.body;
    items[index].title = title;
    items[index].description = description;
    return res.status(200).json({
      item: items[index],
      message: "Item Updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.toString(),
    });
  }
};

//Delete an item
const deleteItem = (req, res) => {
  try {
    const index = items.findIndex((item) => item.id == req.params.id);
    if (index == -1) {
      return res.status(404).json({
        message: "Item Not Found",
      });
    }
    items.splice(index, 1);
    return res.status(200).json({
      length: items.length,
      items,
      message: "Item Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.toString(),
    });
  }
};

//Get specific item
const getSpecificItem = (req, res) => {
  try {
    const index = items.findIndex((item) => item.id == req.query.id);
    if (index == -1) {
      return res.status(404).json({
        message: "Item Not Found",
      });
    }
    return res.status(200).json({
      item: items[index],
      message: "Item Found",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.toString(),
    });
  }
};

module.exports = {
  createItem,
  fetchItems,
  updateItem,
  deleteItem,
  getSpecificItem,
};
