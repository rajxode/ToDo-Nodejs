console.log('hello');

var tasks=document.getElementsByClassName('list_item');


for(let i of tasks){
    i.getElementsByTagName('input')[0].addEventListener('change',function () {
        if(this.checked){
            i.getElementsByTagName('div')[3].style.textDecoration = 'line-through';
            i.getElementsByTagName('span')[1].style.textDecoration = 'line-through';
        }

        else{
            i.getElementsByTagName('div')[3].style.textDecoration = 'none';
            i.getElementsByTagName('span')[1].style.textDecoration = 'none';
        }
    });
}
    