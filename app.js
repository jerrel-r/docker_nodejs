const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const request = require ('request');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// Passport Configuration
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
let ejs = require('ejs'),
people = ['geddy', 'neil', 'alex'],
html = ejs.render('<%= people.join(", "); %>', {people: people});

app.use(express.static('public'));

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

var customerA;
app.post('/CAPI', (request, response) => {
  var dataA = "";
  request.on("data",dataChunk => dataA += dataChunk);
  request.on("end",()=>{
    customerA = dataA

      response.json({
          status: "success",
          message: customerA,
      });
      console.log(customerA);
      console.log("dit is DATA a" + dataA);
      module.exports.customerA = customerA;
      ;});
      //console.log(customerA);

});

var maxPpl = 50;
app.post('/storeOne', urlencodedParser, function(req, res){
  console.log(req.body.maximumAllowedCustoemrs);
  maxPpl = req.body.maximumAllowedCustoemrs;
  maxPpl = parseInt(maxPpl)
  console.log(maxPpl);
  module.exports.maxPpl = maxPpl;
});


app.get('/CAPI', (request, response) => {
  response.json(maxPpl)
});

const api_url = "https://www.lectserve.com/today";

app.get('/date', function(req,res){
  request(api_url,function(error,response, body){

      dateToday = JSON.parse(body);

      res.json({
          dateOfToday : dateToday.daily.date
      });
  });
});
