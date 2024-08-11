import { access } from "fs";
import mongoose, {Schema, Document} from "mongoose";

export type MovieType =  Document & {
    access: string
    title: string;
    imageURL: string;
    characters: mongoose.Types.ObjectId[];
}

const MovieSchema: Schema = new Schema({
    access: {type: String, require: true},
    title: { type: String, required: true },
    imageURL: { type: String, required: true },
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }]
});
const Movie = mongoose.model< MovieType>('Movie', MovieSchema);
export default Movie;