


import React from 'react';
import AddTodo from '../Todolist/AddTodo'
import  todoStore  from '../Stores/Store'
import { useEffect } from 'react';
function Page() {
  // const storedTasks = localStorage.getItem("task");
  // this.todos = storedTasks ? JSON.parse(storedTasks) : [];

  useEffect(()=>{
      const storedTasks = localStorage.getItem("task");
       storedTasks ? JSON.parse(storedTasks) : [];
  },[])

  
  return (
    <div  className='todo-maincontainer'>
      <AddTodo todoStore={todoStore}/>
    </div>
  )
}
export default Page;