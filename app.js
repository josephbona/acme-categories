var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var swig = require('swig');
swig.setDefaults({ cache: false });

app.use(express.static( __dirname + '/public'));

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use('/', require('./routes'));

app.listen(3000, function(){
  console.log('App is running on port 3000.');
});