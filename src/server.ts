import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { corsConfig } from './config/cors';
import { connectDB } from './config/database';
import characterRoutes from './routes/CharacterRoute'
import moviesRoutes from './routes/MoviesRouter'
import seriesRoutes from './routes/SeriesRoutes'
import booksRoutes from './routes/BooksRoute'
import swaggerUI from 'swagger-ui-express'
import swaggerSpec from './config/swagger';

dotenv.config();

connectDB();

const server = express();
server.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));
server.use(express.json());

//Routes
server.use('/api/characters', characterRoutes);
server.use('/api/movies', moviesRoutes)
server.use('/api/series', seriesRoutes)
server.use('/api/books', booksRoutes)

//DOCS
server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

export default server;