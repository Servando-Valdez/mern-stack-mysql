import { Router } from "express";

import {methods as taskController} from '../controllers/tasks.controllers.js';

const router = Router();

router.get('/tasks', taskController.getTasks); //solicitar tareas

router.get('/tasks/:id', taskController.getTask);//obtener una unica tarea

router.post('/tasks', taskController.CreateTask);//agregar tarea

router.put('/tasks/:id', taskController.UpdateTask);//actualizar tarea segun el id

router.delete('/tasks/:id', taskController.DeleteTask);//eliminar tareas con un id

// router.get('/tasks');
export default router;