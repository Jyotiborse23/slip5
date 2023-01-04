var http=require('http');
var fs=require('fs');
fs.appendFile('input1.txt','this is my forst nodejs program',function(err)
{
    if(err) throw err;
    console.log('file has been saved');
  
});

