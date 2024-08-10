import type { Request, Response } from 'express'
import { getMoviesWithCharacters } from '../services/moviesServices';
import Character from '../models/Character';
import Movie from '../models/Movie';

export class MovieController {

    static createMovie = async (req: Request, res: Response) => {
        const { title, imageURL } = req.body;

        const movie = new Movie({
            title,
            imageURL,
            characters: []
        });
    
        try {
            await movie.save();
            res.send('Película creada correctamente');
        } catch (error) {
            console.log(error);
            res.status(500).send('Error al crear la película');
        }
    }


    static getAllMovies = async(req: Request, res: Response)=> {
        try {
            const movies = await Movie.find().populate('characters').exec();

            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener las películas', error });
        }
    }
}