const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      methodOverride = require('method-override'),
      expressSanitizer = require('express-sanitizer');

// Routes
let blogRoutes = require('./routes/blogRoutes')

// App Settings
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride('_method'));
app.use('/blogs',blogRoutes);

// Database Setup
mongoose.connect('mongodb://localhost:27017/bloggit_app',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }, () => console.log('Bloggit DB Connected'));

let seedDatabase = require('./seed');
seedDatabase();

// Home
app.get('/', (req, res) => {
    res.redirect('/blogs');
});


app.listen(5060, () => console.log('Bloggit Server Running'));