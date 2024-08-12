import { Router } from 'express'
import { MovieController } from '../controllers/MoviesController';

const router = Router();

/**
 * @swagger
 * components: 
 *      schemas:
 *          Movies:
 *              type: object
 *              properties:
 *                  access:
 *                      type: string
 *                      description: The access key movie
 *                      example: movies
 *                  title:
 *                      type: string
 *                      description: The name of the movie
 *                      example: Avengers Endgame
 *                  image:
 *                      type: string
 *                      description: The URL image of the movie
 *                      example: https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg
 *                  characters:
 *                      type: ObjectId
 *                      description: the arrangement of characters belonging to the movie
 *                      example: [{Object whit character}]
 */


/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Create one movie
 *     tags: 
 *       - Movies
 *     description: Return a new record in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               access:
 *                 type: string
 *                 example: "movies"
 *               title:
 *                 type: string
 *                 example: "Avengers: Endgame"
 *               imageURL:
 *                 type: string
 *                 example: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
 *     responses:
 *       200:
 *         description: Successfully created movie
 *       500: 
 *          description: Bad Response server
 */


router.post('/', MovieController.createMovie)

/**
 * @swagger
 * /api/movies:
 *      get:
 *          summary: Get list of the movies
 *          tags: 
 *              - Movies
 *          description: Return a list of movies
 *          responses: 
 *              200:
 *                  description: Successful response
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Movies'
 *              500: 
 *                  description: Bad response
 */

router.get('/', MovieController.getAllMovies)

/**
 * @swagger
 * /api/movies/{id}:
 *      get:
 *          summary: Get a movies by ID
 *          tags: 
 *              - Movies
 *          description: Return a movie based on its unique ID
 *          parameters:
 *            - in: path
 *              name: id
 *              description: The ID of the movie to retrieve
 *              required: true
 *              schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: Successful response
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              $ref: '#/components/schemas/Movies'
 *              404:
 *                  description: Not found
 *              500:
 *                  description: Bad request server
 * 
 */
router.get('/:id', MovieController.getMovieById)

export default router;