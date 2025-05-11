// footer
const footer = document.getElementById('footer');
const currentYear = new Date().getFullYear();

if (footer) {
  footer.innerHTML = `© ${currentYear} OPP.`;
};