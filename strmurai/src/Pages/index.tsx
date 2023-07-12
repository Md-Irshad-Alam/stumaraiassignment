
import AddTodo from './Componants/Todolist/AddTodo'
import { todoStore } from './Componants/MST-Modle/Store'
export default function Page() {
  return (
    <div  className='todo-maincontainer'>
      <AddTodo todoStore={todoStore}/>
      
    </div>
  )
}