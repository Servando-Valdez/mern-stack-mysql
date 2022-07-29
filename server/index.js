import express from "express";
import {PORT} from './config.js';

import indexRouter from './routes/index.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();

app.use(express.json());//this is to process json

app.use(indexRouter);//this is to use routes
app.use(tasksRoutes);//this si to use task routes

app.listen(PORT); //this is the port that server is listening

console.log(`Server is listening on port ${PORT}`);