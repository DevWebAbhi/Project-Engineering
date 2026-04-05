function TaskList({ tasks, onToggleTask }) {
  if (tasks.length === 0) {
    return <p className="task-list__empty">No tasks yet. Add one to get started.</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <input
            id={task.id}
            className="task-item__checkbox"
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />
          <label
            htmlFor={task.id}
            className={`task-item__label ${task.completed ? 'task-item__label--completed' : ''}`}
          >
            {task.text}
          </label>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
