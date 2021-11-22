const express = require("express");

//Creating the application
const app = express();

//makes app listen to port
const port = process.argv[2] || process.argv.PORT || 3000;
const server = app.listen(port,function(){
    console.log(`Cart app listening at http://localhost:${port}`)
});

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.get('/', function(req,res){
    res.render('index')
});

app.get('/contacts', function(req,res){
    res.render('contacts')
});

app.get('/login', function(req,res){
    res.render('login')
});

app.get('/register', function(req,res){
    res.render('register')
});
