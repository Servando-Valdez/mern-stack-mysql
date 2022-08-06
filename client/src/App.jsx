
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TaskPage from './components/TasksPage'
import TaskForm from './components/TaskForm'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import { TaskContextProvider } from "./context/TaskProvider";

function App() {
  return (
    <div className="bg-zinc-800 h-screen">
      <Navbar />
      <div className='container mx-auto py-4 px-10'>
        <TaskContextProvider>
          {/* ahora todos tienen el contexto */}
          
          {/* se crea la barra de navegacion y las rutas */}
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>

    </div>

  )
}

export default App

