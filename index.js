// importing express into our file 
const express=require('express');

// defining port number for our server
const port=8000;
const app=express();

// importing routers 
app.use('/',require('./routes/index'));

// setting view engine as ejs 
app.set('view engine','ejs');
app.set('views','./views');


// running server
app.listen(port,function(err){
    if(err){
        console.log('Error in loading the page',err);
        return;
    }
    console.log('server is up !!')
    return;
})