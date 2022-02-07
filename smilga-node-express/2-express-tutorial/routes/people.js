const express = require('express')
const router = express.Router()

const {
	getPeople,
	createPerson,
	updatePerson,
	deletePerson
} = require('../controllers/people')

//the default method the browser performs
//app.get('/', getPeople)
//app.post('/', createPerson)
//app.post('/postman', createPersonPostman)
//app.put('/:id', updatePerson)
//app.delete('/id', deletePerson)

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route(':id').put(updatePerson).delete(deletePerson)

module.exports = router