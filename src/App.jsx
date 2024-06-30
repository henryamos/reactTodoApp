import { useState } from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoImg from './assets/direct-hit.png'
import doingImg from "./assets/glowing-star.png"
import doneImg from "./assets/check-mark-button.png"
function App() {
  
  return (
    <>
      <div className='app'>
        <TaskForm/>
        <main className='app_main'>
          <TaskColumn icon={todoImg} heading="To  do"/>
          <TaskColumn icon={doingImg} heading="Doing"/>
          <TaskColumn icon={doneImg} heading="Done"/>
          </main>
      </div>
      </>
  )
}

export default App
