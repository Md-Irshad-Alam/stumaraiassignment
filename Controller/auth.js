
const todomodel = require('../Model/model')

const addtodo = async(req,res)=>{
        try {
            let {title, description} =  req.body;
            let todo = await todomodel.find({title})
            if(todo){
                todo =  await todomodel.create(req.body)
                return res.status(200).send({title:todo.title, description:todo.description, id: todo._id });
            }else{
                return  res.status(200).send("task is already exit ")
            }
        }
        catch (error) {
            console.log(error)
            return res.status(400).send({error})
        }
}
const Deletetodo = async(req,res)=>{
    try {
        let id = req.params.id

    let todo = await todomodel.findByIdAndDelete(id)
    if(!todo){
        return res.status(404).json({ error: 'task not found' });
    }
    res.status(200).json({ Message: 'task is deleted now ' });

    }
    catch (error) {
        console.log(error)
        return res.status(400).send({error})
    }
}


const Updatetodo = async(req,res)=>{
    try {
        let id = req.params.id
          console.log(id);
      let todo = await todomodel.findByIdAndUpdate(
                id, req.body
            )
           
            if (!todo) {
                return res.status(404).json({ error: 'Marketplace entry not found' });
              }
          
              res.json(todo);
    }
    catch (error) {
        console.log(error)
        return res.status(400).send({error})
    }
}
const getAll = async (req, res) => {
    try {
      let allTodo = await todomodel.find();
      if (allTodo) {
        return res.status(200).json(allTodo);
      }
      return res.status(404).send("No todos found");
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: "Server error" });
    }
  };

const toggleTodoStatus = async (req, res) => {
    try {
      const todoId = req.params.id;
  
      // Retrieve the todo item from the database
      const todo = await todomodel.findById(todoId);
  
      if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
      }


      // Toggle the status
      todo.completed = !todo.completed;
  
      // Save the updated todo item
      await todo.save();
  
      return res.status(200).json(todo);
    } catch (error) {
      console.error("Error toggling todo status:", error);
      return res.status(500).json({ error: "Server error" });
    }
  };
  


module.exports ={
    addtodo, 
    Updatetodo,
    Deletetodo,
    getAll,
    toggleTodoStatus
}