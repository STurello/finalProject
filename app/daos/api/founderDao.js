// get access to database
const con = require('../../config/dbconfig')
// get access to daoCommon
const daoCommon = require('../daoCommon')

const founderDao = {
    table: 'founder',
    ...daoCommon, 

    create: (req, res) => {
        if(Object.keys(req.body).length === 0) {
            res.json({
                "error":true,
                "message": "No fields to create."
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)
        }
    }
}

module.exports = founderDao