var express = require('express')
var app     = express();

function getRandomNum(){
  return parseInt(Math.random()*300);
}

function randomSelect(){
  var rate = getRandomNum();
  if(rate == 0){
    return true;
  }
  return false
}

app.get('/getRandomNum/',function(req, res){
  res.send(randomSelect());
})

var server = app.listen(5555, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('server listening at http://%s:%s', host , port);
})
// //test程序
// var times = 0;
// var circle = setInterval(function(){
//   if(randomSelect()){
//     console.log(times);
//     clearInterval(circle);
//   }
//   times++;
// },0)