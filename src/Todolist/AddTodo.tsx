import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import  todoStore  from '../Stores/Store'
import UpdateTodo from './UpdateTodo';
import TaskDetails from './ViewTaks';


interface TodoListProps {
  todoStore: typeof todoStore;
  
}

const AddTodo: React.FC<TodoListProps> = observer(({todoStore}) => {

  const [title, setTitle] = useState('');
  const [desc, setDec] = useState('');
  const [show, setshow] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState<String | null>(null);
  const [showadd, setshowadd] = useState(false)
  const [data, setdata] = useState([]);
  const [isloding , setIsLoading] = useState(false);
  const [showview, setcloseview] = useState<String | null>(null);
  let staus = todoStore.status;


  const handleUpdateClick = (todoId: String) => {
    setSelectedTodoId(todoId);
  };

  const handleCloseUpdate = () => {
    setSelectedTodoId(null);
  };

  const handleViewClick = (taskId: String) => {
    setcloseview(taskId);
  };

  const handleCloseView = () => {
    setcloseview(null);
  };

 
  
  const handledelete =(taskId:String)=>{
    console.log(taskId)
      if(staus.completed){
          window.alert("you can deleted uncompleted taks ")
      }else{
        

      }

  }
  const handleAddTodo = () => {
    if (title && desc) {
      todoStore.addTodo(title, desc)
      setTitle('');
      setDec('');
      window.alert('task is added ')
      setshowadd(false);

    } else {
      window.alert('Cannot add empty task');
    }
  };


  return (
    <>
    
    <div className="addtodo-container sm:m-auto  sm:w-mdmax-w-sm min-w-min p-4">
      <p className='text-xl text-zinc-950 font-extrabold font-mono'>Schedule Plan  For Today</p>
    
    <div className='text- text-zinc-950 font-bold'>
    <p>Completed: {staus.completed}</p>
    <p>Remaining: {staus.remaining}</p>
    </div> 

    <table className="w-sm border-collapse border   border-gray-300 mt-4 m-auto p-2 ">
      <thead className="w-full text-gray-100">
        <tr className='bg-slate-600'>
          <th className="border border-gray-300 px-2 py-1">Sr No.</th>
          <th className="border border-gray-300 px-2 py-1">Title</th>
          <th className="border border-gray-300 px-2 py-1">Description</th>
          <th className="border border-gray-300 px-2 py-1">Status</th>
          <th className="border border-gray-300 px-2 py-1">Toggle status</th>
          <th className="border border-gray-300 px-2 py-1">View Details</th>
          <th className="border border-gray-300 px-2 py-1">Update</th>
          <th className="border border-gray-300 px-2 py-1">Delete</th>
        </tr>
      </thead>
      <tbody className='w-full text-gray-500'>
     
    
      {
        todoStore.todos.map((task, id) => (
          <tr key={id} className="hover:bg-gray-100">
            <td className="border border-gray-300 px-2 py-1">{id}</td>
            <td className="border border-gray-300 px-2 py-1">{task.title}</td>
            <td className="border border-gray-300 px-2 py-1">{task.description}</td>
            <td
              className="border border-gray-300 px-2 py-1 cursor-pointer hover:bg-gray-200"
            >
              {task.completed ? 'Completed' : 'Pending'}
            </td>
            <td>
              <button onClick={()=> 
                todoStore.toggleStatus(task._id)} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                  Toggle</button>
            </td>
    
            <td
                className="border  border-gray-600 px-2 py-1 cursor-pointer hover:bg-gray-600"
              >
                {showview === task._id ? (
                  <TaskDetails taskId={task._id} handleView={handleCloseView} />
                ) : (
                  <button
                    onClick={() => handleViewClick(task._id)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    View
                  </button>
                )}
              </td>

            <td
                className="border  border-gray-600 px-2 py-1 cursor-pointer hover:bg-gray-600"
              >
                {selectedTodoId === task._id ? (
                  <UpdateTodo todoId={task._id} handleCloseUpdate={handleCloseUpdate} />
                ) : (
                  <button
                    onClick={() => handleUpdateClick(task._id)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                )}
              </td>

            <td className="border border-gray-300 px-2 py-1">
              <button
                onClick={()=> {
                  if(task.completed==false){
                      window.alert("you can't delete uncomplete taks ")
                  }else{
                    if(todoStore.todos.length >0){
                      todoStore.deleteTodo(task._id)

                    }else{
                      window.alert("you mush have one task")
                    }
                  }

                }}
                 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
   <div>
    {
      showadd ? (
        <div className="fixed  inset-0 flex flex-col items-center justify-center  z-50 bg-gray-500 bg-opacity-75 text-gray-600 mb-6">
        <div className="w-80 flex flex-col gap-3 rounded-md bg-gray-400 p-4 rounded-md">
        <input
           type="text"
           placeholder="Enter task title"
           value={title}
           onChange={(event) => setTitle(event.target.value)}
           className="p-2 border border-gray-300 rounded mb-2"
         />
         <input
           type="text"
           placeholder="Enter task description"
           value={desc}
           onChange={(event) => setDec(event.target.value)}
           className="p-2 border border-gray-300 rounded mb-2"
         />
        <div className='flex flex-row gap-2 justify-center mt-2'>
        <button
           onClick={handleAddTodo}
           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
         >
           Add Task
         </button>
         <button
           onClick={() => {
             setshowadd(false);
           }}
           className="bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-600"
         >
           cancel
         </button>
        </div>
        </div>
       </div>
      ): (
        <button onClick={()=> setshowadd(true)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">Add Taks</button>
      )
    }
   </div>
  </div>
   
    
    </>
  );
});

export default AddTodo;
