// importing express into our file 
const express=require('express');

// defining port number for our server
const port=8000;


// importing mongoose
const database=require('./config/mongoose');

// creating app variable 
const app=express();


app.use(express.urlencoded());

// importing routers 
app.use('/',require('./routes'));

// setting view engine as ejs 
app.set('view engine','ejs');
app.set('views','./views');


// connecting folder of static files
app.use(express.static('assets'));

// running server
app.listen(port,function(err){
    if(err){
        console.log('Error in loading the page',err);
        return;
    }
    console.log('server is up !!')
    return;
})