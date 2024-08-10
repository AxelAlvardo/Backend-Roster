import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/database';
import characterRoutes from './routes/CharacterRoute'
import moviesRoutes from './routes/MoviesRouter'
import seriesRoutes from './routes/SeriesRoutes'

dotenv.config();

connectDB();

const server = express();
server.use(express.json());

//Routes
server.use('/api/characters', characterRoutes);
server.use('/api/movies', moviesRoutes)
server.use('/api/series', seriesRoutes)

export default server;