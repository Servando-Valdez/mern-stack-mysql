import { getTasksRequest } from "../api/tasks.api";
import { useEffect, useState } from 'react';
import TaskCard from "./TaskCard";
import { useTasks } from "../context/TaskProvider";
function TasksPage() {

    //se obtiene el contexto, que es el
    //arreglo de tareas
    const {tasks, loadTasks} = useTasks();

    useEffect(() => {
        
        loadTasks();
    }, [])//esta [] es para que se actualice si cambia

    function renderMain(){
        if(tasks.length ===0) return <h1>No Tasks Yet</h1>
        return tasks.map(task => (
            <TaskCard task={task} key={task.id}/>
         ))
    }
    return (
        <div>
            <h1 className="text-3xl text-white font-bold text-center">Tasks</h1>
            <div className="grid grid-cols-3 gap-2">
                {renderMain()}
            </div>
        </div>
    )
}

export default TasksPage