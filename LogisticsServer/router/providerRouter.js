const router = require('express').Router()
var { getAllProviders, getProvider } = require('../controller/providerController')


router.get('/', getAllProviders);
router.get('/:providerid', getProvider)

module.exports = router;