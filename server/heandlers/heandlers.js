const famileyModel = require('../models/family')
const tasksModel = require('../models/tasks')

const allFamily = (req, res) => {
    famileyModel.find({}, { _id: 0, __v: 0 }, (err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const allTasks = (req, res) => {
    tasksModel.find({}, {}, (err, data) => {
        if (err) throw err
        res.json(data)
    })
}

const newTask = (req, res) => {
    name = req.body.name
    console.log(req.body)
    famileyModel.find({ name }, {}, (err, data) => {
        if (err) throw err
        req.body.familyID = data[0]._id
        req.body.name = name
        const newTask = new tasksModel({ description, date, name, familyID } = req.body)
        newTask.save()
        res.json(newTask)
    })
}

const newFam = (req, res) => {
    const newFam = new famileyModel({ neme, nik, description } = req.body)
    newFam.save()
    res.json(newFam)
}

const deleteTask = (req, res) => {
    let id = req.params.id;
    tasksModel.deleteOne({ _id: id }, (err) => {
        if (err) throw err
        res.json('deleted')
    })
}

const delFam = (req, res) => {
    let name = req.params.name
    famileyModel.deleteOne({ name: name }, (err) => {
        if (err) throw err
        res.json('deleted')
    })
}

const editFam = (req, res) => {
    let name = req.params.name
    famileyModel.find({ name: name }, { _id: 0, __v: 0 }, (err, data) => {
        if (err) throw err
        let name = req.params.name
        let newName = req.query.name
        let nik = req.query.nik
        let description = req.query.desc
        console.log(req.query)
        famileyModel.updateOne({ name: name }, { name: newName, nik: nik, description: description }, (err, data) => {
            if (err) throw err
            console.log(name, nik, description)
            console.log('updated', data.n, 'document')
        })
        res.json(data)
    })
}

const oneFamily = (req, res) => {
    console.log(req.params)
    famileyModel.find({ name: req.params.name }, {}, (err, data) => {
        if (err) throw err
        res.json(data[0])
    })
}

module.exports = { allFamily, allTasks, newTask, newFam, deleteTask, delFam, editFam, oneFamily }
