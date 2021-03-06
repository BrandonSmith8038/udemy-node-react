const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express Will Serve Up Prodution
  // Like Our main.js file or main.css file
  app.use(express.static('client/build'));
  // Express Will Serve Up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

let PORT;

if (process.env.NODE_ENV === 'production') {
  PORT = process.env.PORT;
} else if (process.env.NODE_ENV === 'C9') {
  PORT = 8081;
} else {
  PORT = 5000;
}

app.listen(PORT, process.env.IP, () => {
  console.log(`App Started On Port ${process.env.IP}:${PORT}`);
});
