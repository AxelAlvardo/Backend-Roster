import {Router} from 'express'
import { CharacterController } from '../controllers/CharacterController';

const router = Router();

router.post('/', CharacterController.createCharacter)
router.get('/', CharacterController.getAllCharacters)


export default router;
