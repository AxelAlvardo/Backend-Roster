import mongoose, {Schema, Document} from "mongoose";

export type MovieType =  Document & {
    title: string;
    imageURL: string;
    characters: mongoose.Types.ObjectId[];
}

const MovieSchema: Schema = new Schema({
    title: { type: String, required: true },
    imageURL: { type: String, required: true },
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }]
});
const Movie = mongoose.model< MovieType>('Movie', MovieSchema);
export default Movie;