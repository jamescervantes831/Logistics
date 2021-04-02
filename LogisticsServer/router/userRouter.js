const { GetAllUsers, GetUser, AddUser, ChangeUserPassword, DeleteUser } = require('../controller/userController')
const router = require('express').Router()

// starts from host:port/users
router.get('/', GetAllUsers)
router.get('/:userid', GetUser)
router.post('/', AddUser)
router.put('/:userid', ChangeUserPassword)
router.delete('/:userid', DeleteUser)
module.exports = router;