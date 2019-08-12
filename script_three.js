//задание 3.1 Написать программу, которая создаст объект user с полями name и age, заполнить их с помощью prompt и вывести после этого весь объект в консоль
var user = {
  name: prompt ("Введите Ваше имя"),
  age: prompt ("Сколько Вам лет"),    
  };
console.log(user);

//3.2 
//Написать программу с помощью prompt. Заполните массив из 5 элементов и 
//выведете все элементы в обратном порядке. 
//(задание выполнить в 2 вариантах, с помощью for и while).

var star = [];
star[0]=prompt ("Введите первое число");
star[1]=prompt ("Введите второе число");
star[2]=prompt ("Введите третье число");
star[3]=prompt ("Введите четвертое число");
star[4]=prompt ("Введите пятое число");
var result = [];

for (var i = star.length - 1; i >= 0; i--) {
    result.push(star[i]);
}
alert(result);

var i = star.length;
while (i >= 0) { 
    i--
  }
alert( result );


//3.3Создать объект магазин с продуктами. 
//Число продуктов в магазине задается вами через prompt. Продукт имеет поля: название, цена. 
//Через цикл заполнить с помощью prompt информацию о всех товарах вашего магазина. 
//Цена имеет валидацию
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

