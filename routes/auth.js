const router = require("express").Router();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("wine-db", "root", "wine-db", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("user", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
});

sequelize
  .sync()
  .then(() => {
    console.log("User table created successfully.");
  })
  .catch((error) => {
    console.error("Error creating User table:", error);
  });

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const newUser = await User.create({ username, password });
  res.json(newUser);
});

module.exports = router;
