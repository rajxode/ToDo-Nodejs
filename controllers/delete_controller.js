//importing database schema 
const ToDo=require('../models/todo_card');


//to delete a single task from the todo list using delete icon 
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



// to delete single or multiple completed task using delete button
module.exports.delMultiTask = function(req,res){
    // If task not seclected
  if (req.body.id == undefined) {
    return res.redirect("back");
  }
  // to delete single task
  else if (typeof req.body.id == "string") {
    ToDo.findByIdAndDelete(req.body.id, function (err) {
      if (err) {
        console.log("error deleting task ");
        return;
      }

      console.log("contact deleted successfully")
      return res.redirect("back");
    });
  }
  // to delete multiple task
  else {
    for (let i of req.body.id) {
      ToDo.findByIdAndDelete(i, function (err) {
        if (err) {
          console.log("error deleting tasks ");
          return;
        }
      });
    }
    return res.redirect("back");
  }
}
