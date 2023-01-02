const express = require("express");
const app = express();
const PORT = 8080;
const todoRouter = require("./routes/todo");
const cors = require("cors");
const corsConfig = {
  origin: "http://13.125.72.31:3001",
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", todoRouter);

app.listen(PORT, () => {
  console.log(`http://13.125.72.31:${PORT}`);
});
