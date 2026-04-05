import { useState } from 'react'

function TaskInput({ onAddTask }) {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onAddTask(trimmed)
    setValue('')
  }

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        className="task-input__field"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Add a new task"
        aria-label="Task description"
      />
      <button className="task-input__button" type="submit">
        Add Task
      </button>
    </form>
  )
}

export default TaskInput
