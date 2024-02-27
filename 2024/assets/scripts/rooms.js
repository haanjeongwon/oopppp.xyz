// scroll to top
let scrollTopEl = document.getElementById('scroll-top');

scrollTopEl.addEventListener('click', () => scrollTop());
function scrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

// scroll to work
const titles = document.getElementsByClassName('book-title');
const works = document.getElementsByClassName('work');

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', function() {
    window.scrollTo({
      top: works[i].offsetTop - 40,
      left: 0,
      behavior: 'smooth'
    });
  });
};

// work caption
const captions = document.getElementsByClassName('work-caption');

for (let caption of captions) {
  caption.addEventListener('click', function() {
    if (caption.classList.contains('hide')) {
      caption.classList.remove('hide');
    } else {
      caption.classList.add('hide');
    }
  });
};
