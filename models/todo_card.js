
// schema for todo item

// importing mongoose
const mongoose=require('mongoose');


// defining schema
const itemSchema = new mongoose.Schema({
    description:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    }
});

// compilling schema into a model 
const ToDo_item = mongoose.model('ToDo_item',itemSchema);

// exporting the schema 
module.exports = ToDo_item;
