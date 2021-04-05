const { getAllTitles } = require('../controller/titleController');

const router = require('express').Router();


router.get('/', getAllTitles );


module.exports = router;