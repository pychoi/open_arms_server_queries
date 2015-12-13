var express = require('express');
var app = express();

var index = require('./routes/index');
var getCategories = require('./routes/getcategories');
var getMealCount = require('./routes/getmealcount');
var getMeals = require('./routes/getmeals');
var createMenu = require('./routes/createmenu');
var getMenu = require('./routes/getmenu');

app.set("port", process.env.PORT || 5000);

app.use('/getmeals', getMeals);
app.use('/createmenu', createMenu);
app.use('/getmenu', getMenu);
app.use('/getcategories', getCategories);
app.use('/getmealcount', getMealCount);
app.use('/', index);

app.listen(app.get("port"), function(){
    console.log("Listening on port: ", app.get("port"));
});