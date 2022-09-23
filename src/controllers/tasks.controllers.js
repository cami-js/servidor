const TaskModel = require('../models/TASKS');

const ctrlTask = {};

ctrlTask.getTask = async (req, res) => {
    const Task = await TaskModel.find();

    return res.json(
        {
            message: "Tareas Encontradas.",
            Task
        }
    )
}

ctrlTask.postTask = async (req, res) => {
    const {nombre, motivo, fecha, estado} = req.body;

    const newTask = new TaskModel(
        {
            nombre,
            motivo,
            fecha,
            estado
        }
    );

    const Task = await newTask.save();

    return res.json(
        {
            message:"Tarea guardada correctamente.",
            Task
        }
    )

};

ctrlTask.putTask = async (req, res) => {
    const id = req.params.idTask
    const tarea = {task,description} = req.body
    const taskUpdate = await Task.findByIdAndUpdate(id,tarea, (err)=> {
        if (err){
            console.log(err)
        }
        else{
            console.log("Updated : ",tarea);
        }
    })
    
    return res.json(taskUpdate)
};

ctrlTask.deleteTask = async (req, res) => {
    const id = req.params.idTask
    await Task.findByIdAndDelete(id, (err)=> {
        if (err){
            console.log(err)
        }
        else{
            console.log("Deleted");
        }
    })

};

module.exports = ctrlTask;