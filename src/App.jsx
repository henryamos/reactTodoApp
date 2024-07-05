import { useState ,useEffect} from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoImg from './assets/direct-hit.png'
import doingImg from "./assets/glowing-star.png"
import doneImg from "./assets/check-mark-button.png"

const  oldTasks= localStorage.getItem("tasks")
console.log(oldTasks)
function App() {
  const [tasks,setTasks]=useState(
    [
     
    ])
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])

    const handleDelete=(taskIndex)=>{
       const newTasks = tasks.filter((task,index)=>index!==taskIndex)
       setTasks(newTasks)
    }
  return (
    <>
      <div className='app'>
        <TaskForm setTasks={setTasks}/>
        <main className='app_main'>
          <TaskColumn icon={todoImg}  tasks={tasks}  status="todo"  heading="To do" handleDelete={handleDelete}/>
          <TaskColumn icon={doingImg} tasks={tasks} status="doing" heading="Doing" handleDelete={handleDelete}/>
          <TaskColumn icon={doneImg}  tasks={tasks} status="done" heading="Done" handleDelete={handleDelete}/>
          </main>
      </div>
      </>
  )
}

export default App
