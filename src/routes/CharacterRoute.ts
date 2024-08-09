import { Router } from 'express'
import { CharacterController } from '../controllers/CharacterController';
import { param } from 'express-validator'
import { handleInputErrors } from '../middleware/validations';

const router = Router();

router.post('/', CharacterController.createCharacter)

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
