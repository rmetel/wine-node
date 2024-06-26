import bcrypt from "bcryptjs";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize("wine-db", "root", "wine-db", {
  host: "localhost", // wine-db
  dialect: "mysql",
});

const Users = sequelize.define("user", {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING,
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("User table created successfully.");
  })
  .catch((error: Error) => {
    console.error("Error creating User table:", error);
  });

const router = Router();

router.post("/register", async (req, res) => {
  const { username, password, role = "user" } = req.body;

  const user = await Users.findOne({ where: { username } });

  if (user) {
    res.status(401).json({ message: "Benutzername bereits vergeben" });
  } else {
    bcrypt.hash(password, 10).then(async (hashedPassword: string) => {
      const user = await Users.create({
        username,
        password: hashedPassword,
        role,
      });
      res.json({
        message: "User successfully created",
        user,
      });
    });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = (await Users.findOne({
    where: { username },
  })) as any;

  if (user) {
    bcrypt.compare(password, user.password).then(function (isValid: boolean) {
      if (isValid) {
        const token = jwt.sign({ username }, process.env.JWT_SECRET!);
        res.json({ message: "Login successful", token });
      } else {
        res.status(401).json({ message: "Invalid password" });
      }
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;
