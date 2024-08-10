import { Router } from "express";
import { SeriesController } from "../controllers/SeriesController";

const router = Router();

router.get('/', SeriesController.getAllSeries);

export default router;