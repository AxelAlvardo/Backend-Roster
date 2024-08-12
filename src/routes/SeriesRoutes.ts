import { Router } from "express";
import { SeriesController } from "../controllers/SeriesController";

const router = Router();

/**
 * @swagger
 * components: 
 *      schemas:
 *          Series:
 *              type: object
 *              properties:
 *                  access:
 *                      type: string
 *                      description: The access key serie
 *                      example: movies
 *                  title:
 *                      type: string
 *                      description: The name of the serie
 *                      example: Stranger Things
 *                  image:
 *                      type: string
 *                      description: The URL image of the book
 *                      example: https://upload.wikimedia.org/wikipedia/en/0/0d/Stranger_Things_poster.jpg
 *                  characters:
 *                      type: ObjectId
 *                      description: the arrangement of characters belonging to the serie
 *                      example: [{Object whit character}]
 */


/**
 * @swagger
 * /api/series:
 *   post:
 *     summary: Create one serie
 *     tags: 
 *       - Series
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
 *                 example: "serie"
 *               title:
 *                 type: string
 *                 example: "Stranger Things"
 *               imageURL:
 *                 type: string
 *                 example: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
 *     responses:
 *       200:
 *         description: Successfully created serie
 *       500: 
 *          description: Bad Response server
 */



router.post('/', SeriesController.createSerie);

/**
 * @swagger
 * /api/series:
 *      get:
 *          summary: Get list of the series
 *          tags: 
 *              - Series
 *          description: Return a list of series
 *          responses: 
 *              200:
 *                  description: Successful response
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Series'
 *              500: 
 *                  description: Bad response
 */


router.get('/', SeriesController.getAllSeries);

/**
 * @swagger
 * /api/series/{id}:
 *      get:
 *          summary: Get a series by ID
 *          tags: 
 *              - Series
 *          description: Return a series based on its unique ID
 *          parameters:
 *            - in: path
 *              name: id
 *              description: The ID of the serie to retrieve
 *              required: true
 *              schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: Successful response
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              $ref: '#/components/schemas/Series'
 *              404:
 *                  description: Not found
 *              500:
 *                  description: Bad request server
 * 
 */
router.get('/:id', SeriesController.getSerieById);

export default router;