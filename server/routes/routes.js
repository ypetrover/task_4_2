const express = require('express');
const router = express.Router();
const heandler = require('../heandlers/heandlers')

router.get('/all-family', (req, res) => {
    heandler.allFamily(req, res)
})

router.get('/all-tasks', (req, res) => {
    heandler.allTasks(req, res)
})

router.post('/new-task', (req, res) => {
    heandler.newTask(req, res)
})

router.post('/new-familyer', (req, res) => {
    heandler.newFam(req, res)
})

router.delete('/delete/:id', (req, res) => {
    console.log('gg')
    heandler.deleteTask(req, res)
})

module.exports = router