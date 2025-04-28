import React from 'react'

function Task({task, toggleComplete}) {
    console.log(`Rendering task: ${Task.name}`)
    return (
        <div>
            <input type="text"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
            />
            <span className={task.completed ? "line-through" : ""}>{task.name}</span>
        </div>
    )
}

export default React.memo(Task)