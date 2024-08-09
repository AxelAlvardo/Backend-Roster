import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/database';

dotenv.config();

connectDB();

const server = express();

export default server;