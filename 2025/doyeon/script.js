const windows = [
  ['001/108', '의식 없이 클릭한 수십 번의 선택 그 끝은 어디일까요?', 'a'],
  ['002/108', '좋아요 하나에 하루가 흔들립니다.', 'a'],
  ['003/108', '눈은 열려 있지만 진짜 보고 있는 건 무엇인가요?', 'a'],
  ['004/108', '스크롤을 멈출 수 없다면 당신이 움직이는 걸까?', 'a'],
  ['005/108', '이 화면 뒤에는 아무것도 없습니다.', 'a'],
  ['006/108', '오늘도 당신은 수많은 것에 반응했습니다.', 'a'],
  ['007/108', '입력은 쉬운데 멈춤은 어렵습니다.', 'a'],
  ['008/108', '광고 하나에 흔들리는 나 낯설지 않나요?', 'a'],
  ['009/108', '당신은 지금 몇 개의 알림에 둘러싸여 있나요?', 'a'],
  ['010/108', '다음 콘텐츠가 더 나을 거란 믿음 정말일까?', 'a'],
  ['011/108', '나는 누구인가요? 타인의 기준 없이 말할 수 있나요?', 'a'],
  ['012/108', '비교는 습관이 되었고 습관은 나를 만들었습니다.', 'a'],
  ['013/108', '좋은 사람이고 싶었나요 아니면 나은 사람이고 싶었나요?', 'b'],
  ['014/108', '누군가의 시선 속에서 살아본 적 있나요?', 'b'],
  ['015/108', '마음이 시끄러운 이유는 끊지 못한 기대 때문입니다.', 'b'],
  ['016/108', '그때 하지 못한 말이 아직도 머물러 있나요?', 'b'],
  ['017/108', '지금 당신의 목표는 정말 당신 것인가요?', 'b'],
  ['018/108', '소유하고 있는 것들이 곧 나인가요?', 'b'],
  ['019/108', '우리는 기억보다 후회의 감정에 더 오래 머뭅니다.', 'b'],
  ['020/108', '인정받고 싶은 마음은 왜 이렇게 오래 남을까요?', 'b'],
  ['021/108', '이 감정은 지나갈 수 있도록 두어도 괜찮습니다.', 'b'],
  [
    '022/108',
    '무언가를 놓는다고 해서 없어지는 건 아닙니다. 흐를 뿐입니다.',
    'b',
  ],
  ['023/108', '그대로 두고 바라보는 것 그것이 관(觀)입니다.', 'b'],
  ['024/108', '무상(無常)은 잔인하지 않습니다. 자연일 뿐입니다.', 'b'],
  ['025/108', '마음이 일어나는 것을 그대로 바라보세요.', 'c'],
  ['026/108', '감정은 오고 감정은 갑니다.', 'c'],
  ['027/108', '붙잡지 마세요. 흐르도록 두세요.', 'c'],
  ['028/108', '고요는 외부에서 오지 않습니다.', 'c'],
  ['029/108', '당신은 지금 여기에 있습니다.', 'c'],
  ['030/108', '멈춤이 일어났다면 그건 이미 수행입니다.', 'c'],
  ['031/108', '공(空)은 아무것도 없는 것이 아니라 다 열려 있는 것입니다.', 'c'],
  ['032/108', '지금 이대로도 괜찮습니다.', 'c'],
  ['033/108', '당신은 이미 도착해 있습니다.', 'c'],
  ['034/108', '아무것도 하지 않아도 존재는 사라지지 않습니다.', 'c'],
  ['035/108', '생각 없이 있는 것 그 자체로 충분합니다.', 'c'],
  ['036/108', '이제는 놓아도 괜찮습니다.', 'c'],
  ['037/108', '적멸은 끝이 아니라 고요한 바탕입니다.', 'd'],
  ['038/108', '말 없는 공간이 가장 많은 것을 말합니다.', 'd'],
  ['039/108', '닫는 순간 열린 감각이 생겨납니다.', 'd'],
  ['040/108', '당신이 마주한 마지막 창 그 너머는 침묵입니다.', 'd'],
  ['041/108', '당신은 오늘 몇 번 검색했나요?', 'd'],
  ['042/108', '모든 것이 지나갑니다. 이것도 지나갑니다.', 'd'],
  ['043/108', '멈춘다는 건 도망치는 게 아니에요.', 'd'],
  ['044/108', '숨을 들이쉬고 그냥 있어보세요.', 'd'],
  ['045/108', '생각을 밀어내지 마세요. 그냥 바라보세요.', 'd'],
  ['046/108', '그 감정은 흘러갈 수 있도록 놔두세요.', 'd'],
  ['047/108', '당신은 무언가가 되지 않아도 괜찮습니다.', 'd'],
  ['048/108', '타인의 시선은 얼마나 자주 당신을 바꾸나요?', 'd'],
  ['049/108', '당신은 아직도 인정받고 싶어 하죠.', 'e'],
  ['050/108', '성공은 몇 명에게 보여줘야 진짜일까요?', 'e'],
  ['051/108', '나는 이런 사람이다 라는 생각 언제 만들어졌나요?', 'e'],
  ['052/108', '비교는 습관처럼 다가옵니다.', 'e'],
  ['053/108', '과거의 말 한마디가 아직도 마음속을 걷고 있다면?', 'e'],
  ['054/108', '비어 있음에도 하루는 잘 흐릅니다..', 'e'],
  ['055/108', '왜 그렇게 쉽게 흔들리나요?', 'e'],
  ['056/108', '아무 일도 일어나지 않아도 불안한 날이 있죠.', 'e'],
  ['057/108', '당신보다 더 잘나가는 동창을 확인해보세요.', 'e'],
  ['058/108', '오늘 읽은 말들 중 진짜 당신의 생각은 몇 개인가요?', 'e'],
  ['059/108', '작지만 결정적인 순간의 연속입니다.', 'e'],
  ['060/108', '당신은 아직도 타인의 삶을 바라보며 비교하고 있나요?', 'e'],
  ['061/108', '버린 줄 알았던 감정이 또다시 다른 이름으로 왔다.', 'f'],
  ['062/108', '놓았다고 믿었던 것들이 조용히 돌아옵니다.', 'f'],
  ['063/108', '감정은 모양을 바꾸어 돌아옵니다.', 'f'],
  ['064/108', '스스로를 판단하지 마세요. 그건 관찰이 아닙니다.', 'f'],
  ['065/108', '지금 이 감정 그냥 존재하게 두세요.', 'f'],
  ['066/108', '닫기 전에 한 번 더 생각해보세요.', 'f'],
  ['067/108', '판단은 내려놓고 흐름을 지켜보세요.', 'f'],
  ['068/108', '저항은 더 큰 고통을 만듭니다.', 'f'],
  ['069/108', '지금 이 순간이 마지막일 수도 있습니다.', 'f'],
  ['070/108', '정답은 필요하지 않습니다.', 'f'],
  ['071/108', '느껴지는 대로 두세요.', 'f'],
  ['072/108', '클릭을 멈추고 숨을 들이쉬세요.', 'f'],
  ['073/108', '이 모든 것은 연기(緣起)입니다.', 'g'],
  ['074/108', '당신은 고정된 존재가 아닙니다,', 'g'],
  ['075/108', '모든 것은 잠시 머무릅니다.', 'g'],
  ['076/108', '알아차림은 늘 당신과 함께 있어왔습니다.', 'g'],
  ['077/108', '존재의 밀도는 조용한 감각 속에서 빛납니다.', 'g'],
  ['078/108', '보려고 애쓰지 않아도 보일 때가 있습니다.', 'g'],
  ['079/108', '손에서 내려놓는것만이 끝이 아닙니다.', 'g'],
  ['080/108', '때로는 그냥 지나가게 두는 것이 가장 큰 수행입니다.', 'g'],
  ['081/108', '이제 반응하지 않아도 괜찮습니다.', 'g'],
  ['082/108', '조금 느리게 흘러가도 괜찮습니다.', 'g'],
  ['083/108', '완전한 침묵은 말보다 큰 의미를 품고 있습니다.', 'g'],
  ['084/108', '이 순간 어떤 판단도 필요 없습니다.', 'g'],
  ['085/108', '흘러가는 음을 잡지 말고 지나가게 두세요.', 'h'],
  ['086/108', '당신은 지금 어떤 감정도 붙잡고 있지 않습니다.', 'h'],
  ['087/108', '공(空)은 결핍이 아니라 여유입니다.', 'h'],
  ['088/108', '모든 것은 잠시 머물다 사라지는 구름과 같습니다.', 'h'],
  ['089/108', '이 조용함 속에서 당신은 더 깊이 존재합니다.', 'h'],
  ['090/108', '무엇도 하지 않음이야말로 가장 어려운 수행입니다.', 'h'],
  ['091/108', '고요한 마음이 세상을 가장 깊이 꿰뚫습니다.', 'h'],
  ['092/108', '아무것도 바꾸지 않아도 괜찮습니다.', 'h'],
  ['093/108', '수행은 특별한 행위가 아니라 알아차림입니다.', 'h'],
  ['094/108', '당신이 붙잡던 그것은 이미 떠난 지 오래입니다.', 'h'],
  ['095/108', '기대하지 않고 바라보는 것 그것이 자유입니다.', 'h'],
  ['096/108', '변화는 저항 없이 일어납니다.', 'h'],
  ['097/108', '지금 이 호흡이 당신의 전부입니다.', 'i'],
  ['098/108', '걱정은 미래를 바꾸지 않고 현재를 흐리게 할 뿐입니다.', 'i'],
  ['099/108', '마음은 결국 머무를 곳을 스스로 찾아갑니다.', 'i'],
  ['100/108', '나아가려는 의지도, 멈추려는 의지도 잠시 놓아보세요.', 'i'],
  ['101/108', '아무 일도 일어나지 않을 때 가장 많은 것이 일어납니다.', 'i'],
  ['102/108', '적멸은 사라짐이 아니라 깨어 있음입니다.', 'i'],
  ['103/108', '침묵은 끝이 아닙니다. 또 다른 시작입니다.', 'i'],
  ['104/108', '이 창을 닫는 순간, 모든 번뇌가 사라지는 것은 아닙니다.', 'i'],
  ['105/108', '하지만 그 번뇌를 바라보는 태도는 달라질 수 있습니다.', 'i'],
  ['106/108', '당신은 이 공간을 모두 지나왔습니다.', 'i'],
  ['107/108', '다시 시작해도 좋습니다. 이번엔 더 천천히.', 'i'],
  ['108/108', '모든 방해가 사라지면, 당신만 남습니다.', 'i'],
];
const wrapA = document.getElementById('wrapA');
const wrapB = document.getElementById('wrapB');
const wrapC = document.getElementById('wrapC');
const wrapD = document.getElementById('wrapD');
const wrapE = document.getElementById('wrapE');
const wrapF = document.getElementById('wrapF');
const wrapG = document.getElementById('wrapG');
const wrapH = document.getElementById('wrapH');
const wrapI = document.getElementById('wrapI');
let currentIndex = 0;

