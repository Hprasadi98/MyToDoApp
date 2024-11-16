const ToDOModel = require('../models/TodoModel')

module.exports.getToDo = async (req, res) =>{
    try {
        const toDo = await ToDOModel.find()
        res.send(toDo)
    } catch (error) {
        console.error(error)
    }
}

module.exports.createToDo = async (req, res) =>{
    try {
        const {title, description} = req.body;
        const data = await ToDOModel.create({ title, description });
        console.log("added", data)
        res.send(data)
    } catch (error) {
        console.error(error)
    }
}

module.exports.deleteToDo = async (req, res) =>{
    try {
        const {id} = req.params;
        const data = await ToDOModel.findByIdAndDelete(id);
        console.log("deleted", data)
        res.send(data)
    } catch (error) {
        console.error(error)
    }
}