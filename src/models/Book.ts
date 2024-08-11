import mongoose, {Schema, Document} from "mongoose";

export type BookType =  Document & {
    access: string
    title: string;
    imageURL: string;
    characters: mongoose.Types.ObjectId[];
}

const BookSchema: Schema = new Schema({
    access: {type: String, require: true},
    title: { type: String, required: true },
    imageURL: { type: String, required: true },
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }]
});
const Book = mongoose.model< BookType>('Book', BookSchema);
export default Book;