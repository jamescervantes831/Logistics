const router = require('express').Router()
var { getAllContacts, getContactById, addContact, updateContact, deleteContact } = require('../controller/contactController')


router.get('/', getAllContacts);
router.get('/:providerid/:contactid', getContactById);
router.post('/:providerid', addContact);
router.put('/:providerid/contactid', updateContact);
router.delete('/:providerid/:contactid', deleteContact)

module.exports = router;