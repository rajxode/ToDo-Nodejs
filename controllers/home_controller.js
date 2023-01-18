// importing database schema 
const ToDo=require('../models/todo_card');


// function to render home page and todo list
module.exports.home=function(req,res){
    ToDo.find({}, function(err, todoItem){
        if(err){
            console.log('Error');
            return;
        }

        return res.render('home',{
            title:'TODO List',
            todo_list:todoItem
        });
        
    });
}
