import { useState } from 'react'

function TodoInput({ addTodo }) {
  const [input, setInput] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() === '') return
    addTodo(input)
    setInput('')
    setIsExpanded(false)
  }

  return (
    <div className="input-section">
      {isExpanded ? (
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
            autoFocus
            className="input-field"
          />
          <button type="submit" className="add-btn">
            Add
          </button>
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="cancel-btn"
          >
            Cancel
          </button>
        </form>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="floating-add-btn"
        >
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default TodoInput