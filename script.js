var headerContainer = document.querySelector('.header-container');
var title = document.getElementById('title');
var subtitle = document.getElementById('subtitle');
var subtitleContainer = document.getElementById('subtitle-container');
var titleText = title.innerText;
var subtitleText = subtitle.innerText;
title.innerText = '';
subtitle.innerText = '';
var i = 0;
var j = 0;

function typeTitle() {
  var currentLine = document.getElementById('current-line');
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
  var currentLine = document.getElementById('current-line');
  if (i >= 0) {
    currentLine.innerText = titleText.substring(0, i);
    i--;
    setTimeout(eraseTitle, Math.floor(Math.random() * 200) + 50);
  } else {
    // Add the 'title-complete' class to the headerContainer to trigger the subtitle animation
    headerContainer.classList.add('title-complete');
    setTimeout(typeSubtitle, 500);
  }
}

function typeSubtitle() {
  var currentLine = document.getElementById('current-line');
  if (j <= subtitleText.length) {
    currentLine.innerText = subtitleText.substring(0, j);
    j++;
    setTimeout(typeSubtitle, Math.floor(Math.random() * 200) + 50);
  } else {
    currentLine.innerText = subtitleText.substring(0, j - 1);
    currentLine.classList.add('blink');
  }
}

typeTitle();



window.addEventListener("scroll", function () {
  var arrowContainer = document.querySelector(".arrow-container");
  var opacity = 1 - window.pageYOffset / 100;
  arrowContainer.style.opacity = opacity;
});

