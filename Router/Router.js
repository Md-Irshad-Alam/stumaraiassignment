
const express = require('express')
const router = express.Router();
const {addtodo, Deletetodo, Updatetodo, getAll, toggleTodoStatus}  = require('../Controller/auth')

router.post("/add",addtodo )
router.get("/getAll",getAll )
router.put("/edit/:id" ,Updatetodo )
router.put("/toggle/:id" ,toggleTodoStatus )
router.delete("/remove/:id",Deletetodo )

module.exports = router