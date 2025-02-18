import { authenticate, isAdmin } from "../middlewares/authMiddleware.js";
import express from "express";
import { createBookValidator } from "../middlewares/joiValidation.js";
import { createBook } from "../controllers/bookControllers.js";
import { getBook } from "../models/books/BookModel.js";

const router = express.Router();

//POST api/v1/books

router.post("/", authenticate, isAdmin, createBookValidator, createBook);

//GET api/v1/books

router.get("/", authenticate, getBook);

export default router;
