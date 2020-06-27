<<<<<<< HEAD
//Dependancies
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
// const helpers = require('./utils/helper');


const app = express();
const PORT = process.env.PORT || 3001;

//express session
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};


=======
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
>>>>>>> 8782a8bfea099fd2d231bac7be6e8ce35f4808da

// turn on routes
app.use(routes);

<<<<<<< HEAD
// turn on connection to db and server
//without force:false it would drop and re-create all of the database tables on startup
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
=======
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
   app.listen(PORT, () => console.log('Now listening'));
>>>>>>> 8782a8bfea099fd2d231bac7be6e8ce35f4808da
});