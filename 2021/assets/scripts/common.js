const title = document.getElementsByClassName('title');
const statement = document.getElementsByClassName('statement');

for (let i = 0; i < title.length; i++) {
  title[i].addEventListener('click', function() {
    if (statement[i].classList.contains('show')) {
      statement[i].classList.remove('show');
    } else {
      statement[i].classList.add('show');
    };
  });
};