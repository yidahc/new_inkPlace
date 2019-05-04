const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');
const route = require('../server/routes.js')
const db = require('../database/mysql.js')
const app = express();
const nodemailer = require('nodemailer')
const path = require('path')
const email = require('../server/email.js')

//middleware
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + "/../client/dist"));

//HTTP Requests go here

// react-router fallback so we can reload without visiting root

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/../client/dist/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

app.get("/home", route.getStyles)

app.get("/home-images", route.imagesByStyle)

app.post("/book", route.getApp)

app.post('/api/form',email.sendMail)

module.exports = app;