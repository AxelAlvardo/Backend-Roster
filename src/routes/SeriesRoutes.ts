import { Router } from "express";
import { SeriesController } from "../controllers/SeriesController";

const router = Router();

router.post('/', SeriesController.createSerie);
router.get('/', SeriesController.getAllSeries);
router.get('/:id', SeriesController.getSerieById);

export default router;