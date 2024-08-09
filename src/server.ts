import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/database';
import characterRoutes from './routes/CharacterRoute'

dotenv.config();

connectDB();

const server = express();
server.use(express.json());

//Routes
server.use('/api/characters', characterRoutes);

export default server;