import { Router } from 'express'
import { CharacterController } from '../controllers/CharacterController';
import { param } from 'express-validator'
import { handleInputErrors } from '../middleware/validations';
import uploadFile from '../middleware/multer';
import upload from '../middleware/multer';

const router = Router();

/**
 * @swagger
 * components: 
 *      schemas:
 *          Characters:
 *              type: object
 *              properties:
 *                  image:
 *                      type: string
 *                      description: The URL of the character's image
 *                      example: https://example.com/image.jpg
 *                  firstName:
 *                      type: string
 *                      description: The first name of the character
 *                      example: John
 *                  lastName:
 *                      type: string
 *                      description: The last name of the character
 *                      example: Doe
 *                  age:
 *                      type: integer
 *                      description: The age of the character
 *                      example: 35
 *                  sex:
 *                      type: string
 *                      enum: 
 *                          - Hombre
 *                          - Mujer
 *                          - Otro
 *                      description: The sex of the character
 *                      example: Hombre
 *                  gender:
 *                      type: string
 *                      description: The gender identity of the character
 *                      example: Male
 *                  height:
 *                      type: number
 *                      description: The height of the character in centimeters
 *                      example: 180
 *                  weight:
 *                      type: number
 *                      description: The weight of the character in kilograms
 *                      example: 75
 *                  description:
 *                      type: string
 *                      description: A brief description of the character
 *                      example: A brave warrior with a mysterious past.
 *                  actorOrVoice:
 *                      type: string
 *                      description: The name of the actor or voice actor who portrays the character (optional)
 *                      example: Chris Hemsworth
 *                  mediaTitle:
 *                      type: string
 *                      description: The title of the media (book, movie, or series) the character belongs to
 *                      example: Avengers Endgame
 *                  mediaType:
 *                      type: string
 *                      enum: 
 *                          - Libro
 *                          - Película
 *                          - Serie
 *                      description: The type of media the character is from
 *                      example: Película
 *                  movieActor:
 *                      type: string
 *                      description: The name of the actor if the media type is a movie (optional)
 *                      example: Robert Downey Jr.
 *                  bookAuthor:
 *                      type: string
 *                      description: The name of the author if the media type is a book (optional)
 *                      example: J.K. Rowling
 */


/**
 * @swagger
 * /api/characters:
 *   post:
 *     summary: Create one character
 *     tags: 
 *       - Characters
 *     description: Return a new character record in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 example: "https://example.com/image.jpg"
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               age:
 *                 type: integer
 *                 example: 35
 *               sex:
 *                 type: string
 *                 enum: 
 *                   - Hombre
 *                   - Mujer
 *                   - Otro
 *                 example: "Hombre"
 *               gender:
 *                 type: string
 *                 example: "Male"
 *               height:
 *                 type: number
 *                 example: 180
 *               weight:
 *                 type: number
 *                 example: 75
 *               description:
 *                 type: string
 *                 example: "A brave warrior with a mysterious past."
 *               actorOrVoice:
 *                 type: string
 *                 example: "Chris Hemsworth"
 *               mediaTitle:
 *                 type: string
 *                 example: "Avengers: Endgame"
 *               mediaType:
 *                 type: string
 *                 enum: 
 *                   - Libro
 *                   - Película
 *                   - Serie
 *                 example: "Película"
 *               movieActor:
 *                 type: string
 *                 example: "Robert Downey Jr."
 *               bookAuthor:
 *                 type: string
 *                 example: "J.K. Rowling"
 *     responses:
 *       200:
 *         description: Successfully created character
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Character'
 *       500: 
 *         description: Bad Response server
 */

router.post('/', 
    upload.single('image'),
    CharacterController.createCharacter)

/**
 * @swagger
 * /api/characters:
 *   get:
 *     summary: Get list of characters
 *     tags: 
 *       - Characters
 *     description: Return a list of characters
 *     responses:
 *       200:
 *         description: Successfully retrieved list of characters
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Character'
 *       500:
 *         description: Bad response
 */


router.get('/', CharacterController.getAllCharacters)

/**
 * @swagger
 * /api/characters/{id}:
 *   get:
 *     summary: Get a character by ID
 *     tags: 
 *       - Characters
 *     description: Return a character based on its unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the character to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved character
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Character'
 *       404:
 *         description: Character not found
 *       500:
 *         description: Server error
 */


router.get('/:id',
    param('id').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    CharacterController.getCharacterById)

/**
 * @swagger
 * /api/characters/{id}:
 *   put:
 *     summary: Update a character by ID
 *     tags: 
 *       - Characters
 *     description: Update the details of a character based on its unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the character to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 example: "https://example.com/image.jpg"
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               age:
 *                 type: integer
 *                 example: 35
 *               sex:
 *                 type: string
 *                 enum: 
 *                   - Hombre
 *                   - Mujer
 *                   - Otro
 *                 example: "Hombre"
 *               gender:
 *                 type: string
 *                 example: "Male"
 *               height:
 *                 type: number
 *                 example: 180
 *               weight:
 *                 type: number
 *                 example: 75
 *               description:
 *                 type: string
 *                 example: "A brave warrior with a mysterious past."
 *               actorOrVoice:
 *                 type: string
 *                 example: "Chris Hemsworth"
 *               mediaTitle:
 *                 type: string
 *                 example: "Avengers Endgame"
 *               mediaType:
 *                 type: string
 *                 enum: 
 *                   - Libro
 *                   - Película
 *                   - Serie
 *                 example: "Película"
 *               movieActor:
 *                 type: string
 *                 example: "Robert Downey Jr."
 *               bookAuthor:
 *                 type: string
 *                 example: "J.K. Rowling"
 *     responses:
 *       200:
 *         description: Successfully updated character
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Character'
 *       404:
 *         description: Character not found
 *       500:
 *         description: Server error
 */


router.put('/:id',
    param('id').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    CharacterController.updateCharacter)

/**
 * @swagger
 * /api/characters/{id}:
 *   delete:
 *     summary: Delete a character by ID
 *     tags: 
 *       - Characters
 *     description: Delete a character based on its unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the character to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully deleted character
 *       404:
 *         description: Character not found
 *       500:
 *         description: Server error
 */


router.delete('/:id',
    param('id').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    CharacterController.deleteCharacter)

export default router;
