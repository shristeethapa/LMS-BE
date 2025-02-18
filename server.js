import express from "express";
import cors from "cors";
import { connectMongoDB } from "./src/config/mongoConfig.js";
import morgan from "morgan";
import { errorHandler } from "./src/middlewares/errorHandler.js";

import authRouter from "./src/routers/authRouter.js";
import bookRouter from "./src/routers/bookRouter.js";

const PORT = 9001;
const app = express();

//log middleware

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

app.use(cors());
app.use(express.json());

// server status
app.get("/", (req, res) => {
  return res.json({
    message: "Server is live",
  });
});

// auth route

app.use("/api/v1/auth", authRouter);

//
app.use("/api/v1/books", bookRouter);

app.use(errorHandler);

//database connection
connectMongoDB()
  .then(() => {
    //db connection successful
    console.log("connected to Database");

    // start server
    app.listen(PORT, (error) => {
      error
        ? console.log(error)
        : console.log(`Server running ar http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    //db connection error
    console.log("Error connecting to DB");
  });
