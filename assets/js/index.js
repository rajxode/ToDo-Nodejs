// getting list items
var tasks=document.getElementsByClassName('list_item');


// running loop over all the task 
for(let i of tasks){
    // checkbox status 
    i.getElementsByTagName('input')[0].addEventListener('change',function () {
        
        // if checkbox is checked 
        if(this.checked){
            i.getElementsByTagName('div')[3].style.textDecoration = 'line-through';
            i.getElementsByTagName('span')[1].style.textDecoration = 'line-through';
        }

        // incase checkbox is unchecked
        else{
            i.getElementsByTagName('div')[3].style.textDecoration = 'none';
            i.getElementsByTagName('span')[1].style.textDecoration = 'none';
        }
    });
}
    