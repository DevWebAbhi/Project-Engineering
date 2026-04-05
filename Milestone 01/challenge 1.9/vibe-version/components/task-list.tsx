"use client"

import type { Task } from "@/app/page"
import { TaskItem } from "@/components/task-item"

type TaskListProps = {
  tasks: Task[]
  onToggleTask: (id: string) => void
}

export function TaskList({ tasks, onToggleTask }: TaskListProps) {
  if (tasks.length === 0) {
    return null
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggleTask} />
      ))}
    </ul>
  )
}
