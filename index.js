const express = require('express')
const path = require('path')
var bodyParser = require('body-parser')
var session = require('express-session');
var flash = require('connect-flash');
const mongoose = require('mongoose');
const morgan = require("morgan");

var clashApiRoutes = require('./routes/clashApiRoutes');

const PORT = process.env.PORT || 5000
const API_PATH = '/api/v1'

// DB Config
const db = require('./config/keys').mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
mongoose.Promise = global.Promise;

var app = express();
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// For Sessions  
app.use(session({
  secret: 'secretkey',
  saveUninitialized: true,
  resave: true

}));

app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.flash('user');
  next();
});


// express()
app.use(express.static(path.join(__dirname, 'public')))

  .get('/', (req, res) => res.send({
    message : 'Wellcome to clashRoyale API',
    links: ['https://clashroyaleapichto.herokuapp.com/api/v1/clashRoyale/clashs'
  ]
  }))

  .use(API_PATH + '/clashRoyale', clashApiRoutes)

  .listen(PORT, () => console.log(`Listening on ${PORT}`));


// handle 404 error
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
})
