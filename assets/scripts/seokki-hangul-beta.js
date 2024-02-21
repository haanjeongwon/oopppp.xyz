// Seokki Hangul Beta - 2024.02

seokkiHangul('tt', 'ff');

function seokkiHangul(targetClass, fixedClass) {
  let textEls = document.getElementsByClassName(targetClass);

  for (let textEl of textEls) {
    let innerText = textEl.textContent;
    let inLetter = /([가-힣]+)/g;
    let outLetter = /[a-zA-Z0-9?!()]/g;
    let matchedText = innerText.match(inLetter);
    let splittedText = [];

    if (matchedText) {
      for (let i = 0; i < matchedText.length; i++) {
        let filteredText = matchedText[i].replace(outLetter, '');
        matchedText[i] = filteredText;
      };
      for (let match of matchedText) {
        for (let i = 0; i < match.length; i++) {
          splittedText.push(match.charAt(i));
        };
      };
      matchedText = splittedText;
      matchedText = new Set(matchedText);
      for (let match of matchedText) {
        innerText = innerText.replaceAll(match, `<span class=${fixedClass}>${match}</span>`);
      };
      textEl.innerHTML = innerText;
    };
  };
};