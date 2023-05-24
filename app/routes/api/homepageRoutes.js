const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/homepageDao')

router.get('/', (req, res)=> {
    dao.findAll(res, 'homepage')
})

router.get('/:id', (req, res)=> {
    dao.findById(res, 'homepage', req.params.id)
})

router.post('/create', (req, res) => {
    dao.create(req, res)
})

router.patch('/update', (req, res) => {
    dao.update(req, res)
})

module.exports = router