const sections = document.getElementsByClassName('section');

for (const section of sections) {
  section.addEventListener('click', function() {
    if(section.classList.contains('alt')) {
      section.classList.remove('alt');
    } else {
      section.classList.add('alt');
    }
  });
};