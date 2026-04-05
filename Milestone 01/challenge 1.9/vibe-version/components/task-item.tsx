"use client"

import type { Task } from "@/app/page"
import { Checkbox } from "@/components/ui/checkbox"

type TaskItemProps = {
  task: Task
  onToggle: (id: string) => void
}

export function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <li className="flex items-center gap-3 p-3 rounded-md border border-border bg-background hover:bg-muted/50 transition-colors">
      <Checkbox
        id={task.id}
        checked={task.completed}
        onCheckedChange={() => onToggle(task.id)}
      />
      <label
        htmlFor={task.id}
        className={`flex-1 cursor-pointer select-none ${
          task.completed
            ? "text-muted-foreground line-through"
            : "text-foreground"
        }`}
      >
        {task.title}
      </label>
    </li>
  )
}
