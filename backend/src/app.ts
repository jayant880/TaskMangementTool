import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", timeStamp: new Date().toISOString() });
});

app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(3000, () => {
  console.log("server is running in port 3000");
});

export default app;
