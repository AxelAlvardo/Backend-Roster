import { Router } from 'express'
import { MovieController } from '../controllers/MoviesController';

const router = Router();

router.post('/', MovieController.createMovie)
router.get('/', MovieController.getAllMovies)
router.get('/:id', MovieController.getMovieById)

export default router;