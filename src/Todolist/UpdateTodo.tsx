import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import  todoStore  from '../Stores/Store'

interface UpdateTodoProps {
  todoId: String;
  handleCloseUpdate: () => void;
}

const UpdateTodo: React.FC<UpdateTodoProps> = observer(({ todoId, handleCloseUpdate }) => {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleUpdateTodo = () => {
    todoStore.updateTodo(todoId, newTitle, newDescription);
    // Reset the form after updating the todo
    setNewTitle('');
    setNewDescription('');
    handleCloseUpdate();
  };
 
 

  return (
    <div className="fixed  inset-0 flex flex-col items-center justify-center  z-50 bg-gray-500 bg-opacity-75 text-gray-600">
      <div  className='flex flex-col gap-2 justify-center bg-gray-400 bg-opacity-75 p-7'>
        <input
          type="text"
          placeholder="New Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          placeholder="New Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="p-2 border border-gray-300 rounded mb-2"
        />
        <div className="flex justify-end">
          <button
            onClick={handleUpdateTodo}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
          >
            Update Todo
          </button>
          <button
            onClick={handleCloseUpdate}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
});

export default UpdateTodo;
