import axios from 'axios'
//Es una funcion que recibe un objeto tarea
export const createTasksRequest= async(task)=>{
    return await axios.post('http://localhost:4000/tasks', task);
}

export const getTasksRequest = async() =>{
    return await axios.get('http://localhost:4000/tasks');
}