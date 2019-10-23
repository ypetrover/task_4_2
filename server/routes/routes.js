const express = require('express');
const router = express.Router();
const heandler = require('../heandlers/heandlers')

router.get('/all-family', (req, res) => {
    heandler.allFamily(req, res)
})

router.get('/all-family/:name', (req, res) => {
    heandler.oneFamily(req, res)
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
    heandler.deleteTask(req, res)
})

router.delete('/delete-familyer/:name', (req, res) => {
    heandler.delFam(req, res)
})

router.get('/edit-familyer/:name', (req, res) => {
    heandler.editFam(req, res)
})

module.exports = router
