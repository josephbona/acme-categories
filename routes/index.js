var router = require('express').Router();
var Categories = require('../db.js');

router.use('/categories', require('./categories'));
router.get('/', function(req, res){
  res.render( 'index', { title: 'Add a Category', categories: Categories.getCategories() } );
});

module.exports = router;