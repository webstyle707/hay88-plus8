// // for slide fade
// document.addEventListener('DOMContentLoaded', function () {
//   new Splide('#splide1', {
//     type: 'loop', // slide loop fade
//     perPage: 1,
//     autoplay: true,
//     interval: 2000,
//   }).mount();
// });


var swiper = new Swiper(".cubeSwiper3", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  interval: 2000,
  grabCursor: true,
  pauseOnMouseEnter: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});




const HandleHiddenMenu = () => {
  document.getElementById("framMenu").style.width = "0";
  document.getElementById("framMenu").style.transition = "all 0.3s ease";
  document.getElementById("framMenu").style.left = "-100%";
  document.getElementById("menu").style.left = "-100%";
  document.getElementById("menu").style.width = "0%";
  document.getElementById("menu").style.transition =
    "all 1s ease";

};
const HandleShowMenu = () => {
  document.getElementById("menu").style.left = "0%";
  document.getElementById("menu").style.transition =
    "all 0.4s ease";
  document.getElementById("menu").style.width = "100%";
  document.getElementById("framMenu").style.width = "66.666667%";
  document.getElementById("framMenu").style.transition = "all 0.6s ease";
  document.getElementById("framMenu").style.left = "0%";

};
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 220);
});


//=================>  click button scroll to top
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document with animation
function scrollToTop() {
  // Scroll to the top of the document with animation
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - (currentScroll / 8));
  }
}







function clearAllClassNames() {
  var cards = document.querySelectorAll('.scaleAnimationCard');
  cards.forEach(function(card) {
    card.classList.remove('scaleAnimationCard');
  });
}


function addAllClassNames() {
  var Addcard = document.querySelectorAll('.Addcard');
  Addcard.forEach(function(Addcard) {
    Addcard.classList.add('scaleAnimationCard');
  });
}