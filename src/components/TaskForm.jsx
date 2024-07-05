import React, { useState } from 'react';
import "./TaskForm.css";
import Tag from './Tag';
import AlertModal from './AlertModal';

function TaskForm({ setTasks }) {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag);
    };

    const selectTags = (tag) => {
        if (taskData.tags.some(item => item === tag)) {
            const filterTag = taskData.tags.filter(item => item !== tag);
            setTaskData(prev => {
                return { ...prev, tags: filterTag };
            });
        } else {
            setTaskData(prev => {
                return { ...prev, tags: [...prev.tags, tag] };
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData(tasks => {
            return { ...tasks, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskData.task.trim() === '') {
            console.log('Task is empty, opening modal');
            setIsModalOpen(true);
            setSubmitted(true);
            return;
        }

        setTasks(prev => {
            return [...prev, taskData];
        });
        setTaskData({
            task: "",
            status: "todo",
            tags: []
        });
        setSubmitted(false); // Reset the submitted flag
    };

    const onCloseModal = () => {
        console.log('Closing modal');
        setIsModalOpen(false);
        setSubmitted(false); // Reset the submitted flag
    };

    return (
        <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='task'
                    value={taskData.task}
                    className='task_input'
                    placeholder='Enter Your Task'
                    onChange={handleChange}
                />
                <div className='task_form_bottom_line'>
                    <div>
                        <Tag tagName="HTML" selectTag={selectTags} selected={checkTag("HTML")} />
                        <Tag tagName="CSS" selectTag={selectTags} selected={checkTag("CSS")} />
                        <Tag tagName="JS" selectTag={selectTags} selected={checkTag("JS")} />
                        <Tag tagName="React" selectTag={selectTags} selected={checkTag("React")} />
                    </div>
                    <div>
                        <select
                            onChange={handleChange}
                            value={taskData.status}
                            className='task_status' name="status" id="">
                            <option value="todo">Todo</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type='submit' className='task_submit'>+Add Task</button>
                    </div>
                </div>
                {isModalOpen && submitted && <AlertModal isOpen={isModalOpen} onClose={onCloseModal} />}
            </form>
        </header>
    );
}

export default TaskForm;
