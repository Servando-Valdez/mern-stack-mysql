import React from 'react'
import { Form,Formik} from 'formik'
import {createTasksRequest} from '../api/tasks.api'
function TaskForm() {
  return (
    <div>
      
      {/* formik mantiene el estado
      y form permite hacer el fomrulario */}
     <Formik initialValues={{
      title: "",
      description: "",
     }}
     onSubmit={async(values, actions)=>{//cuando se guarden los valores, actions para limpiar
      console.log(values)
      try {
        const response = await createTasksRequest(values)
        console.log(response)
        actions.resetForm();
      } catch (error) {
        console.error(error)
      }
     }}
     >
      {({handleChange, handleSubmit, values, isSubmitting})=>(//issub para ver si está cargando
        <Form onSubmit={handleSubmit}>
        <label>title</label>
        <input type="Text" name="title"
        placeholder='write a title'
        onChange={handleChange}
        value={values.title}/>
        
        <label>description</label>
        <textarea name="description" rows="3"
        placeholder='write a description'
        onChange={handleChange}
        value={values.description}></textarea>

        {/* se desabilita el boton si está cargando */}
        <button type="submit" disabled={isSubmitting}> 
          {/* true si está guardando */}
          {isSubmitting ? "Saving...":"Save"}
        </button>
      </Form>
      )}
        
     </Formik>
    </div>
  )
}

export default TaskForm