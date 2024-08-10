import { Router } from 'express'
import { CharacterController } from '../controllers/CharacterController';
import { param } from 'express-validator'
import { handleInputErrors } from '../middleware/validations';
import uploadFile from '../middleware/multer';
import upload from '../middleware/multer';

const router = Router();


router.post('/', 
    upload.single('image'),
    CharacterController.createCharacter)

router.get('/', CharacterController.getAllCharacters)

router.get('/:id',
    param('id').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    CharacterController.getCharacterById)

router.put('/:id',
    param('id').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    CharacterController.updateCharacter)

router.delete('/:id',
    param('id').isMongoId().withMessage('ID no valido'),
    handleInputErrors,
    CharacterController.deleteCharacter)

export default router;
