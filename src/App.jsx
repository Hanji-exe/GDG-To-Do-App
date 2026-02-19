import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Header from './components/Header'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const getCurrentDate = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    
    const now = new Date()
    const dayName = days[now.getDay()]
    const day = now.getDate()
    const month = months[now.getMonth()]
    
    const getOrdinal = (n) => {
      const s = ['th', 'st', 'nd', 'rd']
      const v = n % 100
      return n + (s[(v - 20) % 10] || s[v] || s[0])
    }
    
    return `${dayName}, ${getOrdinal(day)} ${month}`
  }

  return (
    <div className="app-container">
      <Header 
        taskCount={todos.length} 
        currentDate={getCurrentDate()} 
      />
      
      <div className="main-card">
        <TodoList 
          todos={todos} 
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
        
        <TodoInput addTodo={addTodo} />
        
      </div>
      <div>
         <footer className="footer">
          © {new Date().getFullYear()} GDGCoc PUP. All Rights Reserved.
        </footer>
      </div>
  
    </div>
  )

}

export default App