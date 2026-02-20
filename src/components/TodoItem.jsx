import { useState } from 'react'

function TodoItem({ todo, toggleComplete, deleteTodo, editTodo }) {

  const [isEditing, setIsEditing] = useState(false)       // tracks if we're in edit mode
  const [editText, setEditText] = useState(todo.text)   

  // Saves the edit
const handleEditSave = () => {
    if (editText.trim() === '') return  // don't save empty text
    editTodo(todo.id, editText)         // call the function from App.jsx
    setIsEditing(false)                 // exit edit mode
  }

// Handles keyboard shortcuts
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleEditSave()   // Enter = save
    if (e.key === 'Escape') setIsEditing(false) // Escape = cancel
  }

  return (
    <div className="group flex items-center gap-4 p-4 rounded-xl transition-all cursor-pointer animate-slide-in hover:bg-[rgb(43,44,46)]">
      
      {/* Checkbox */}
      <div
        onClick={() => toggleComplete(todo.id)}
        className={`w-6 h-6 border-[2.5px] rounded-md cursor-pointer transition-all flex items-center justify-center flex-shrink-0
          ${todo.completed
            ? 'bg-google-green border-transparent'
            : 'border-border-col hover:border-google-green'
          }`}
      >
        {todo.completed && (
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      
      {/* Text */}
        {isEditing ? (
      // Edit mode — show an input field
      <input
        autoFocus
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        onBlur={handleEditSave}       // save when clicking away
        onKeyDown={handleKeyDown}     // save on Enter, cancel on Escape
        className="w-full bg-transparent border-b border-google-yellow text-text-main outline-none text-base"
      />
    ) : (
      // View mode — show the text, double-click to edit
      <span
        onDoubleClick={() => setIsEditing(true)}
        className={`text-base transition-all ${todo.completed ? 'text-text-muted line-through' : 'text-text-main'}`}
      >
        {todo.text}
      </span>
    )}
      

      {/* Delete */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-transparent border-none items-right justify-right text-text-muted cursor-pointer p-2 rounded-lg transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center hover:bg-[#161414] hover:text-google-red"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  )
}

export default TodoItem