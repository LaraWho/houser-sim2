const express = require('express')
    , massive = require('massive')
    , bodyParser = require('body-parser');
    // , path = require('path');


    require('dotenv').config();
    const app = express();
    // app.use(express.static(path.join(__dirname, '/build')));

    app.use(bodyParser.json());

    const cntrl = require('./house_controller');

    massive('postgres://vvckwcbyqchuph:1740225801a0881163803774fdadf6efdc9084ffe81c10989e5c905773c81e9b@ec2-54-243-59-122.compute-1.amazonaws.com:5432/dc76238vsvai9m?ssl=true').then(db => {
        console.log("database connected!");
        app.set('db', db)
    }).catch( error => console.error('ERROR!', error))

   

    app.listen(6000, ( ) => {
        console.log(`Listening on port: 6000`)
    });