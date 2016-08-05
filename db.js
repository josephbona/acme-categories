var _data = {
  Appetizers: [{
    name: 'Mozzarella Sticks'
  }],
  Entrees: [{
    name: 'Chicken Parmagiana'
  }, {
    name: 'Spaghetti and Meatballs'
  }],
  Desserts: [{
    name: 'Italian Cheesecake'
  }],
};

module.exports = {
  getCategories: function(){
    return _data;
  },
  addCategory: function(name){
    _data[name] = [];
  },
  getProducts: function(category){
    return _data[category];
  },
  addProduct: function(category,product){
    _data[category].push({name: product});
  },
  deleteProduct: function(category,product){
    _data[category].splice(product, 1);
  }
}