for (let i = 0; i < windows.length; i++) {
  const windowEl = document.createElement('div');
  windowEl.classList.add(`window`);
  windowEl.classList.add(`window-${i}`);
  windowEl.classList.add(`window-${windows[i][2]}`);
  windowEl.style.zIndex = 2000 - i;
  windowEl.style.top = `${random(0, 100)}%`;
  windowEl.style.left = `${random(0, 100)}%`;
  windowEl.innerHTML = `
    <div class="window-header">
      <div class="window-header-text">${windows[i][0]}</div>
      <button onclick="clickX(${i})">
        <img src="./src/button.jpg"/>
      </button>
    </div>
    <div class="window-content">${windows[i][1]}</div>`;
  switch (windows[i][2]) {
    case 'a':
      wrapA.append(windowEl);
      break;
    case 'b':
      wrapB.append(windowEl);
      break;
    case 'c':
      wrapC.append(windowEl);
      break;
    case 'd':
      wrapD.append(windowEl);
      break;
    case 'e':
      wrapE.append(windowEl);
      break;
    case 'f':
      wrapF.append(windowEl);
      break;
    case 'g':
      wrapG.append(windowEl);
      break;
    case 'h':
      wrapH.append(windowEl);
      break;
    case 'i':
      wrapI.append(windowEl);
      break;
  }
}

