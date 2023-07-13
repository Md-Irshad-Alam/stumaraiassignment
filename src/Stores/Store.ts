import { action, computed, makeObservable, observable } from "mobx";
import axios from "axios";
import { ObjectId } from 'mongodb';
interface TodoItems {
  _id: String;
  title: string;
  description: string;
  completed: boolean;
}

class TodoStoreImp {
  todos: TodoItems[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      toggleStatus: action,
      updateTodo: action,
      deleteTodo: action,
      status: computed,
    });
    this.loadTasks();
  }

  addTodo = async (title: string, description: string) => {
    try {
      const newItem: TodoItems = {
        _id: String(Math.floor(Math.random() * 100)),
        title,
        description,
        completed: false,
      };

      const response = await axios.post("https://test-osum.onrender.com/todo/add", {
        title, description
      });
      const createdTodo = response.data;

      this.todos.push(createdTodo);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  toggleStatus = async (_id: String) => {
    try {
      const todo = this.todos.find((item) => item._id === _id);
      console.log(_id);
  
      if (todo) {
        todo.completed = !todo.completed;
        await axios.put(`https://test-osum.onrender.com/todo/toggle/${_id}`, todo);
      } else {
        console.error(`Todo not found with _id: ${_id}`);
      }
    } catch (error) {
      console.error("Error toggling todo status:", error);
    }
  };
  

  updateTodo = async (_id: String, newTitle: string, newDescription: string) => {
    try {
      const todo = this.todos.find((item) => item._id == _id);
      if (todo) {
        todo.title = newTitle;
        todo.description = newDescription;

        await axios.put(`https://test-osum.onrender.com/todo/edit/${_id}`, todo);
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  deleteTodo = async (_id: String) => {
    try {
      await axios.delete(`https://test-osum.onrender.com/todo/remove/${_id}`);

      const index = this.todos.findIndex((item) => item._id === _id);
      if (index >= 0) {
        this.todos.splice(index, 1);
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  loadTasks = async () => {

    if (typeof window !== "undefined") {
    try {
      const response = await axios.get("https://test-osum.onrender.com/todo/getAll");
      this.todos = response.data;
      console.log(response.data)
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  }
  };

  get status() {
    let completed = 0,
      remaining = 0;
    this.todos.forEach((todo) => {
      if (todo.completed) {
        completed++;
      } else {
        remaining++;
      }
    });
    return { completed, remaining };
  }
}

const todoStore = new TodoStoreImp();
export default todoStore;
