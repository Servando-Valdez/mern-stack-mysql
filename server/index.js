import express from "express";
import {PORT} from './config.js';
import cors from "cors";
import indexRouter from './routes/index.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import {dirname, join} from 'path'
import { fileURLToPath } from "url";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(cors())//esto hace que otro servidor se pueda comunicar con nuestro servidor,
//así podemos conectar el frontend con el backend

app.use(express.json());//this is to process json

app.use(indexRouter);//this is to use routes
app.use(tasksRoutes);//this si to use task routes
app.use(express.static(join(__dirname, '../client/dist')))

app.listen(PORT); //this is the port that server is listening

console.log(`Server is listening on port ${PORT}`);