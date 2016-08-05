var router = require('express').Router();
var Category = require('../db.js');//models are always singular

router.use('/categories', require('./categories'));
router.get('/', function(req, res){
  res.render( 'index', { title: 'Add a Category', categories: Category.getCategories() } );
});

module.exports = router;
