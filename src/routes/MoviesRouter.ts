import { Router } from 'express'
import { param } from 'express-validator'
import { handleInputErrors } from '../middleware/validations';
import { MovieController } from '../controllers/MoviesController';


const router = Router();

router.get('/', MovieController.getAllMovies)

export default router;