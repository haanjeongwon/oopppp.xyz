// footer
const footerYear = document.getElementsByClassName('footer-year');
const currentYear = new Date().getFullYear();

if (footerYear) {
  for (let f of footerYear) {
    f.innerHTML = currentYear;
  };
};

// scroll function
// const header = document.getElementById('header');
// const mainSection = document.getElementById('opp-main');

// window.addEventListener('scroll', function() {
//   let scrollHook = mainSection.getBoundingClientRect().bottom;

//   if (scrollHook <= -50) {
//     header.classList.add('show');
//   } else {
//     header.classList.remove('show');
//   };
// });