const {Router} = require('express')
const router =Router()
// Get and calculate the fibonacci number accourding to the index
const getFibonacciIndex = index => {
    var i;
    var indexNumber = []; // Initialize array!
    indexNumber[0] = 0;
    indexNumber[1] = 1;
    for (i = 2; i <= index; i++) {
      // Next fibonacci number = previous + one before previous
      indexNumber[i] = indexNumber[i - 2] + indexNumber[i - 1];
    }
    return {
        result: indexNumber[index]
    }
}
router.get('/', (req, res)=>{
    res.json({"greeting": "this is the fibonacci get route"});
})
//routes
router.post('/',(req,res)=>{
    const {index} = req.body
    res.json(getFibonacciIndex(index))
})


module.exports = router