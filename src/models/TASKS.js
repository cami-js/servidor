const { Schema, model } = require("mongoose");

const TaskSchema = new Schema(
    {
        task:{
            type:String,
            min: 10,
            max: 100,
            required:true
        },
        description:{
            type:String,
            min:10,
            max:300
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = model("task",TaskSchema);

