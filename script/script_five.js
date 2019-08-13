//5.1  Написать скрипт, который создаст дополнительный блок, с текстом и картинкой (bgi), 
//стили этому блоку добавить в CSS, а блок создать с помощью JS.
var div = document.createElement('div');
//var textinside = document.createTextNode('А вот и я');
div.className = "createdblock";
div.innerHTML = "Море волнуется три! Морская фигура замри!"; 
document.body.append(div);
var img = document.createElement("img");
img.src = './img/cat.jpg';
img.className = "createdblock-img";
div.appendChild(img);

//5.2  Получить в консоль содержимое любого другого блока.
console.log(document.getElementsByTagName("div")[1].innerHTML);

//5.3 добавила два новых класса первому блоку
var newclasses= document.getElementsByClassName("block")[0];
newclasses.classList.add("the first", "reading-room");