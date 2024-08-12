import { Router } from "express";
import { BooksController } from "../controllers/BooksController";


const router = Router();

/**
 * @swagger
 * components: 
 *      schemas:
 *          Books:
 *              type: object
 *              properties:
 *                  access:
 *                      type: string
 *                      description: The access key books
 *                      example: movies
 *                  title:
 *                      type: string
 *                      description: The name of the book
 *                      example: Avengers Endgame
 *                  image:
 *                      type: string
 *                      description: The URL image of the books
 *                      example: https://upload.wikimedia.org/wikipedia/en/0/0d/1984_poster.jpg
 *                  characters:
 *                      type: ObjectId
 *                      description: the arrangement of characters belonging to the book
 *                      example: [{Object whit character}]
 */

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create one book
 *     tags: 
 *       - Books
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
 *                 example: "books"
 *               title:
 *                 type: string
 *                 example: "1984"
 *               imageURL:
 *                 type: string
 *                 example: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
 *     responses:
 *       200:
 *         description: Successfully created book
 *       500: 
 *          description: Bad Response server
 */


router.post('/', BooksController.createBook);


/**
 * @swagger
 * /api/books:
 *      get:
 *          summary: Get list of the books
 *          tags: 
 *              - Books
 *          description: Return a list of books
 *          responses: 
 *              200:
 *                  description: Successful response
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Books'
 *              500: 
 *                  description: Bad response
 */


router.get('/', BooksController.getAllBooks);

/**
 * @swagger
 * /api/books/{id}:
 *      get:
 *          summary: Get a book by ID
 *          tags: 
 *              - Books
 *          description: Return a book based on its unique ID
 *          parameters:
 *            - in: path
 *              name: id
 *              description: The ID of the book to retrieve
 *              required: true
 *              schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: Successful response
 *                  content:
 *                      application/json:
 *                          schema: 
 *                              $ref: '#/components/schemas/Books'
 *              404:
 *                  description: Not found
 *              500:
 *                  description: Bad request server
 * 
 */

router.get('/:id', BooksController.getBookById);

export default router;