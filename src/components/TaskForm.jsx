import React from 'react'
import "./TaskForm.css"
function TaskForm() {
  return (
    
    <header className='app_header'>
        <form >
            <input type="text"
             className='task_input'
             placeholder='Enter Your Task'

            />
            <div className='task_form_bottom_line'>
                <div>
                    
                <button className='tag'>HTML</button>
                <button className='tag'>CSS</button>
                <button className='tag'>Javascript</button>
                <button className='tag'>React</button>
                </div>
               
                <div>
                <select className='task_status' name="" id="">
                    <option value="todo">Todo</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                    <button type='submit' className='task_submit'>+Add Task</button>
                </select>
                </div>
                 
            </div>
        </form>
    </header>

    
  )
}

export default TaskForm
