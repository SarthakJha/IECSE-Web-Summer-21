const { v4: uuidv4 } = require("uuid");
const generateTodoItem = (title, description) => {
  return {
    title,
    description,
    createdAt: new Date().toISOString(),
    id: uuidv4(),
  };
};
module.exports = {
  generateTodoItem,
};
