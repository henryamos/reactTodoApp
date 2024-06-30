import { useState } from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
function App() {
  
  return (
    <>
      <div className='app'>
        <TaskForm/>
        <main className='app_main'>
          <section className='task_column'>Section 1</section>
          <section className='task_column'>Section 3</section>
          <section className='task_column'>Section 3</section>
        </main>
      </div>
      </>
  )
}

export default App
