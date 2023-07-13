

const mongoose = require("mongoose")

const oemSpecsSchema = new mongoose.Schema(
            {
              
                "title": {
                    type: String,
                    required: true
                  },
                  "description":{
                    type:String,
                    required:true
                  },
                  "completed":{
                    type:Boolean,
                    default:false
                  }
            },
            {
                versionKey: false,
                timestamps:true
            }
    )

    const todomodel = mongoose.model("TodoApp",oemSpecsSchema );

    module.exports = todomodel