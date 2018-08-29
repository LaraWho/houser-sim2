const express = require('express')
    , massive = require('massive')
    , session = require('express-session')
    , bodyParser = require('body-parser');
    // , path = require('path');


    require('dotenv').config();
    const app = express();
    // app.use(express.static(path.join(__dirname, '/build')));

    app.use(bodyParser.json());

    const house_cntrl = require('./house_controller');
    const login_cntrl = require('./login_controller');

    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 14
        }
    }))


    massive(process.env.CONNECTION_STRING).then(db => {
        console.log("database connected!");
        app.set('db', db)
    }).catch( error => console.error('ERROR!', error))


    //authorisation endpoints
    app.post('/auth/login', login_cntrl.login);
    app.post('/auth/register', login_cntrl.register);
    app.delete('/auth/logout', login_cntrl.logout);

    //properties endpoints
    // app.post('/properties', house_cntrl.create);
    app.get('/properties', house_cntrl.view_all);
    // app.delete('/properties/:id', house_cntrl.delete);

   

    app.listen(6789, ( ) => {
        console.log(`Listening on port: 6789`)
    });