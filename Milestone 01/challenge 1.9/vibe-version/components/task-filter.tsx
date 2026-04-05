"use client"

import type { FilterType } from "@/app/page"
import { Button } from "@/components/ui/button"

type TaskFilterProps = {
  currentFilter: FilterType
  onFilterChange: (filter: FilterType) => void
  activeCount: number
}

const filters: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
]

export function TaskFilter({
  currentFilter,
  onFilterChange,
  activeCount,
}: TaskFilterProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        {activeCount} {activeCount === 1 ? "task" : "tasks"} remaining
      </span>
      <div className="flex gap-1">
        {filters.map((f) => (
          <Button
            key={f.value}
            variant={currentFilter === f.value ? "secondary" : "ghost"}
            size="sm"
            onClick={() => onFilterChange(f.value)}
          >
            {f.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
