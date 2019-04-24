var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var db = require('../database');
// var items = require('../database-mongo');
var app = express();
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));



app.get ('/home',(req, res) =>{
  db.getStyles(data => {
    res.status(200).send(data)
  })
});

app.get  ('/style', (req,res) => {
  app.all([
    db.getInfoByStyle(),
    db.imagesByStyle()
  ])
    .then (data => {
      res.status(200).send(data)
    })
    .catch (err => {
      console.log err;
    })
})

app.post ('/login',(req, res) => {
  db.getUser(data => {
    res.status(200).send(data)
  })
});

app.post ('/login',(req, res) => {
  db.getApp(data => {
    res.status(200).send(data)
  })
});
