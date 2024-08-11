import { Router } from "express";
import { BooksController } from "../controllers/BooksController";


const router = Router();

router.post('/', BooksController.createBook);
router.get('/', BooksController.getAllBooks);
router.get('/:id', BooksController.getBookById);

export default router;