//задание 4.1.1 Сделать предыдущее задание с функцией
function showMessage(name, age) {
  var name = prompt ("Введите Ваше имя");
  var age = prompt ("Сколько Вам лет");     
  return name + age;
}
let result = showMessage();
console.log(result);
 

//4.1.2

var star = [];
star[0]=prompt ("Введите первое число");
star[1]=prompt ("Введите второе число");
star[2]=prompt ("Введите третье число");
star[3]=prompt ("Введите четвертое число");
star[4]=prompt ("Введите пятое число");
var result = [];
function reverseorder() {
  for (var i = star.length - 1; i >= 0; i--) {
    result.push(star[i]);
  }
}
reverseorder();
alert(result);

function oppositedirection() {
  var i = star.length;
  while (i >= 0) { 
    i--
  }
}
oppositedirection();
alert(result);

//задание 4.2 Написать программу, которая будет принимать на вход текст, с ошибкой (после точки строчная буква), и будет выдавать исправленный текст.

var str = prompt("Введите текст");  
var strArr = str.split(". ");
function errorchecking(str) { 
  var newArr = [];
  for(var i = 0 ; i < strArr.length ; i++ ){
    var firstLetter = strArr[i].charAt(0).toUpperCase();
    var restOfWord = strArr[i].slice(1);
    newArr[i] = firstLetter + restOfWord;
  } 
  return newArr.join(". ");
}
alert(errorchecking());

//4.3 Написать программу, которая будет обрезать текст начиная с первого слова и до слова “кукушка”.
var sentence = prompt("Введите текст");
var pos = sentence. indexOf("Кукушка");
word = sentence.substring(0, pos);

alert(sentence.substring(0, pos));

//через функцию почему-то не получается вывести
var sentence = "В лесу была хорошая погода. Кукушка куковала.";
function trimmedline() {
  var pos = sentence.search("Кукушка");
  return (word);
}
trimmedline();
alert(word);


//4.4*****
alert("Добо пожаловать в наш магазин! Заполните список продуктов");
var store = [];  
var howmanyproducts = prompt("Сколько продуктов купите?"); 
var i = howmanyproducts;
validity:
while ( i > 0) {
  var productdescription = {};   
  productdescription.name = prompt("Введите название продукта ");
  productdescription.price = parseInt(prompt("Введите цену продукта ")); 
    if (isNaN(productdescription.price)){ 
    alert("Введенное значение не является числом. Введите данные правильно");
    continue validity
    } else {
      store.push(productdescription);
    }
  i --
}
var grocerylist = "";
for (var i = 0; i < store.length; i++) {
  grocerylist = i + ' ' + store[i].name + ' ' + store[i].price + ' ';
}
alert("Список продуктов " + grocerylist);

var filter = prompt("Введие нужный фильтр (цена, название, добавить, удалить, изменить цену, весь список, вывод в консоль"); 

function searchbyprice() {
  if (filter == "цена"){ 
    grocerylist;
    continue validity
    } else {
      alert("Данная цена не найдена");
    }   
  }
  function LinearSearch(t, grocerylist) {                               
    var n = grocerylist.length, i = 0;   
    grocerylist[n] = t;
    while (grocerylist[ i ] !== t) i++;                          
    if (i < n) return i;         
    else return -1;             
}

const user = grocerylist.find(user => user.id === 'цена')



// 4**)  Написать скрипт, который создаст объект магазин,
// который будет иметь поля: имя и  продукты, также написать
// функцию поиска в магазине по цене, функцию поиска
// по названию, функцию добавления нового продукта в конец
// списка, функцию удаления продукта по номеру в списке (нумерация идет с нуля), функцию изменения цены товара
// по его номеру, функцию вывода всех товаров, функция вывода всего магазина в консоль.


