const {Router} = require('express');
const { getToDo, createToDo } = require('../controllers/TodoController');

const router = Router();

router.get('/gettodos', getToDo)

router.post('/posttodos', createToDo)

module.exports = router;