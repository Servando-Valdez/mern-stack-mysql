import axios from 'axios'
//Es una funcion que recibe un objeto tarea
export const createTasksRequest= async(task)=>{
    return await axios.post('http://localhost:4000/tasks', task);
}

export const getTasksRequest = async() =>{
    return await axios.get('http://localhost:4000/tasks');
}

export const deleteTaskRequest = async(id) =>{
    return await axios.delete(`http://localhost:4000/tasks/${id}`);
}

export const getTaskRequest = async(id)=>{
    return await axios.get(`http://localhost:4000/tasks/${id}`);
}

export const updateTaskRequest = async(id,task)=>{
    return await axios.put(`http://localhost:4000/tasks/${id}`,task);
}

export const toggleTaskDoneRequest = async(id, done)=>{
    return await axios.put(`http://localhost:4000/tasks/${id}`,{
        done,
    });
}