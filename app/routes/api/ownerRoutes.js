const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/ownerDao')

router.get('/', (req, res)=> {
    dao.findAll(res, 'owner')
})

router.get('/:id', (req, res)=> {
    dao.findById(res, 'owner', req.params.id)
})

router.post('/create', (req, res) => {
    dao.create(req, res)
})

router.patch('/update', (req, res) => {
    dao.update(req, res)
})

module.exports = router