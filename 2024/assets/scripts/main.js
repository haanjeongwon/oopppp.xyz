let hookFront = document.getElementById('hook-front');
let hookBack = document.getElementById('hook-back');
let hookNav = document.getElementById('hook-nav');

let attachFront = document.getElementById('attach-front');
let attachBack = document.getElementById('attach-back');

const nav = document.getElementById('nav');
const scrollTopEl = document.getElementById('scroll-top');

const memberName = document.getElementsByClassName('member-name');
const memberWorks = document.getElementsByClassName('member-works');

let previousFront, previousBack;

let contentsFront = [
  `
  <div class="box box-f"></div>
  <div class="box box-f"></div>
  <div class="box box-f"></div>
  <div class="box box-f" id="hook-front"></div>
  <div class="box box-f"></div>
  <div class="box box-f"></div>
  <div class="box box-f"></div>
  <div class="box box-f"></div>
  <div id="attach-front"></div>`,
  `
  <div class="box box-f"></div>
  <div class="box box-f"></div>
  <div class="box box-f"></div>
  <div class="box box-f" id="hook-front"></div>
  <div class="box box-f"></div>
  <div class="box box-f"></div>
  <div class="box box-f"></div>
  <div class="box box-f"></div>
  <div id="attach-front"></div>`
];

let contentsBack = [
  `
  <div class="box box-b"></div>
  <div class="box box-b"></div>
  <div class="box box-b"></div>
  <div class="box box-b" id="hook-back"></div>
  <div class="box box-b"></div>
  <div class="box box-b"></div>
  <div class="box box-b"></div>
  <div id="attach-back"></div>`,
  `
  <div class="box box-b"></div>
  <div class="box box-b"></div>
  <div class="box box-b"></div>
  <div class="box box-b" id="hook-back"></div>
  <div class="box box-b"></div>
  <div class="box box-b"></div>
  <div class="box box-b"></div>
  <div id="attach-back"></div>`
];

fillBox();
scrollTop();

// scroll function
window.addEventListener('scroll', function() {
  // parallax scroll
  let currentPositionY = window.scrollY;
  document.querySelectorAll('.parallax').forEach(function(layer) {
    let speed = layer.getAttribute('data-speed');
    layer.style.marginTop = - currentPositionY * speed + 'px';
  });

  // infinite scroll
  let hookFrontPositionY = hookFront.getBoundingClientRect().top;
  let hookBackPositionY = hookBack.getBoundingClientRect().top;
  let hookNavPositionY = hookNav.getBoundingClientRect().top;
  const boxes = document.getElementsByClassName('box');

  if (hookFrontPositionY <= 0) {
    attachFrontAction();
  };

  if (hookBackPositionY <= 0) {
    attachBackAction();
  };

  if (hookNavPositionY <= -100) {
    nav.classList.add('show');
    for (let box of boxes) {
      box.classList.add('show');
    };
  } else {
    nav.classList.remove('show');
    for (let box of boxes) {
      box.classList.remove('show');
    };
  };
});

scrollTopEl.addEventListener('click', () => scrollTop());

// attach function - front
function attachFrontAction() {
  let currentNumber;
  do {
    currentNumber = random(0, contentsFront.length - 1);
  } while (currentNumber == previousFront);
  previousFront = currentNumber;
  attachFront.innerHTML = contentsFront[currentNumber];
  hookFront.removeAttribute('id');
  attachFront.removeAttribute('id');
  hookFront = document.getElementById('hook-front');
  attachFront = document.getElementById('attach-front');

  fillBox();
};

// attach function - back
function attachBackAction() {
  let currentNumber;
  do {
    currentNumber = random(0, contentsBack.length - 1);
  } while (currentNumber == previousBack);
  previousBack = currentNumber;
  attachBack.innerHTML = contentsBack[currentNumber];
  hookBack.removeAttribute('id');
  attachBack.removeAttribute('id');
  hookBack = document.getElementById('hook-back');
  attachBack = document.getElementById('attach-back');

  fillBox();
};

// fill box
function fillBox() {
  const boxes = document.getElementsByClassName('box');
  for (let box of boxes) {
    if (box.classList.contains('box-f')) {

      randomBox(box);
      randomBox(box);
      randomBox(box);
      // randomBox(box);
      // randomBox(box);
      // randomBox(box);
      // randomBox(box);
      // randomBox(box);

      // randomBox(box);
      // randomBox(box);
      // randomBox(box);
      // randomBox(box);
      // randomBox(box);
      // randomBox(box);
      // randomBox(box);
      // randomBox(box);

      box.classList.remove('box-f');
    } else if (box.classList.contains('box-b')) {

      randomBox(box);
      randomBox(box);
      randomBox(box);
      randomBox(box);
      randomBox(box);
      // randomBox(box);
      // randomBox(box);
      // randomBox(box);

      // randomBox(box);
      // randomBox(box);
      // randomBox(box);
      // randomBox(box);
      // randomBox(box);
      // randomBox(box);
      // randomBox(box);
      // randomBox(box);

      box.classList.remove('box-b');
    };
  };
};

// random box
function randomBox(box) {
  let currentPart = random(1, 44);
  currentPart = String(currentPart);
  while (currentPart.length < 3) {
    currentPart = '0' + currentPart;
  };
  
  box.insertAdjacentHTML('beforeend', `<img class="part" src="/2024/assets/images/private/main/opp-newface-part-${currentPart}.png" alt="" style="top: ${random(-10, 90)}%; left: ${random(-30, 70)}%; width: ${random(40, 80)}%;"></img>`);
};

// random function
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// scroll top
function scrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

// member works
for (let i = 0; i < memberName.length; i++) {
  memberName[i].addEventListener('click', function() {
    if (memberWorks[i].classList.contains('hide')) {
      memberWorks[i].classList.remove('hide');
    } else {
      memberWorks[i].classList.add('hide');
    };
  });
};