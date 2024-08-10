import type { Request, Response } from 'express'
import { getBooksWithCharacters } from '../services/booksService';

export class BooksController {
    static getAllBooks = async(req: Request, res: Response)=> {
        try {
            const books = await getBooksWithCharacters();
            res.json(books);
        } catch (error) {
            res.status(500).json({ message: 'Error al encontrar libros', error });
        }
    }
}