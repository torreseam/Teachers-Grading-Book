const path = require('path');
const express = require('express');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const session = require('express-session');


const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
   secret: 'TellMeASecret',
   cookie: {},
   resave: false,
   saveUninitialized: true,
   store: new SequelizeStore({
      db: sequelize
   })
};

const app = express();
const PORT = process.env.PORT || 3001;

const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });
const session = require('express-session');


const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'TellMeASecret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< HEAD
=======
app.use(session(sess));
>>>>>>> c82e0bcba8ec58947806576f7a20db752575bd8d

// turn on routes
app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
<<<<<<< HEAD
  app.listen(PORT, () => console.log('@#$ Now listening $#@'));
=======
   app.listen(PORT, () => console.log('Now listening'));
>>>>>>> c82e0bcba8ec58947806576f7a20db752575bd8d
});