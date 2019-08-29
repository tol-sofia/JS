//Написать список дел, который будет иметь следующие функции: добавить/удалить/отредактировать. 
//Для каждой функции создается отдельное поля для ввода и кнопка действия. 
// список должен представлять из себя таблицу, которая динамически обновляется 
//(если вы добавили дело, то оно добавилось на страницу). Использовать для визуализации HTML и scss(grid),
// а для интерактива js.

var addButton = document.getElementById('add');
var inputTask = document.getElementById('new_task');
var unfinishedTasks = document.getElementById('unfinished-tasks');
var finishedTasks = document.getElementById('finished-tasks');


function createNewElement(task, finished) {
  var list = document.createElement('li');
  var checkbox = document.createElement('button');
  if(finished){
      checkbox.className = "choice checkbox";
      checkbox.innerText = "Ок";
  }else {
      checkbox.className = "choice checkbox";
      checkbox.innerText = "Ок";
  }
  var label = document.createElement('label');
  label.innerText = task;
  var input = document.createElement('input');
  input.type = "text";
  var editButton = document.createElement('button');
  editButton.className = "choice edit";
  editButton.innerText = "Редактировать";
  var deleteButton = document.createElement('button');
  deleteButton.className = "choice delete";
  deleteButton.innerText = "Удалить";

  list.appendChild(checkbox);
  list.appendChild(label);
  list.appendChild(input);
  list.appendChild(deleteButton);
  list.appendChild(editButton);

  return list;
}

function addTask() {
  if (inputTask.value) {
    var list = createNewElement(inputTask.value, false);
    unfinishedTasks.appendChild(list);
    bindTaskEvents(list, finishTask)
    inputTask.value = "";
  }
  save();
}
addButton.onclick = addTask;

function deleteTask() {
  var list = this.parentNode;
  var ul = list.parentNode;
  ul.removeChild(list);
  save();
}

function editTask() {
  console.log(2);
  var editButton = this;
  var list = this.parentNode;
  var label = list.querySelector('label');
  var input = list.querySelector('input[type=text]');

  var containsClass = list.classList.contains('edit_mode');

  if (containsClass) {
      label.innerText = input.value;
      editButton.className = "choice edit";
      editButton.innerText = "Редактировать";
      save();
  } else {
      input.value = label.innerText;
      editButton.className = "choice save";
      editButton.innerText = "Сохранить";

  }
  list.classList.toggle('edit_mode');
}

function finishTask() {
    var list = this.parentNode;
    var checkbox = list.querySelector('button.checkbox');
    checkbox.className = "choice checkbox";
    checkbox.innerText = "Ок";
    finishedTasks.appendChild(list);
    bindTaskEvents(list, unfinishTask);
    save();
}

function unfinishTask() {
    var list = this.parentNode;
    var checkbox = list.querySelector('button.checkbox');
    checkbox.className = "choice checkbox";
    checkbox.innerText = "Ок";

    unfinishedTasks.appendChild(list);
    bindTaskEvents(list, finishTask)
    save();
}

function bindTaskEvents(list, checkboxEvent) {
    var checkbox = list.querySelector('button.checkbox');
    var editButton = list.querySelector('button.edit');
    var deleteButton = list.querySelector('button.delete');

    checkbox.onclick = checkboxEvent;
    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;

}
function save() {

    var unfinishedTasksArr = [];
    for (var i = 0; i < unfinishedTasks.children.length; i++) {
        unfinishedTasksArr.push(unfinishedTasks.children[i].getElementsByTagName('label')[0].innerText);
    }

    var finishedTasksArr = [];
    for (var i = 0; i < finishedTasks.children.length; i++) {
        finishedTasksArr.push(finishedTasks.children[i].getElementsByTagName('label')[0].innerText);
    }

    localStorage.removeItem('todo');
    localStorage.setItem('todo', JSON.stringify({
        unfinishedTasks: unfinishedTasksArr,
        finishedTasks: finishedTasksArr
    }));

}

function load(){
    return JSON.parse(localStorage.getItem('todo'));
}

var data=load();

for(var i=0; i<data.unfinishedTasks.length;i++){
    var list=createNewElement(data.unfinishedTasks[i], false);
    unfinishedTasks.appendChild(list);
    bindTaskEvents(list, finishTask);
}

for(var i=0; i<data.finishedTasks.length; i++){
    var list=createNewElement(data.finishedTasks[i], true);
    finishedTasks.appendChild(list);
    bindTaskEvents(list, unfinishTask);
}



//Написать скрипт, который будет считывать число градусов из input и 
//переводить их в градусы по фаренгейту, переводить должен в тот же момент, когда в инпут что-то написали.
function convert(degree) {
  if (degree=="C") {
  F=document.getElementById("c").value * 9 / 5 + 32;
  document.getElementById("f").value=Math.round(F);
  } else {
  C=(document.getElementById("f").value -32) * 5 / 9;
  document.getElementById("c").value=Math.round(C);
  }
}


//3***)	Реализовать любую анимацию на js.
function disappear(elem, t, f){
  var fps = f || 50; 
  var time = t || 500; 
  var steps = time / (1000 / fps);   
  var op = 1;
  var d0 = op / steps;
  var timer = setInterval(function(){
    op -= d0;
    elem.style.opacity = op;
    steps--;
        if(steps <= 0){
      clearInterval(timer);
      elem.style.display = 'none';
    }
  }, (1000 / fps));
}
document.getElementById('dissolution').onclick = function(){
  disappear(this, 2000, 40);
}

var ctx = canvas.getContext('2d');
function draw(){  
  ctx.clearRect(0,0,canvas.width,canvas.height);  
  ctx.translate(125,125);  
  ctx.rotate(Math.PI/180);  
  ctx.translate(-125,-125);
  ctx.fillRect(50,50,150,150);   
  requestAnimationFrame(draw)
}
draw()