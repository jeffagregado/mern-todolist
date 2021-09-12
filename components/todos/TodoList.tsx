import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([] as any)
  const [loading, setLoading] = useState(true)

  // fetch todo lists
  const fetchTodos = async () => {
    await axios
      .get('http://localhost:4000/todos')
      .then((res) => {
        setLoading(false)
        return res.data
      })
      .then((data) => {
        console.log(data)
        setTodos(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  console.log('todos', todos)

  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo: any) => (
          <ul key={todo._id}>
            <li>{todo.title}</li>
          </ul>
        ))
      ) : (
        <p>There is no list</p>
      )}
    </div>
  )
}

export default TodoList
