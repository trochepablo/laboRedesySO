'use strict';
 
const express = require('express');
const exec = require('child_process').execSync;
 
// Constants
const PORT = 8080;
 
// App
const app = express();
app.get('/', function (req, res) {
  var result=""+exec( "ping -c 1 superdatabase" );
 
  while ( result.indexOf("\n")!=-1 )
    result=result.replace("\n","<br/>");
 
  res.send( '<h1>Test ping</h1>'+result );
});
 
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
