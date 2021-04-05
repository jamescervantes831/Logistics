const router = require('express').Router()
var { getAllProviders, getProvider, addProvider } = require('../controller/providerController')


router.get('/', getAllProviders);
router.get('/:providerid', getProvider);
router.post('/', addProvider);

module.exports = router;