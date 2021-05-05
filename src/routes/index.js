const {Router} = require('express')
const router =Router()
//routes
router.get('/', (req, res)=>{
    res.json({"greeting": "hello world"});
})

module.exports = router

