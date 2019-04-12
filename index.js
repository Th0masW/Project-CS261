const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/index');


//define app
const app = express()

//Set EJS as view engine
app.set('view engine', 'ejs')
//Define folders
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define Routes
 routes(app);

//define port
app.set('port', (process.env.PORT || 3000));

// Start the server
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
