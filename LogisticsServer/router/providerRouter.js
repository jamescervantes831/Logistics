const router = require('express').Router()
var { getAllProviders, getProvider, getProviderByUser, addProvider, updateProvider, deleteProvider } = require('../controller/providerController')


router.get('/', getAllProviders);
router.get('/:userid', getProviderByUser)
router.get('/:userid/:providerid', getProvider);
router.post('/', addProvider);
router.put('/:providerid', updateProvider)
router.delete('/:providerid', deleteProvider)


module.exports = router;