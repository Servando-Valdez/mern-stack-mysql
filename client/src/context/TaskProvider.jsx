import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {
  getTasksRequest,
  deleteTaskRequest,
  createTasksRequest,
  getTaskRequest,
  updateTaskRequest,
  toggleTaskDoneRequest
} from "../api/tasks.api";
import { TaskContex } from "./taskContext";

//aqui podemos crear varios contextos
//este es el que permite comunicarse
// export const TaskContex = createContext();

/*
custom hook para retornar el contexto
*/
export const useTasks = () => {
  const context = useContext(TaskContex);

  //significa que no hay contexto
  if (!context) {
    throw new Error("UseTasks must be used within",
      "a TaskContextProvider")
  }
  return context;
}

//retorna un componente de react basado
//en TaskContext
//exte es el que agrupa
export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  //funcion para cargar tareas
  async function loadTasks() {
    const response = await getTasksRequest();
    setTasks(response.data);
  }
  //funcion para eliminar tareas
  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      setTasks(tasks.filter(task => task.id !== id));//se filta el nuevo arreglo
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const createTask = async (task) => {
    try {
      const response = await createTasksRequest(task)//le manda los datos al backend
      // setTasks([...tasks, response.data]);//copia del arreglo y se agrega el nuevo
      // console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const updateTask = async (id, newTask) => {
    try {
      const response = await updateTaskRequest(id, newTask);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false);
      setTasks(
        tasks.map((task)=>task.id===id ? {...task, done: !task.done}: task
        )
      )
    } catch (error) {
      console.error(error);
    }
  }


  return <TaskContex.Provider value={{
    tasks, loadTasks, deleteTask,
    createTask, getTask, updateTask, toggleTaskDone
  }}>
    {children}
  </TaskContex.Provider>
}