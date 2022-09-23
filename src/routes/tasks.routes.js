const { getTask, postTask, putTask, deleteTask } = require('../controllers/tasks.controllers');


const router = require('express').Router();



router.get('/task', getTask);

router.post('/task', postTask);

router.put('/task/:idTask', putTask);

router.delete('/task/:idTask', deleteTask)

module.exports = router;