import type {Request, Response} from 'express'
import Character from '../models/Character';

export class CharacterController {

    static createCharacter = async (req: Request, res: Response)=> {
        
        const character = new Character(req.body);

        try {
            await character.save();
            res.send('Personaje creado correctamente')
        } catch (error) {
            console.log(error);
            
        }
    }

    static getAllCharacters = async (req: Request, res: Response)=> {
        res.send('Todos los personajes');
    }
}