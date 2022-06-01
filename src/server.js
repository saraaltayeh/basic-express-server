'use strict';
const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const app = express();

app.use(logger);

app.get("/", (req, res) => {
    res.status(200).send('hello ');
});

app.get("/person",validator, (req,res)=>{
    res.send({ name: req.query.name})
        
});

app.get("/data", (req, res) => {
    res.json({
        id: 1,
        name: 'sara altayeh',
        email: 'saraaltayeh1@gmail.com'
    });
});

app.get('/bad', (req, res) => {
    let num = 30;
    let result = num.forEach((x) => {
        console.log(x);
    });
    res.status(500).send(result);
});


app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => {
        console.log(`i'm listening on port${port}`);
    });
}
module.exports = {
    app: app,
    start: start,
}