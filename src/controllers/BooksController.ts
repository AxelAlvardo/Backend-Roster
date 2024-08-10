import type { Request, Response } from 'express'
import Book from '../models/Book';

export class BooksController {

    static createBook = async(req: Request, res: Response)=> {
        const { title, imageURL } = req.body;

        const book = new Book({
            title,
            imageURL,
            characters: []
        });
    
        try {
            await book.save();
            res.send('Libro creada correctamente');
        } catch (error) {
            console.log(error);
            res.status(500).send('Error al crear el libro');
        }
    }


    static getAllBooks = async(req: Request, res: Response)=> {
        try {
            const books = await Book.find().populate('characters').exec();

            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener las películas', error });
        }
    }
}