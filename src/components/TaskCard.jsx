import React from 'react'
import "./TaskCard.css"
import Tag from './Tag'
import Delete from "../assets/delete.png"
function TaskCard({tags,title, handleDelete,index}) {
  return (
    <article className='task_card'>
        <p className='task_text'>{title}</p>
        <div className="task_card_bottom_line">
            <div className="task_card_tags">
                 {
                  tags.map((tag,index)=>(
                  <Tag key={index} tagName={tag} selected={true}/>
                  ))
                 }
            </div>
            <div className="task_delete" onClick={()=>handleDelete(index )}>
                <img src={Delete}
                className='delete_icon'
                alt="" />
            </div>
        </div>
    </article>
  )
}

export default TaskCard
