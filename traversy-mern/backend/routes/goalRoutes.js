const express = require('express')
router = express.Router()
const { 
    getGoals, 
    setGoals, 
    updateGoals, 
    deleteGoals  
} = require('../controllers/goalController')

//router.get('/', getGoals)
//router.post('/', setGoals)
router.route('/')
    .get(getGoals)
    .post(setGoals)


//router.put('/:id', putGoals)
//router.delete('/:id', deleteGoals)
router.route('/:id')
    .put(updateGoals)
    .delete(deleteGoals)




module.exports = router