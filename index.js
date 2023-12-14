const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const email = require("./routes/email");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

dotenv.config();

app.get("/api", (req, res) => {
  res.status(200).send("Welcome");
});

app.use("/api/email", email);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is up and running`);
});
