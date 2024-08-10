import { Router } from 'express'
import { MovieController } from '../controllers/MoviesController';

const router = Router();

router.get('/', MovieController.getAllMovies)

export default router;