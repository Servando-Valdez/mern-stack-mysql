import React from 'react'
import { Form, Formik } from 'formik'
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function TaskForm() {

  const { createTask, getTask, updateTask } = useTasks();
  const params = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: '',
    description: '',
  })
  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    }
    loadTask();
  }, [])

  // console.log(params);
  return (
    <div>

      {/* formik mantiene el estado
      y form permite hacer el fomrulario */}
      <Formik initialValues={task}
        enableReinitialize={true} //para poder utilizar los valores del task segun el id
        onSubmit={async (values, actions) => {//cuando se guarden los valores, actions para limpiar
          // console.log(values)
          if (params.id) {
            await updateTask(params.id, values);
           
          } else {
            await createTask(values);
          }
          navigate('/');
          setTask({
            title: "",
            description: "",
          })
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (//issub para ver si está cargando
          <Form onSubmit={handleSubmit} className="bg-slate-300 max-w-sm 
        rounded-md p-4 mx-auto mx-h-full mt-10">
            <h1 className='text-xl font-bold uppercase text-center'>
              {params.id ? "Edit Task" : "New Task"}
            </h1>
            <label className='block'>title</label>
            <input type="Text" name="title"
              placeholder='write a title'
              onChange={handleChange}
              className='px-2 py-1 rounded-sm w-full'
              value={values.title} />

            <label className='block'>description</label>
            <textarea name="description" rows="3"
              placeholder='write a description'
              onChange={handleChange}
              className='px-2 py-1 rounded-sm w-full'
              value={values.description}></textarea>

            {/* se desabilita el boton si está cargando */}
            <button type="submit" disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py1 text-white w-full
              rounded-md">
              {/* true si está guardando */}
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}

      </Formik>
    </div>
  )
}

export default TaskForm