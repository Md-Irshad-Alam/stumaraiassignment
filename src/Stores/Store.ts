
import { action, computed, makeObservable, observable } from "mobx";
import { json } from "node:stream/consumers";
import { todo } from "node:test";
import React from "react";
interface TodoItems {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

class TodoStoreImp {
    todos : TodoItems[] = [];
    
    constructor(){
        makeObservable(this, {
            todos:observable,
            togglestatus:action,
            updateTodo: action,
            deleteTodo: action,
            status:computed,
        })
        // this.loadTask();
       
    }
// store in localstoreage 
    storeinlocal(){
      localStorage.setItem("task", JSON.stringify(this.todos));

    }


    // addTodo(title:string, description:string){
      
    //     const items: TodoItems ={
    //         id: Math.floor(Math.random() * 100 ),
    //         title,
    //        description,
    //        completed:false
    //     };
    //     this.todos.push(items)
    //     this.storeinlocal();
    // }
    addTodo = (title: string, description: string) => {
        const items: TodoItems = {
          id: Math.floor(Math.random() * 100),
          title,
          description,
          completed: false,
        };
        
      
        // Retrieve existing tasks from localStorage
        const storedTasks = localStorage.getItem("task");
        const existingTasks = storedTasks ? JSON.parse(storedTasks) : [];
      
        // Merge the existing tasks with the new task
        const updatedTasks = [...existingTasks, items];
      
        // Save the updated tasks to localStorage
        localStorage.setItem("task", JSON.stringify(updatedTasks));
        this.storeinlocal();
        this.todos.push(items);
      };

    togglestatus(id:number){
        const task = this.todos.find(item => item.id === id);
        console.log(task)
        if (task) {
            task.completed = !task.completed;
            this.storeinlocal();
        } 
       
    }

        updateTodo = (id: number, newTitle: string, newDescription: string) => {
            const task = this.todos.find((item) => item.id === id);
            if (task) {
            task.title = newTitle;
            task.description = newDescription;
            this.storeinlocal();
            }
        };

    
      deleteTodo = (id: number) => {
        const index = this.todos.findIndex((item) => item.id === id);
        if (index >= 0) {
          this.todos.splice(index, 1);
          this.storeinlocal();
        }
      };
   

    // load data when the page get closed 

    // loadTask() {
    //     if (typeof window !== "undefined") {
    //     const storedTasks = localStorage.getItem("task");
    //     this.todos = storedTasks ? JSON.parse(storedTasks) : [];
    //     }
    // }
    
   get status(){
    let completed = 0, remaining =0;
    this.todos.forEach(todo=> {
        if(todo.completed){
            completed++;
        }else{
            remaining ++;
        }
    });
    return {completed, remaining}
   }
}

const todoStore = new TodoStoreImp();
export default todoStore

