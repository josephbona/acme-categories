var categories = require('express').Router();
var Categories = require('../db.js');

categories.get('/:category', function(req, res){
  res.render('category', {
    title: req.params.category,
    categories: Categories.getCategories(),
    products: Categories.getProducts(req.params.category)
  });
});
categories.post('/:category/products', function(req, res){
  Categories.addProduct(req.params.category, req.body.name);
  res.redirect('/categories/' + req.params.category);
});
categories.delete('/:category/products/:idx', function(req, res){
  Categories.deleteProduct(req.params.category, req.params.idx);
  res.redirect('/categories/' + req.params.category);
});
categories.post('/', function(req, res){
  Categories.addCategory(req.body.name);
  res.redirect('/categories/' + req.body.name);
});
categories.get('/', function(req, res){
  res.send('categories index hit');
});

module.exports = categories;