const router = require('express').Router()
var { getAllProviders, getProvider, addProvider, updateProvider, deleteProvider } = require('../controller/providerController')


router.get('/', getAllProviders);
router.get('/:providerid', getProvider);
router.post('/', addProvider);
router.put('/:providerid', updateProvider)
router.delete('/:providerid', deleteProvider)


module.exports = router;