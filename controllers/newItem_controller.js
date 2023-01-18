// importing database
const ToDo=require('../models/todo_card');


// function to take user input and add it into the database
module.exports.new=function(req,res){

    // creating new item
    ToDo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },  function(err, newItem){
        if(err){
            console.log('error');
            return;
        }
        console.log('*******', newItem);
        return res.redirect('back');
    });
}