import express from "express";
import cors from "cors";

const PORT = 9001;
const app = express();

app.use(cors());
app.use(express.json());

// health check
app.get("/", (req, res) => {
  return res.json({
    message: "It's Live",
  });
});

// start server
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running ar http://localhost:${PORT}`);
});
