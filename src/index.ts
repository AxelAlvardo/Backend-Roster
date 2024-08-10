import server from './server';
import color from 'colors'
import './expressPotions'
import dotenv from 'dotenv';    

dotenv.config();

const port = process.env.PORT || 4000;

server.listen(port, ()=> {
    console.log(color.cyan(`Rest API funcionando en : ${port}`));
})