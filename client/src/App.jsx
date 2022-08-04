
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import TaskPage from './components/TasksPage'
import TaskForm from './components/TaskForm'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
 
function App() {
  return (
  //  <Navbar/>
  <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<TaskPage/>}/>
      <Route path="/new" element={<TaskForm/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </>
  )
}

export default App

