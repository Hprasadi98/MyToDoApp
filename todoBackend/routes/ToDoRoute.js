const {Router} = require('express');
const { getToDo, createToDo, deleteToDo } = require('../controllers/TodoController');

const router = Router();

router.get('/GET/tasks', getToDo)

router.post('/POST/tasks', createToDo)

router.post('/DELETE/tasks/:id', deleteToDo)

module.exports = router;