//SLIDER

//VAR SLIDER
var sliderContainer = document.querySelector(".ln-slider-container");
var sliderList = document.querySelector(".ln-slider-list");
var sliderItem = document.querySelectorAll(".ln-slider-item");
const sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var prevItem = document.querySelector(".ln-item-prev");
var nextItem = document.querySelector(".ln-item-next");
var slidePos = 0;
var currentSlide = document.querySelector(".ln-current-slide");
var totalSlide = document.querySelector(".ln-total-slide");
var currentCounter = 1;
var navItems = document.querySelectorAll(".ln-item-navgator a");
var navCounter = document.querySelector(".ln-navgator-counter span");

//LARGURAS INDVIDUAIS
var containerWidth = sliderContainer.parentElement.offsetWidth;

//LARGURAS DINAMICAS
sliderContainer.style.width = containerWidth + "px";

for (var p = 0; p < sliderItem.length; p++) {
  sliderItem[p].style.width = containerWidth + "px";

  var sliderItemWidth = sliderItem[p].offsetWidth;

  sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + "px";

//ANIMACAO DO SLIDER onClick

//HANDLERS

//Next Slide Animacao
var nextSlideAnim = function () {
  var lastItem = sliderListWidth - containerWidth;
  if (-1 * slidePos === lastItem) {
    return;
  }

  slidePos -= containerWidth;

  anime({
    targets: sliderList,
    translateX: slidePos,
    easing: 'cubicBezier(0,1.01,.32,1)'
  });
};

//Prev Slide Animacao
var prevSlideAnim = function () {
  if (slidePos === 0) {
    return;
  }

  slidePos += containerWidth;

  anime({
    targets: sliderList,
    translateX: slidePos,
    easing: 'cubicBezier(0,1.01,.32,1)'
  });
};

//Counter Formater
var counterFormater = function (n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return n;
  }
};

//Counter Add
var counterAdd = function () {
  if (currentCounter >= 0 && currentCounter < sliderTotalItems) {
    currentCounter++;
    currentSlide.innerHTML = counterFormater(currentCounter);
    navCounter.innerHTML = counterFormater(currentCounter);
  }
};

//Counter Remove
var counterRemove = function () {
  if (currentCounter > 1 && currentCounter <= sliderTotalItems) {
    currentCounter--;
    currentSlide.innerHTML = counterFormater(currentCounter);
    navCounter.innerHTML = counterFormater(currentCounter);
  }
};

//Set Active Nav
var setActiveNav = function () {
  for (var nv = 0; nv < navItems.length; nv++) {
    let myNavNum = parseInt(navItems[nv].getAttribute("data-nav"));
    if (myNavNum === currentCounter) {
      navItems[nv].classList.add("ln-item-active");

      anime({
        targets: ".ln-item-active",
        width: 90,
      });
    }
  }
};

//Set Active Slide
var setActiveSlide = function () {
  for (var sld = 0; sld < sliderItem.length; sld++) {
    let mySlideNum = parseInt(sliderItem[sld].getAttribute("data-slide"));

    if (mySlideNum === currentCounter) {
      sliderItem[sld].classList.add("ln-slide-active");
      sliderItem[sld].querySelector('.ln-portfolio-item-box').classList.add('ln-scale-right');
    }
  }
};

var changeAvctive = function () {
  for (var rm = 0; rm < navItems.length; rm++) {
    navItems[rm].classList.remove("ln-item-active");
    anime({
      targets: navItems[rm],
      width: 20,
    });
  }

  for (var rms = 0; rms < sliderItem.length; rms++) {
    sliderItem[rms].classList.remove("ln-slide-active");
  }

  setActiveNav();
  setActiveSlide();
};

//ACTIONS
anime({
  targets: ".ln-item-active",
  width: 90,
});

totalSlide.innerHTML = counterFormater(sliderTotalItems);

nextItem.addEventListener("click", function () {
  nextSlideAnim();
  counterAdd();
  changeAvctive();
});

prevItem.addEventListener("click", function () {
  prevSlideAnim();
  counterRemove();
  changeAvctive();
});
