function Filter({ options, currentFilter, onChange }) {
  return (
    <div className="filter" role="group" aria-label="Task filter">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          className={`filter__button ${currentFilter === option.id ? 'filter__button--active' : ''}`}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default Filter
