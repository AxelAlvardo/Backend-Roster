import { Router } from "express";
import { BooksController } from "../controllers/BooksController";


const router = Router();

router.get('/', BooksController.getAllBooks);

export default router;