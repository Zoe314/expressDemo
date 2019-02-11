var express = require('express');
var app = new express();
app.get('/',function(req,res){
    res.send('这是一个express应用')
})

app.listen(3000);
console.log('监听事件...');