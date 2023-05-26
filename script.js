var headerContainer = document.querySelector(".header-container");
var title = document.getElementById("title");
var subtitle = document.getElementById("subtitle");
var subtitleContainer = document.getElementById("subtitle-container");
var titleText = title.innerText;
var subtitleText = subtitle.innerText;
title.innerText = "";
subtitle.innerText = "";
var i = 0;
var j = 0;

function typeTitle() {
  var currentLine = document.getElementById("current-line");
  if (i <= titleText.length) {
    currentLine.innerText = titleText.substring(0, i);
    i++;
    setTimeout(typeTitle, Math.floor(Math.random() * 200) + 50);
  } else {
    // Call the eraseTitle function to erase the title letter by letter
    setTimeout(eraseTitle, 500);
  }
}

function eraseTitle() {
  var currentLine = document.getElementById("current-line");
  if (i >= 0) {
    currentLine.innerText = titleText.substring(0, i);
    i--;
    setTimeout(eraseTitle, Math.floor(Math.random() * 200) + 50);
  } else {
    // Add the 'title-complete' class to the headerContainer to trigger the subtitle animation
    headerContainer.classList.add("title-complete");
    setTimeout(typeSubtitle, 500);
  }
}

function typeSubtitle() {
  var currentLine = document.getElementById("current-line");
  if (j <= subtitleText.length) {
    currentLine.innerText = subtitleText.substring(0, j);
    j++;
    setTimeout(typeSubtitle, Math.floor(Math.random() * 200) + 50);
  } else {
    currentLine.innerText = subtitleText.substring(0, j - 1);
    currentLine.classList.add("blink");
  }
}

typeTitle();

var topArrow = document.querySelector('.top-arrow');
    var middleArrow = document.querySelector('.middle-arrow');
    var bottomArrow = document.querySelector('.bottom-arrow');

    topArrow.addEventListener('click', function() {
      window.scrollTo({
        top: window.innerHeight / 2,
        behavior: 'smooth'
      });
    });

    middleArrow.addEventListener('click', function() {
      window.scrollTo({
        top: window.innerHeight / 2,
        behavior: 'smooth'
      });
    });

    bottomArrow.addEventListener('click', function() {
      window.scrollTo({
        top: window.innerHeight / 2,
        behavior: 'smooth'
      });
    });

window.addEventListener("scroll", function () {
  var arrowContainer = document.querySelector(".arrow-container");
  var opacity = 1 - window.pageYOffset / 100;
  arrowContainer.style.opacity = opacity;
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateOnScroll() {
  var elementsToShow = document.querySelectorAll('.show-on-scroll');
  for (var i = 0; i < elementsToShow.length; i++) {
    if (isElementInViewport(elementsToShow[i])) {
      elementsToShow[i].classList.add('is-visible');
    }
  }
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();

// Obtener el elemento del div invisible
const invisibleDiv = document.querySelector('.invisible');

// Función para verificar si el div está visible en la ventana
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para agregar la clase "visible" al div si está en el viewport
function checkVisibility() {
  if (isElementInViewport(invisibleDiv)) {
    invisibleDiv.classList.add('visible');
    // Eliminar el event listener una vez que el div sea visible
    window.removeEventListener('scroll', checkVisibility);
  }
}

// Verificar cuando el usuario desplaza la página
window.addEventListener('scroll', checkVisibility);

document.addEventListener('DOMContentLoaded', function() {
  var main = document.getElementById('developer');
  var header = document.querySelector('header');

  // Función para verificar si el usuario ha llegado a la etiqueta <main>
  function checkIfMainInView() {
    var rect = main.getBoundingClientRect();
    var isMainInView = rect.top <= 0 && rect.bottom > 0;

    if (isMainInView) {
      header.classList.add('dark-text');
    } else {
      header.classList.remove('dark-text');
    }
  }

  // Verificar inicialmente cuando la página se carga
  checkIfMainInView();

  // Verificar cuando el usuario desplaza la página
  window.addEventListener('scroll', checkIfMainInView);
});
