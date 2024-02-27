$(document).ready(function() {
  var step = 1;
  $('h1').on('click', function() {
    step++;
    $('html').removeClass().addClass('step-' + step);
    if(step == 1) {
      $(this).find('span').text('‹Fidget Spinner›는...');
    } else if(step == 2) {
      $(this).find('span').text('장난감의 궤적을 평면에 기록한 활동이다...');
    } else if(step == 3) {
      $(this).find('span').text('Fidget Spinner의 형태에 집중해 다섯 개의 시퀀스를 만들었다...');
    } else if (step == 4) {
      $(this).find('span').text('하나의 칸은 전에 있었던 칸의 형태를 이어받아 규칙을 더하는 식으로 진행했다...');
    } else if (step == 5) {
      $(this).find('span').text('«Fidget Spinner» 2021년 버전에서는...');
    } else if (step == 6) {
      $(this).find('span').text('OPP 전시를 위해 몇 가지 언어로 만들어진...');
    } else if (step == 7) {
      $(this).find('span').text('작은 박스형 도슨트가 첨부되었다...');
    } else if (step == 8) {
      $(this).find('span').text('관객은 박스를 클릭하면서...');
    } else if (step == 9) {
      step = 0;
      $(this).find('span').text('작가가 동봉한 설명과 함께 작품을 감상할 수 있다...');
    } 
  });
});