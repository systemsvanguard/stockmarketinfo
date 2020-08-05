// server.js ~  starting point
require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
var app = express();

/* Use View Engine.  Must come before routing. */
app.engine('handlebars', exphbs() );
app.set('view engine', 'handlebars' );

// use body-parser
app.use(bodyParser.urlencoded( { extended: true } ) );

// configure routing
app.get('/', function(req, res) {
  res.render('home', {
    tagline:siteTagline,
    pageTitle : "Welcome to DynaSmart Stocks"
  });
} );
app.get('/about', function(req, res) {
  res.render('about');
} );
app.get('/contact', function(req, res) {
  res.render('contact');
} );
app.get('/services', function(req, res) {
  res.render('services');
} );


// configure static files location
// app.use(express.static((__dirname + '/public' )) );
app.use(express.static(path.join((__dirname + '/public' ))) );

// universal variables
const siteTagline = "Committed to your success";

// start the web server
app.listen(port, () => {
  console.log(`Our web app is now running on port ${port} at http://localhost:${port}/. Enjoy!`);
} );