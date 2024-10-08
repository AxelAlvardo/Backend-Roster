import mongoose, {Schema, Document} from "mongoose";

export type SerieType =  Document & {
    access: string
    title: string;
    imageURL: string;
    characters: mongoose.Types.ObjectId[];
}

const SerieSchema: Schema = new Schema({
    access: {type: String, require: true},
    title: { type: String, required: true },
    imageURL: { type: String, required: true },
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }]
});
const Serie = mongoose.model< SerieType>('Serie', SerieSchema);
export default Serie;