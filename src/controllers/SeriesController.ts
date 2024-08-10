import type { Request, Response } from 'express'
import { getSeriesWithCharacters } from '../services/seriesService';

export class SeriesController {
    static getAllSeries = async (req: Request, res: Response) => {
        try {
            const series = await getSeriesWithCharacters();
            res.json(series);
        } catch (error) {
            res.status(500).json({ message: 'Error al encontrar series', error });
        }
    }
}