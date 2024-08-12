import type { Request, Response } from 'express'
import Serie from '../models/Series';

export class SeriesController {

    static createSerie = async (req: Request, res: Response) => {
        const {access, title, imageURL} = req.body;

        const serie = new Serie({
            access,
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

    static getSerieById = async (req: Request, res: Response) => {
        const { id } = req.params;
        
        try {
            const serie = await Serie.findById(id).populate('characters').exec();

            if (!serie) {
                return res.status(404).json({ message: 'Serie no encontrada' });
            }

            res.status(200).json(serie);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener la serie', error });
        }
    }
}