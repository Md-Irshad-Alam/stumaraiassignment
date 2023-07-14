import React, { useState } from "react";
import { observer } from 'mobx-react';
import  todoStore  from '../Stores/Store'

interface ViewTodoProps {
    taskId: String;
    handleView: () => void;
}

const TaskDetails: React.FC<ViewTodoProps> = observer(({ taskId, handleView }) => {

const todo = todoStore.todos.find((item) => item._id === taskId);



return(
    <div className="fixed  inset-1 flex flex-col items-center justify-center  z-50 bg-gray-500 bg-opacity-75 text-black">
      <div  className='flex flex-col gap-2 justify-center bg-white  bg-opacity-75 p-5 relative rounded-md'>

              {
                todo &&(
                   <div className="w-sm text-lg rounded-b-md">
                    <h2> Task Title: <span className="text-black text-lg font-medium p-1 m-2">{todo.title}</span></h2>
                    <p> Task description: <span className="text-black text-lg font-medium p-1 m-2">{todo.description}</span></p>
                    <p> Task Completed at: <span className="text-black text-lg font-medium p-1 m-2">{todo.statusDate}</span></p>
                    <p> Task Status: <span className="text-black text-lg font-medium p-1 m-2">{todo.completed ? "Completed" : "Pending"}</span></p>
                   </div>
                )
              }
        <div className="flex justify-center pt-3">
          <button
            onClick={handleView}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
)

});

export default TaskDetails;

// return (
//   <div >
//       <div className="fixed  z-50  flex flex-col items-center justify-center   bg-gray-500 bg-opacity-75 text-gray-600">
//               {showDetails && todo && (
//               <div  >
//               <h2> Task Title: {todo.title}</h2>
//               <p> Task description: {todo.description}</p>
//               <p> Task Completed at: {todo.statusDate}</p>
//               <p> Task Status: {todo.completed ? "Completed" : "Pending"}</p>
//               </div>
//           )}
//               <button   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
//                onClick={toggleDetails}>
//               Close
//               </button>
//       </div>
//   </div>
// );