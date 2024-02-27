// footer
const footerYear = document.getElementsByClassName('footer-year');
const currentYear = new Date().getFullYear();

if (footerYear) {
  for (let f of footerYear) {
    f.innerHTML = currentYear;
  };
};