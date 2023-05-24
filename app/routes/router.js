const express = require('express')
const router = express.Router()
const PORT = process.env.PORT ||3000


router.get('/', (req, res)=> (
    res.json({
        'All Companies': `http://localhost:${PORT}/api/website`,
        'All Homepages': `http://localhost:${PORT}/api/homepage`,
        'All Founders': `http://localhost:${PORT}/api/founder`,
        'All Owners': `http://localhost:${PORT}/api/owner`,
    })
))

router.use('/api/website', require('./api/websiteRoutes'))
router.use('/api/homepage', require('./api/homepageRoutes'))
router.use('/api/founder', require('./api/founderRoutes'))
router.use('/api/owner', require('./api/ownerRoutes'))


module.exports = router