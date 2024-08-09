import mongoose, {Schema, Document} from "mongoose";

export type CharacterType = Document & {
    firstName: string
    lastName: string
    age: number;
    sex: 'Hombre' | 'Mujer' | 'Otro'
    gender: string
    height: number
    weight: number
    description: string
    actorOrVoice: string
}

const CharacterSchema : Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    sex: { type: String, enum: ['Hombre', 'Mujer', 'Otro'], required: true },
    gender: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    description: { type: String, required: true },
    actorOrVoice: { type: String, required: true }
})

const Character = mongoose.model<CharacterType>('Character', CharacterSchema);
export default Character;