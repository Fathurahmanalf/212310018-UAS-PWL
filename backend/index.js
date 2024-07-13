const express = require("express");
const sequelize = require("./models/index");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.API_PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const userRoute = require("./src/routes/auth");
const usersRouter = require("./src/routes/UserRoute");

app.use("/auth", userRoute);
app.use("/users", userRoute);
app.use("/:userId", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
