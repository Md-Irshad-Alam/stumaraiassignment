import React from 'react';
import AddTodo from './Componants/Todolist/AddTodo'
import  todoStore  from '../Stores/Store'
function Page() {
  return (
    <div  className='todo-maincontainer'>
      <AddTodo todoStore={todoStore}/>
      
    </div>
  )
}
export default Page;