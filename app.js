const express = require("express");

//Creating the application
const app = express();

//makes app listen to port
const port = process.argv[2] || process.argv.PORT || 3000;
const server = app.listen(port,function(){
    console.log(`Cart app listening at http://localhost:${port}`)
});

app.use(express.static('public'))
app.get('/', function(req,res){
    res.sendFile('index.html', {root: __dirname})
});