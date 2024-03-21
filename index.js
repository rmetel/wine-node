const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const auth = require("./routes/auth");
const email = require("./routes/email");
const application = require("./routes/application");

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

app.use("/api/auth", auth);

app.use("/api/email", email);

app.use("/api/application", application);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is up and running`);
});
