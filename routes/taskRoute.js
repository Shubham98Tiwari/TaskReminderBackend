const express = require('express')
const router = express.Router()
const taskService = require('./../services/taskService')
router.get('/:userId', async(req, res)=>{
    let userId = req.params.userId
    console.log("userId: ", userId)
    let result = await taskService.findTaskByIdObj({userId: userId})
    if(result.error){
        res.status(404)
    }
    else{
        res.status(200)
    }
    res.send(result)
} )
router.post('/createTask', async(req, res)=>{
    console.log("req", req.body)
    let result = await taskService.createEntry(req.body)
    if(result.error){
        res.status(404)
    }
    else{
        res.status(200)
    }
    res.send(result)
} )
router.get('/deleteTask/:taskId', async(req, res)=>{
    let taskId = req.params.taskId
    console.log("taskId: ", taskId)
    let result = await taskService.deleteByIdObj ({_id : taskId})
    if(result.error){
        res.status(404)
    }
    else{
        res.status(200)
    }
    res.send(result)
} )
module.exports = router