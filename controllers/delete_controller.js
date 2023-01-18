//importing database schema 
const ToDo=require('../models/todo_card');


// function to delete a task from the todo list
module.exports.delTask = function(req,res){
    
    // getting task id 
    let id=req.query.id;

    // delete item from the list using its id
    ToDo.findByIdAndDelete(id,function(err){
        if(err){
            console.log(`Error : ${err}`);
            return;
        }

        return res.redirect('back');
    });
}