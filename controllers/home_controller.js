// importing database schema 
const ToDo=require('../models/todo_card');

//background color for different task category 
var bgcolors={
    Personal:"#c72279",
    Work:"red",
    School:"violet",
    Cleaning:"blue",
    Others:"green",
};


// function to render home page and todo list with category colors
module.exports.home=function(req,res){
    ToDo.find({}, function(err, todoItem){
        if(err){
            console.log('Error');
            return;
        }

        return res.render('home',{
            todo_list:todoItem,
            color_list:bgcolors,
        });
        
    });
}
