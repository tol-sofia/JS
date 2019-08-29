//таймер отсчета lf даты
var input = document.getElementById("data_enter");
function timer() {
  var nowDate = new Date();
  var achiveDate = new Date(input.value).getTime();
  var result = (achiveDate - nowDate)+1000;
  if (result < 0) {
      var elmnt = document.getElementById("timer");
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
  var elmnt = document.getElementById("timer");
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
function parallax() {
  let ypos = window.pageYOffset;
  this.querySelectorAll('.layer').forEach(layer => {
      let speed = layer.getAttribute('data-speed');
      layer.style.transform = `translateY(${ypos*speed/230}px)`
  });
}
document.addEventListener('scroll', parallax);

window.onload = function(){
  var increase = document.getElementsByClassName('parallax__image');
  increase.onmouseover = function(){
    if (even) {
      Shadow.style.opacity = "0";
      even = false;
    } else {
      increase.style.zoom = "1";
        even = true;
    }
  }
};

var increase = document.getElementsByClassName("parallax__image")[0];
var Shadow = document.getElementsByClassName("parallax__shadow")[0];
increase.onmouseover = function parallaxChangeOver() {                  
  increase.style.transform = "scale(1.2)";
  Shadow.style.opacity = "0";
  Shadow.style.transition = "1s";
  increase.style.transition = "1s";
}
increase.onmouseout = function parallaxChangeOver() {                     
  increase.style.transform = "scale(1)";
  Shadow.style.opacity = "1";
  Shadow.style.transition = "2s";
  increase.style.transition = "2s";
}

// слайдер
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
  }