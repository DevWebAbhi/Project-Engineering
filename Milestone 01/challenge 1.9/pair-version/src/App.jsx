import { useMemo, useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'
import Filter from './components/Filter'
import './App.css'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
]

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  const addTask = (text) => {
    setTasks((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
      },
    ])
  }

  const toggleTask = (taskId) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const filteredTasks = useMemo(() => {
    if (filter === 'active') return tasks.filter((task) => !task.completed)
    if (filter === 'completed') return tasks.filter((task) => task.completed)
    return tasks
  }, [filter, tasks])

  const activeCount = tasks.filter((task) => !task.completed).length

  return (
    <main className="app-shell">
      <section className="task-manager">
        <header className="task-manager__header">
          <div>
            <p className="eyebrow">Simple task manager</p>
            <h1>Stay on top of your work</h1>
          </div>
          <p className="task-manager__summary">
            Add tasks, mark them complete, and filter your list with a clean,
            minimal interface.
          </p>
        </header>

        <TaskInput onAddTask={addTask} />

        <div className="task-manager__controls">
          <Filter
            options={FILTERS}
            currentFilter={filter}
            onChange={setFilter}
          />
          <p className="task-count">{activeCount} active task{activeCount === 1 ? '' : 's'}</p>
        </div>

        <TaskList tasks={filteredTasks} onToggleTask={toggleTask} />
      </section>
    </main>
  )
}

export default App
