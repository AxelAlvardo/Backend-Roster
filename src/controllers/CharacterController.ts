import type { Request, Response } from 'express'
import Character from '../models/Character';

export class CharacterController {

    static createCharacter = async (req: Request, res: Response) => {

        const character = new Character(req.body);

        try {
            await character.save();
            res.send('Personaje creado correctamente')
        } catch (error) {
            console.log(error);

        }
    }

    static getAllCharacters = async (req: Request, res: Response) => {
        try {
            const characters = await Character.find({});
            res.json(characters);

        } catch (error) {
            console.log(error);

        }
    }

    static getCharacterById = async (req: Request, res: Response) => {

        const { id } = req.params;

        try {
            const characterID = await Character.findById(id);

            if (!characterID) {
                const error = new Error('Personaje no encontrado')
                return res.status(400).json({ error: error.message })
            }

            res.json(characterID);
        } catch (error) {
            console.log(error);
        }
    }

    static updateCharacter = async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const characterUpdate = await Character.findByIdAndUpdate(id, req.body);

            if (!characterUpdate) {
                const error = new Error('Personaje no encontrado')
                return res.status(400).json({ error: error.message })
            }

            await characterUpdate.save();
            res.send('Personaje Actualizado');
        } catch (error) {
            console.log(error);
        }
    }

    static deleteCharacter = async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const characterDelete = await Character.findById(id)
            
            if (!characterDelete) {
                const error = new Error('Personaje no encontrado')
                return res.status(400).json({ error: error.message })
            }

            await characterDelete.deleteOne();
            res.send('Personaje Eliminado');

        } catch (error) {
            console.log(error);
        }
    }
}