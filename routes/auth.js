const router = require("express").Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("wine-db", "root", "wine-db", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("user", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  role: Sequelize.STRING,
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("User table created successfully.");
  })
  .catch((error) => {
    console.error("Error creating User table:", error);
  });

router.post("/register", async (req, res) => {
  const { username, password, role = "user" } = req.body;
  const user = await User.create({ username, password, role });
  res.json({
    message: "User successfully created",
    user,
  });
});

module.exports = router;
