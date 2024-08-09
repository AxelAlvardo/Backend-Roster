import mongoose from "mongoose";
import color from 'colors'
import {exit} from 'node:process'

export const connectDB = async()=> {
    try {

        const {connection} = await mongoose.connect(process.env.DATABASE_URL);
        const url = `${connection.host} : ${connection.port}`
        console.log(color.magenta.bold(`MongoDB conectado en : ${url}`));
        
    } catch (error) {
        console.log(color.red('Error al conectar a MongoDB'));
        exit(1);
    }
}