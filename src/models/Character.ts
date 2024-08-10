import mongoose, {Schema, Document} from "mongoose";

export type CharacterType = Document & {
    image: string,
    firstName: string
    lastName: string
    age: number;
    sex: 'Hombre' | 'Mujer' | 'Otro'
    gender: string
    height: number
    weight: number
    description: string
    actorOrVoice: string
    mediaTitle: string
    mediaType: 'Libro' | 'Película' | 'Serie'
    movieActor?: string
    bookAuthor?: string
}

const CharacterSchema : Schema = new Schema({
    image: {type: String, require: true},
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    age: { type: Number, required: true },
    sex: { type: String, enum: ['Hombre', 'Mujer', 'Otro'], required: true },
    gender: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    description: { type: String, required: true },
    actorOrVoice: { type: String, required: true },
    mediaTitle: { type: String, required: true },
    mediaType: { type: String, enum: ['Libro', 'Película', 'Serie'], required: true },
    movieActor: { type: String },
    bookAuthor: { type: String },
})

const Character = mongoose.model<CharacterType>('Character', CharacterSchema);
export default Character;