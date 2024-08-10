import type { Request, Response } from 'express'
import Serie from '../models/Series';

export class SeriesController {

    static createSerie = async (req: Request, res: Response) => {
        const { title, imageURL } = req.body;

        const serie = new Serie({
            title,
            imageURL,
            characters: []
        });
    
        try {
            await serie.save();
            res.send('Serie creada correctamente');
        } catch (error) {
            console.log(error);
            res.status(500).send('Error al crear la serie');
        }
    }

    static getAllSeries = async (req: Request, res: Response) => {
        try {
            const series = await Serie.find().populate('characters').exec();

            res.status(200).json(series);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener las películas', error });
        }
    }
}