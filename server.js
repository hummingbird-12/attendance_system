var path = require('path');
const express = require('express'),
	app = express(),
	bodyParser = require('body-parser');
port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');
app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes.js'); //importing route
routes(app); //register the route
