require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const todoRoute = require("./routes/todolist");

app.use("/", todoRoute);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("TODO LIST");
});

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(port, () => console.log(`Server started at port ${port}`));
