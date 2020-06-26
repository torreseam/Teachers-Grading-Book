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



// turn on routes
app.use(routes);

// turn on connection to db and server
//without force:false it would drop and re-create all of the database tables on startup
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});