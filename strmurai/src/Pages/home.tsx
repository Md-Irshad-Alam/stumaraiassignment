import React from 'react'
import AddTodo from '../Componants/Todolist/AddTodo'
import { todoStore } from '../Componants/MST-Modle/Store'

function home() {
  return (
    <div className='todo-maincontainer'>
      <AddTodo todoStore={todoStore}/>
    </div>
  )
}

export default home
