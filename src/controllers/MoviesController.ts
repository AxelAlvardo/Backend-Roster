import type { Request, Response } from 'express'
import Character from '../models/Character';
import Movie from '../models/Movie';

export class MovieController {

    static createMovie = async (req: Request, res: Response) => {
        const {access, title, imageURL} = req.body;

        const movie = new Movie({
            access,
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

    static getMovieById = async (req: Request, res: Response) => {
        const { id } = req.params;
        
        try {
            const movie = await Movie.findById(id).populate('characters').exec();

            if (!movie) {
                return res.status(404).json({ message: 'Película no encontrada' });
            }

            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la película', error });
        }
    }
}