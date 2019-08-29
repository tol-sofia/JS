//6.1 Написать скрипт, который будет изменять стили блоков при нажатии на них мышкой, 
//без использования CSS (использовать onclick и addEventListener)

var box = document.getElementsByClassName('addbox')[0];
box.onclick = function changepred () {
    box.style.cssText=`color: green;
    text-align: center;
    font-size: 20px;
  `;
};

function changeproperties
() {
    box.style.color = "red";
}   
box.addEventListener("click", changeproperties);
//6.2Написать скрипт, чтобы при нажатии на блок, снизу добавился новый блок (работать код должен единожды)
var block = document.getElementsByClassName('addblock')[0];
function addnewblock () {
    var newblock = document.createElement('div');
    newblock.className = "newblock";
    newblock.innerHTML = "А вот и я!"; 
    document.body.append(newblock);
    block.removeEventListener("click", addnewblock, false);
}   
block.addEventListener("click", addnewblock);
