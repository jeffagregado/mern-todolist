import Text from '../components/Text'
import TodoList from '../components/todos/TodoList'

export default function Home() {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center">
        <Text.Title bold>Todo List</Text.Title>
        <TodoList />
      </div>
    </div>
  )
}
