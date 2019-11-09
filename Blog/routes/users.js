var express = require('express');
var router = express.Router();
var data = require('./data.json');

router.get('/list',(req,res)=>{
  var listdata=data.chapterList;
  res.render('list',{listdata});
})

router.get('/error',(req,res)=>{
  res.render('loginerror');
})

router.post('/form',(req,res)=>{
  var username=data.users[0].username;
  var pwd=data.users[0].password;
  if(req.body.username===username && req.body.pwd===pwd){
    res.end("true");
  }else{
    res.end("false");
  }
})

module.exports = router;