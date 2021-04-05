const { GetAllNotes, GetNote, GetNotesByProvider, AddNote, UpdateNote, DeleteNote } = require('../controller/noteController')
const router = require('express').Router()

// starts from host:port/users
router.get('/', GetAllNotes)
router.get('/:providerid', GetNotesByProvider)
router.get('/:providerid/:noteid', GetNote)
router.post('/:providerid', AddNote) // note must be asssociated with a provider so pass it in route
router.put('/:providerid/:noteid', UpdateNote)
router.delete('/:providerid/:noteid', DeleteNote)
module.exports = router;