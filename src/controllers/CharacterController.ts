import type { Request, Response } from 'express'
import Character from '../models/Character';
import Movie from '../models/Movie';
import Serie from '../models/Series';

export class CharacterController {

    static createCharacter = async (req: Request, res: Response) => {
        const characterData = req.body;
        
        if (characterData.mediaType === 'Película') {
            const movieExists = await Movie.findOne({ title: characterData.mediaTitle }).exec();
            if (!movieExists) {
                return res.status(404).json({ message: 'La película con el título especificado no existe' });
            }
        }

        const character = new Character(characterData);

        try {

            const savedCharacter = await character.save();

            if (characterData.mediaType === 'Película') {

                await Movie.findOneAndUpdate(
                    { title: characterData.mediaTitle },
                    { $addToSet: { characters: savedCharacter._id } }
                );
            }

            if (characterData.mediaType === 'Serie') {
                await Serie.findOneAndUpdate(
                    { title: characterData.mediaTitle },
                    { $addToSet: { characters: savedCharacter._id } }
                );
            }

            res.status(201).json({ message: 'Personaje creado correctamente', character: savedCharacter });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al crear el personaje', error });
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