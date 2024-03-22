const router = require("express").Router();
const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");

const sequelize = new Sequelize("wine-db", "root", "wine-db", {
  host: "localhost", // wine-db
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

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username, password } });

  if (user) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
