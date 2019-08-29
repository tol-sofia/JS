//таймер отсчета от даты
var input = document.getElementById("data_enter");
function timer() {
  var nowDate = new Date();
  var achiveDate = new Date(input.value).getTime();
  var result = (achiveDate - nowDate)+1000;
  if (result < 0) {
      var elmnt = document.getElementById('timer');
      elmnt.innerHTML = 'Эта дата уже прошла';
      return undefined;
  }
  var seconds = Math.floor((result/1000)%60);
  var minutes = Math.floor((result/1000/60)%60);
  var hours = Math.floor((result/1000/60/60)%24);
  var days = Math.floor(result/1000/60/60/24);
  if (seconds < 10) seconds = '0' + seconds;
  if (minutes < 10) minutes = '0' + minutes;
  if (hours < 10) hours = '0' + hours;
  var elmnt = document.getElementById('timer');
  elmnt.innerHTML = days + 'дн' + hours + 'ч' + minutes + 'мин' + seconds;
  setTimeout(timer, 1000);
}
document.addEventListener('keydown', timer)

//чудо-лампы
var black = document.getElementsByClassName("lamps__black")[0];
var lampBgc = document.getElementsByClassName("light-bulbs")[0];
black.onmouseover = function a() {
  black.classList.toggle("lamps__black");
  black.classList.toggle("lamp__black-on");
  lampBgc.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  lampBgc.style.transition = "1s";
}
black.onmouseout = function a() {
  black.classList.toggle("lamps__black");
  black.classList.toggle("lamp__black-on");
  lampBgc.style.backgroundColor = "white";
  lampBgc.style.transition = "1s";
}

var yellow = document.getElementsByClassName("lamps__yellow")[0];
yellow.onmouseover = function a() {
  yellow.classList.toggle("lamps__yellow");
  yellow.classList.toggle("lamp__yellow-on");
  lampBgc.style.backgroundColor = "rgba(239, 206, 74, 0.5)";
  lampBgc.style.transition = "1s";
}
yellow.onmouseout = function a() {
  yellow.classList.toggle("lamps__yellow");
  yellow.classList.toggle("lamp__yellow-on");
  lampBgc.style.backgroundColor = "white";
  lampBgc.style.transition = "1s";
}

var blue = document.getElementsByClassName("lamps__blue")[0];
blue.onmouseover = function a() {
  blue.classList.toggle("lamps__blue");
  blue.classList.toggle("lamp__blue-on");
  lampBgc.style.backgroundColor = "rgba(66, 141, 255, 0.5)";
  lampBgc.style.transition = "1s";
}
blue.onmouseout = function a() {
  blue.classList.toggle("lamps__blue");
  blue.classList.toggle("lamp__blue-on");
  lampBgc.style.backgroundColor = "white";
  lampBgc.style.transition = "1s";
}

// параллакс

const boxer = boxercontainer.querySelector("parallax__image"),
maxMove = boxercontainer.offsetWidth / 30,
boxerCenterX = boxer.offsetLeft + (boxer.offsetWidth / 2),
boxerCenterY = boxer.offsetTop + (boxer.offsetHeight / 2),
fluidboxer = window.matchMedia("(min-width: 726px)");

function getMousePos(xRef, yRef) {
  
  let panelRect = boxercontainer.getBoundingClientRect();
  return {
      x: Math.floor(xRef - panelRect.left) /(panelRect.right-panelRect.left)*boxercontainer.offsetWidth,
      y: Math.floor(yRef - panelRect.top) / (panelRect.bottom -panelRect.top) * boxercontainer.offsetHeight
    };
}

document.body.addEventListener("mousemove", function(e) {
  let mousePos = getMousePos(e.clientX, e.clientY),
  distX = mousePos.x - boxerCenterX,
  distY = mousePos.y - boxerCenterY;
  if (Math.abs(distX) < 500 && distY < 200 && fluidboxer.matches) {
  boxer.style.transform = "translate("+(-1*distX)/12+"px,"+(-1*distY)/12+"px)";
    boxercontainer.style.backgroundPosition = `calc(50% + ${distX/50}px) calc(50% + ${distY/50}px)`;
  }
})

// слайдер
//* Индекс слайда по умолчанию */
var controls = document.querySelectorAll('buttons');
for(var i = 0; i < controls.length; i++){
    controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slider .item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'item';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'item showing';
}

pauseButton.onclick = function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
};

var next = document.getElementById('left');
var previous = document.getElementById('right');

next.onclick = function(){
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function(){
    pauseSlideshow();
    previousSlide();
};