function clickX(i) {
  if (i === currentIndex) {
    document.querySelector(`.window-${i}`).classList.add('hide');
    currentIndex++;

    if (currentIndex === 108) {
      // 0.5초 후에 이동
      setTimeout(() => {
        window.location.href = '../last/index.html';
      }, 500);
    }
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const tooltip = document.getElementById('tooltip');
let tooltipTimeout = null;

document.querySelectorAll('.window-content').forEach((el) => {
  // 데스크탑: 마우스 호버
  el.addEventListener('mouseenter', (e) => {
    clearTimeout(tooltipTimeout);
    tooltipTimeout = setTimeout(() => {
      showTooltip(e, el);
    }, 1000); // 1초 후에 툴팁 뜸
  });

  el.addEventListener('mouseleave', () => {
    clearTimeout(tooltipTimeout);
    hideTooltip();
  });

  // 모바일: 터치 길게 눌렀을 때
  el.addEventListener('touchstart', (e) => {
    clearTimeout(tooltipTimeout);
    tooltipTimeout = setTimeout(() => {
      showTooltip(e.touches[0], el);
    }, 700); // 700ms 길게 누르면 툴팁 뜸
  });

  el.addEventListener('touchend', () => {
    clearTimeout(tooltipTimeout);
    hideTooltip();
  });
});

function showTooltip(e, el) {
  tooltip.textContent = el.textContent;
  tooltip.classList.add('show');

  const tooltipWidth = tooltip.offsetWidth;
  const pageWidth = window.innerWidth;

  let left = e.clientX + 10;
  let top = e.clientY + 10;

  if (left + tooltipWidth > pageWidth) {
    left = e.clientX - tooltipWidth - 10;
  }

  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${left}px`;
}

function hideTooltip() {
  tooltip.classList.remove('show');
}
