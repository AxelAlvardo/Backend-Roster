import type { Request, Response } from 'express'
import { getMoviesWithCharacters } from '../services/moviesServices';

export class MovieController {
    static getAllMovies = async(req: Request, res: Response)=> {
        try {
            const movies = await getMoviesWithCharacters();
            res.json(movies);
        } catch (error) {
            res.status(500).json({ message: 'Error al encontrar peliculas', error });
        }
    }
}