import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import auth from "./routes/auth";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

dotenv.config();

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("Welcome");
});

app.use("/api/auth", auth);

// app.use("/api/email", email);

// app.use("/api/application", application);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is up and running`);
});
