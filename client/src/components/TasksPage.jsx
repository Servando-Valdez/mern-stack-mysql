import { getTasksRequest } from "../api/tasks.api";
import { useEffect, useState } from 'react';
import TaskCard from "./TaskCard";
function TasksPage() {

    const [tasks, setTasks] = useState([]); //es un arreglo vacio

    useEffect(() => {
        async function loadTasks() {
            const response = await getTasksRequest();
            setTasks(response.data);
        }
        loadTasks();
    }, [])//esta [] es para que se actualice si cambia

    return (
        <div>
            <h1>Tasks</h1>
            {
                tasks.map(task => (
                   <TaskCard task={task} key={task.id}/>
                ))
            }
        </div>
    )
}

export default TasksPage