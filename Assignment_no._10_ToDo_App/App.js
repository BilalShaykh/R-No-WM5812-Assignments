var ul = document.getElementById("list");

function addToDo() {
    var input = document.getElementById("input");
    var li = document.createElement('li');
    li.setAttribute('id', 'li');
    li.setAttribute('type','checkbox')
    var liText = document.createTextNode(input.value) 
    var span = document.createElement('span');
    span.setAttribute('class', 'span')
    
    li.appendChild(liText)
    ul.appendChild(li);
    input.value = '';

    var delBtn = document.createElement('i');
    // var delText = document.createTextNode('Delete');
    // delBtn.appendChild(delText);
    li.appendChild(delBtn);
    delBtn.setAttribute('class', 'fa fa fa-trash-o');
    delBtn.setAttribute('onclick', 'deleteTask(this)');
    delBtn.setAttribute('id','delBtn')

    var editBtn = document.createElement('i');
    // var editText = document.createTextNode('Edit');
    // editBtn.appendChild(editText);
    li.appendChild(editBtn);
    editBtn.setAttribute('onclick', 'editTask(this)');
    editBtn.setAttribute('class', 'fa fa-pencil-square-o');
    editBtn.setAttribute('id','editBtn')

    var boldbtn = document.createElement('i')
    li.appendChild(boldbtn);
    boldbtn.setAttribute('onclick', 'boldTask(this)');
    boldbtn.setAttribute('class', 'fa fa-bold');
    boldbtn.setAttribute('id', 'boldbtn');

    li.appendChild(span);
}

function boldTask(e) {
    var editValue = e.parentNode;
    // console.log(editValue)
    editValue.setAttribute('class', 'bold')
    // console.log(editValue)

}

function deleteTask(e){
   e.parentNode.remove(); 
}

function editTask(e) {
    var editValue = e.parentNode.firstChild.nodeValue;
    // console.log(editValue)
    var edit = prompt('Enter correct value', editValue)
    e.parentNode.firstChild.nodeValue = edit;
    console.log(edit)
    
    // var input = document.createElement('input');
    // var li = document.getElementById('li');
    // // console.log(li.nodeText) 
    // li.appendChild(input);
    // input.setAttribute('value', editValue)
    // input.setAttribute('id','editInput')
    // // console.log(input)
    // // editValue = input;

    // var saveBtn = document.createElement('button');
    // var saveText = document.createTextNode('Save');
    // saveBtn.appendChild(saveText)
    // li.appendChild(saveBtn);

    // saveBtn.setAttribute('onclick', 'saveTask(this)')
    // console.log(saveBtn)
    
}

// function saveTask(e) {
//     console.log(e.parentNode);
//     var editinput = document.getElementById('editInput')
//     console.log(editinput.value);
//     console.log(e.parentNode.firstChild.nodeValue)
//     console.log(editinput.value)
//     e.parentNode.firstChild.nodeValue = editinput.value;
//     console.log(e.parentNode.firstChild.nodeValue)
// }

function deleteAll() {
    ul.innerHTML = ''
}