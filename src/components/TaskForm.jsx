import React,{useState} from 'react'
import "./TaskForm.css"
import Tag from './Tag'
function TaskForm() {
    const [taskData,setTaskData]=useState({
        task:"",
        status:"todo",
        tags:[]
    })
    const checkTag=(tag)=>{
        return taskData.tags.some(item =>item ===tag)
    }
    const selectTags=(tag)=>{
        if(taskData.tags.some(item => item ===tag)){
          const filterTag=   taskData.tags.filter(item =>item !== tag)
            setTaskData(
                prev =>{
                    return{
                        ...prev,tags:filterTag
                    }
                }
            )
        }else{
            setTaskData(prev =>{
                return{...prev,tags:[...prev.tags,tag]}
            })
        }
    }
    console.log(taskData.tags)
    const handleChange=(e)=>{
        const {name,value}=e.target;
         setTaskData(tasks =>{
            return{
                ...tasks, [name]:value,
            }
         })
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(taskData)
       e.target.reset()
    }
  return (
    
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type="text"
            name='task'
             className='task_input'
             placeholder='Enter Your Task'
             onChange={handleChange}

            />
            <div className='task_form_bottom_line'>
                <div>
                    <Tag tagName="HTML" selectTag={selectTags}
                     selected={checkTag("HTML")

                     }
                    />
                    <Tag  tagName="CSS" 
                    selectTag={selectTags}
                    selected={checkTag("CSS")}
                    />
                    <Tag tagName="JS"
                     selectTag={selectTags}
                     selected={checkTag("JS")}
                     />
                    <Tag tagName="React"
                     selectTag={selectTags}
                     selected={checkTag("React")}
                     /> 
                  </div>
               
                <div>
                <select 
                onChange={handleChange}
                className='task_status' name="status" id="">
                    <option value="todo">Todo</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
                    <button type='submit' className='task_submit'>+Add Task</button>
                </div>
                 
            </div>
        </form>
    </header>

    
  )
}

export default TaskForm
