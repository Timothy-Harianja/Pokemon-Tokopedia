// import express from 'express';
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const compression =  require('compression');
const enforce = require('express-sslify');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//if(process.env.NODE_ENV == 'production') {
    //app.use(enforce.HTTPS({ trustProtoHeader: true }));
    //app.use(compression());
    //serve service worker for PWA
    // app.get('/service-worker.js', (req, res) => {
    //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'service-worker.js'));
    // });


    //_dirname is part of Node.js, it returns the current directory
    //path.join calculates the overall directory
    // exprress static servers a file from the given path
    app.use(express.static(path.join(__dirname, 'client/build')));

    //basically serving the react files, i believe so
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, './client/build', 'index.html'))

        if (err) {
            res.status(500).send();
        }
    }) 

// }

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
})

