var router = require('express').Router();
module.exports = router;

var Category = require('../db.js');

router.get('/:category', function(req, res){
  res.render('category', {
    title: req.params.category,
    categories: Category.getCategories(),
    products: Category.getProducts(req.params.category)
  });
});

router.post('/:category/products', function(req, res){
  Category.addProduct(req.params.category, req.body.name);
  res.redirect('/categories/' + req.params.category);
});

router.delete('/:category/products/:idx', function(req, res){
  Category.deleteProduct(req.params.category, req.params.idx);
  res.redirect('/categories/' + req.params.category);
});

router.post('/', function(req, res){
  Category.addCategory(req.body.name);
  res.redirect('/categories/' + req.body.name);
});

router.get('/', function(req, res){
  res.send('categories index hit');
});

