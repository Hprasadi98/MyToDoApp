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
        res.send(data)
    } catch (error) {
        console.error(error)
    }
}