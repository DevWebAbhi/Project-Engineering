"use client"

import { useState } from "react"
import { TaskInput } from "@/components/task-input"
import { TaskList } from "@/components/task-list"
import { TaskFilter } from "@/components/task-filter"

export type Task = {
  id: string
  title: string
  completed: boolean
}

export type FilterType = "all" | "active" | "completed"

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<FilterType>("all")

  const addTask = (title: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    }
    setTasks([newTask, ...tasks])
  }

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  const activeCount = tasks.filter((t) => !t.completed).length

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-foreground mb-8 text-center">
          Task Manager
        </h1>

        <div className="bg-card border border-border rounded-lg shadow-sm p-6 space-y-6">
          <TaskInput onAddTask={addTask} />

          <TaskFilter
            currentFilter={filter}
            onFilterChange={setFilter}
            activeCount={activeCount}
          />

          <TaskList tasks={filteredTasks} onToggleTask={toggleTask} />

          {tasks.length === 0 && (
            <p className="text-center text-muted-foreground py-8">
              No tasks yet. Add one above!
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
