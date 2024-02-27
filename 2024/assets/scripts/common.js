// const footer = document.getElementById('footer');
// if (footer) {
//   const currentYear = new Date().getFullYear();
//   footer.innerHTML = `<span>© ${currentYear} OPP.</span>`;
// };

// header
const header = document.getElementById('header');
let prevScroll = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll >= 100) {
    if (prevScroll > currentScroll) {
        header.classList.remove('hide');
    } else {
        header.classList.add('hide');
    }
    prevScroll = currentScroll;

  } else {
    header.classList.remove('hide');
  };
});

// session
let currentSession = sessionStorage.getItem('accessibility2024');

const btnAccessibility = document.getElementById('btn-accessibility');
const infoAccessibility = document.getElementById('info-accessibility');
const closeAccessibility = document.getElementById('close-accessibility');
const toggleAccessibility = document.getElementById('toggle-accessibility');

setAccessibility();

  // open info div
btnAccessibility.addEventListener('click', function() {
  infoAccessibility.classList.add('show');
});

  // close info div
closeAccessibility.addEventListener('click', function() {
  infoAccessibility.classList.remove('show');
});

  // toggle
toggleAccessibility.addEventListener('click', function() {
  if (currentSession == 'true') {
    currentSession = 'false';
  } else {
    currentSession = 'true';
  };
  sessionStorage.setItem('accessibility2024', currentSession);
  setAccessibility();
});

function setAccessibility() {
  const body = document.getElementsByTagName('body');

  if (currentSession == 'true') {
    body[0].classList.add('accessibility');
    toggleAccessibility.classList.add('now-on');
    toggleAccessibility.classList.remove('now-off');
  } else {
    body[0].classList.remove('accessibility');
    toggleAccessibility.classList.add('now-off');
    toggleAccessibility.classList.remove('now-on');
  };
};