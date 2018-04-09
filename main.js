// Author: Bronson Avila

// =============================[  VARIABLES  ]============================ //

var characters = [
  { romaji: 'a', hiragana: 'あ', katakana: 'ア' },
  { romaji: 'i', hiragana: 'い', katakana: 'イ' },
  { romaji: 'u', hiragana: 'う', katakana: 'ウ' },
  { romaji: 'e', hiragana: 'え', katakana: 'エ' },
  { romaji: 'o', hiragana: 'お', katakana: 'オ' },
  { romaji: 'ka', hiragana: 'か', katakana: 'カ' },
  { romaji: 'ki', hiragana: 'き', katakana: 'キ' },
  { romaji: 'ku', hiragana: 'く', katakana: 'ク' },
  { romaji: 'ke', hiragana: 'け', katakana: 'ケ' },
  { romaji: 'ko', hiragana: 'こ', katakana: 'コ' },
  { romaji: 'sa', hiragana: 'さ', katakana: 'サ' },
  { romaji: 'shi', hiragana: 'し', katakana: 'シ' },
  { romaji: 'su', hiragana: 'す', katakana: 'ス' },
  { romaji: 'se', hiragana: 'せ', katakana: 'セ' },
  { romaji: 'so', hiragana: 'そ', katakana: 'ソ' },
  { romaji: 'ta', hiragana: 'た', katakana: 'タ' },
  { romaji: 'chi', hiragana: 'ち', katakana: 'チ' },
  { romaji: 'tsu', hiragana: 'つ', katakana: 'ツ' },
  { romaji: 'te', hiragana: 'て', katakana: 'テ' },
  { romaji: 'to', hiragana: 'と', katakana: 'ト' },
  { romaji: 'na', hiragana: 'な', katakana: 'ナ' },
  { romaji: 'ni', hiragana: 'に', katakana: 'ニ' },
  { romaji: 'nu', hiragana: 'ぬ', katakana: 'ヌ' },
  { romaji: 'ne', hiragana: 'ね', katakana: 'ネ' },
  { romaji: 'no', hiragana: 'の', katakana: 'ノ' },
  { romaji: 'ha', hiragana: 'は', katakana: 'ハ' },
  { romaji: 'hi', hiragana: 'ひ', katakana: 'ヒ' },
  { romaji: 'fu', hiragana: 'ふ', katakana: 'フ' },
  { romaji: 'he', hiragana: 'へ', katakana: 'ヘ' },
  { romaji: 'ho', hiragana: 'ほ', katakana: 'ホ' },
  { romaji: 'ma', hiragana: 'ま', katakana: 'マ' },
  { romaji: 'mi', hiragana: 'み', katakana: 'ミ' },
  { romaji: 'mu', hiragana: 'む', katakana: 'ム' },
  { romaji: 'me', hiragana: 'め', katakana: 'メ' },
  { romaji: 'mo', hiragana: 'も', katakana: 'モ' },
  { romaji: 'ya', hiragana: 'や', katakana: 'ヤ' },
  { romaji: 'yu', hiragana: 'ゆ', katakana: 'ユ' },
  { romaji: 'yo', hiragana: 'よ', katakana: 'ヨ' },
  { romaji: 'ra', hiragana: 'ら', katakana: 'ラ' },
  { romaji: 'ri', hiragana: 'り', katakana: 'リ' },
  { romaji: 'ru', hiragana: 'る', katakana: 'ル' },
  { romaji: 're', hiragana: 'れ', katakana: 'レ' },
  { romaji: 'ro', hiragana: 'ろ', katakana: 'ロ' },
  { romaji: 'wa', hiragana: 'わ', katakana: 'ワ' },
  { romaji: 'wo', hiragana: 'を', katakana: 'ヲ' },
  { romaji: 'n', hiragana: 'ん', katakana: 'ン' }
];
var advanced = [
  { romaji: 'kya', hiragana: 'きゃ', katakana: 'キャ' },
  { romaji: 'kyu', hiragana: 'きゅ', katakana: 'キュ' },
  { romaji: 'kyo', hiragana: 'きょ', katakana: 'キョ' },
  { romaji: 'sha', hiragana: 'しゃ', katakana: 'シャ' },
  { romaji: 'shu', hiragana: 'しゅ', katakana: 'シュ' },
  { romaji: 'sho', hiragana: 'しょ', katakana: 'ショ' },
  { romaji: 'cha', hiragana: 'ちゃ', katakana: 'チャ' },
  { romaji: 'chu', hiragana: 'ちゅ', katakana: 'チュ' },
  { romaji: 'cho', hiragana: 'ちょ', katakana: 'チョ' },
  { romaji: 'nya', hiragana: 'にゃ', katakana: 'ニャ' },
  { romaji: 'nyu', hiragana: 'にゅ', katakana: 'ニュ' },
  { romaji: 'nyo', hiragana: 'にょ', katakana: 'ニョ' },
  { romaji: 'hya', hiragana: 'ひゃ', katakana: 'ヒャ' },
  { romaji: 'hyu', hiragana: 'ひゅ', katakana: 'ヒュ' },
  { romaji: 'hyo', hiragana: 'ひょ', katakana: 'ヒョ' },
  { romaji: 'mya', hiragana: 'みゃ', katakana: 'ミャ' },
  { romaji: 'myu', hiragana: 'みゅ', katakana: 'ミュ' },
  { romaji: 'myo', hiragana: 'みょ', katakana: 'ミョ' },
  { romaji: 'rya', hiragana: 'りゃ', katakana: 'リャ' },
  { romaji: 'ryu', hiragana: 'りゅ', katakana: 'リュ' },
  { romaji: 'ryo', hiragana: 'りょ', katakana: 'リョ' },
  { romaji: 'ga', hiragana: 'が', katakana: 'ガ' },
  { romaji: 'gi', hiragana: 'ぎ', katakana: 'ギ' },
  { romaji: 'gu', hiragana: 'ぐ', katakana: 'グ' },
  { romaji: 'ge', hiragana: 'げ', katakana: 'ゲ' },
  { romaji: 'go', hiragana: 'ご', katakana: 'ゴ' },
  { romaji: 'za', hiragana: 'ざ', katakana: 'ザ' },
  { romaji: 'ji', hiragana: 'じ', katakana: 'ジ' },
  { romaji: 'zu', hiragana: 'ず', katakana: 'ズ' },
  { romaji: 'ze', hiragana: 'ぜ', katakana: 'ゼ' },
  { romaji: 'zo', hiragana: 'ぞ', katakana: 'ゾ' },
  { romaji: 'da', hiragana: 'だ', katakana: 'ダ' },
  { romaji: 'de', hiragana: 'で', katakana: 'デ' },
  { romaji: 'do', hiragana: 'ど', katakana: 'ド' },
  { romaji: 'ba', hiragana: 'ば', katakana: 'バ' },
  { romaji: 'bi', hiragana: 'び', katakana: 'ビ' },
  { romaji: 'bu', hiragana: 'ぶ', katakana: 'ブ' },
  { romaji: 'be', hiragana: 'べ', katakana: 'ベ' },
  { romaji: 'bo', hiragana: 'ぼ', katakana: 'ボ' },
  { romaji: 'pa', hiragana: 'ぱ', katakana: 'パ' },
  { romaji: 'pi', hiragana: 'ぴ', katakana: 'ピ' },
  { romaji: 'pu', hiragana: 'ぷ', katakana: 'プ' },
  { romaji: 'pe', hiragana: 'ぺ', katakana: 'ペ' },
  { romaji: 'po', hiragana: 'ぽ', katakana: 'ポ' },
  { romaji: 'gya', hiragana: 'ぎゃ', katakana: 'ギャ' },
  { romaji: 'gyu', hiragana: 'ぎゅ', katakana: 'ギュ' },
  { romaji: 'gyo', hiragana: 'ぎょ', katakana: 'ギョ' },
  { romaji: 'ja', hiragana: 'じゃ', katakana: 'ジャ' },
  { romaji: 'ju', hiragana: 'じゅ', katakana: 'ジュ' },
  { romaji: 'jo', hiragana: 'じょ', katakana: 'ジョ' },
  { romaji: 'bya', hiragana: 'びゃ', katakana: 'ビャ' },
  { romaji: 'byu', hiragana: 'びゅ', katakana: 'ビュ' },
  { romaji: 'byo', hiragana: 'びょ', katakana: 'ビョ' },
  { romaji: 'pya', hiragana: 'ぴゃ', katakana: 'ピャ' },
  { romaji: 'pyu', hiragana: 'ぴゅ', katakana: 'ピュ' },
  { romaji: 'pyo', hiragana: 'ぴょ', katakana: 'ピョ' }
];
var answer = document.getElementById('answer');
var feedback = document.getElementById('feedback');
var squares = document.getElementsByClassName('square');
var buttonGanaKana = document.getElementById('gana-kana');
var buttonGameType = document.getElementById('game-type');
var buttonSkill = document.getElementById('skill');
var buttonInvert = document.getElementById('invert');
var buttonReset = document.getElementById('reset');
var buttonAutoOn = document.getElementById('auto-on');
var buttonAutoOff = document.getElementById('auto-off');
var firstModes = document.querySelectorAll('.first-mode');
var secondModes = document.querySelectorAll('.second-mode');
var showHiragana = true;
var showJpnToEng = true;
var showBasic = true;
var showRandom = true;
var gameOver = false;
var quizOver = false;
var autoNext = false;
var tipDisplayed = false;
var scoredQuizCount = -1;
var scoredQuizScore = 0;
var previousAnswer;
var wrongAnswer;
var sixSquares;
var feedbackTimer;
var autoTimer;

// =============================[  FUNCTIONS  ]============================ //

function shuffle(arr) {
  var i = arr.length;
  var j = 0;
  var temp;
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function createSquareTextContent() {
  for (var i = 0; i < squares.length; i++) {
    if (showJpnToEng === true) {
      // Japanese to Romaji:
      squares[i].textContent = sixSquares[i].romaji;
    } else if (showHiragana === true) {
      // Romaji to Hiragana:
      squares[i].textContent = sixSquares[i].hiragana;
    } else {
      // Romaji to Katakana:
      squares[i].textContent = sixSquares[i].katakana;
    }
  }
}

function createRandomSquares() {
  sixSquares = [];
  for (var i = 0; i < squares.length; i++) {
    sixSquares.push(characters[i]);
  }
  shuffle(sixSquares);
  createSquareTextContent();
}

function createScoredQuizSquares() {
  sixSquares = [];
  sixSquares.push(characters[0]);
  for (var i = 0; i < squares.length - 1; i++) {
    var num = Math.floor(Math.random() * characters.length);
    // Following line prevents the occurence of duplicate cards in the array:
    sixSquares.indexOf(characters[num]) === -1
      ? sixSquares.push(characters[num])
      : i--;
  }
  shuffle(sixSquares);
  createSquareTextContent();
}

function changeScoredQuizDisplay() {
  if (showRandom === false) {
    buttonReset.textContent = scoredQuizCount + 1 + ' of ' + characters.length;
  }
  if (showRandom === false && scoredQuizCount > 0) {
    feedback.textContent = '';
  }
}

function createAnswer() {
  if (showRandom === false) {
    characters.push(characters.shift());
  }
  if (showJpnToEng === false) {
    // Japanese to Romaji:
    answer.textContent = characters[0].romaji;
  } else if (showHiragana === true) {
    // Romaji to Hiragana:
    answer.textContent = characters[0].hiragana;
  } else {
    // Romaji to Katakana:
    answer.textContent = characters[0].katakana;
  }
}

function mitigateConsecutiveRepetition() {
  for (var i = 0; i < characters.length; i++) {
    if (characters[0] === previousAnswer) {
      shuffle(characters);
    }
  }
}

function init() {
  scoredQuizCount++;
  if (quizOver === true) {
    quizOver = false;
    scoredQuizCount = -1;
    scoredQuizScore = 0;
  }
  if (showRandom === true) {
    previousAnswer = characters[0];
    shuffle(characters);
    mitigateConsecutiveRepetition();
    createAnswer();
    createRandomSquares();
    scoredQuizCount = -1;
  } else {
    if (scoredQuizCount === 0) {
      shuffle(characters);
    }
    createAnswer();
    createScoredQuizSquares();
  }
  gameOver = false;
  wrongAnswer = false;
}

function changeSquaresDisplay() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.add('inactive');
  }
}

function restoreSquaresDisplay() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.remove('wrong-answer');
  }
}

function performAllButtonOperations() {
  init();
  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.remove('inactive');
  }
  restoreSquaresDisplay();
  if (showRandom === true) {
    feedback.textContent = '';
    buttonReset.textContent = 'New Character';
  }
  changeScoredQuizDisplay();
  clearTimeout(feedbackTimer);
  clearTimeout(autoTimer);
  feedback.classList.remove('gameover-feedback');
  buttonReset.classList.remove('gameover-button');
}

function changeModeIndicator(indexNum, firstColor, secondColor) {
  firstModes[indexNum].style.backgroundColor = firstColor;
  firstModes[indexNum].classList.toggle('light-on');
  secondModes[indexNum].style.backgroundColor = secondColor;
  secondModes[indexNum].classList.toggle('light-on');
}

function showCorrectAnswerOnSquares() {
  for (var i = 0; i < squares.length; i++) {
    if (showJpnToEng === true) {
      // Japanese to Romaji:
      squares[i].textContent = characters[0].romaji;
    } else if (showHiragana === true) {
      // Romaji to Hiragana:
      squares[i].textContent = characters[0].hiragana;
    } else {
      // Romaji to Katakana:
      squares[i].textContent = characters[0].katakana;
    }
  }
}

function toggleLockedButtons() {
  if (showRandom === false) {
    buttonGanaKana.classList.add('locked');
    buttonInvert.classList.add('locked');
    buttonSkill.classList.add('locked');
    buttonReset.classList.add('locked');
  } else {
    buttonGanaKana.classList.remove('locked');
    buttonInvert.classList.remove('locked');
    buttonSkill.classList.remove('locked');
    buttonReset.classList.remove('locked');
  }
}

function animateFeedback() {
  feedback.classList.add('expand');
  setTimeout(function() {
    feedback.classList.add('contract');
  }, 125);
  setTimeout(function() {
    feedback.classList.remove('expand');
    feedback.classList.remove('contract');
  }, 250);
}

function beginScoredQuiz() {
  if (quizOver === true) {
    quizOver = false;
  }
  scoredQuizCount = -1;
  scoredQuizScore = 0;
  showRandom = false;
  feedback.textContent = 'Scored Quiz';
  buttonReset.textContent = scoredQuizCount + 1 + ' of ' + characters.length;
  buttonGameType.textContent = 'Scored Quiz';
  buttonGameType.classList.add('scored-mode');
  animateFeedback();
  changeModeIndicator(3, '#ddd', '#ee0000');
  toggleLockedButtons();
  performAllButtonOperations();
}

function setWrongQuizAnswer() {
  if (showRandom === false) {
    wrongAnswer = true;
  }
}

function addToQuizScore() {
  if (showRandom === false && wrongAnswer === false) {
    scoredQuizScore++;
  }
}

function showFinalScore() {
  feedback.textContent =
    'Quiz Over! Score: ' +
    scoredQuizScore +
    ' out of ' +
    characters.length +
    ' (' +
    Math.round(scoredQuizScore / characters.length * 100) +
    '%)';
  buttonReset.textContent = 'New Quiz';
  quizOver = true;
}

function changeFeedbackOnVictory() {
  feedback.classList.add('gameover-feedback');
  feedback.textContent = 'Correct!';
  if (tipDisplayed === false && scoredQuizCount !== characters.length - 1) {
    feedbackTimer = setTimeout(function() {
      feedback.textContent = 'TIP: Click any square below to continue.';
      tipDisplayed = true;
    }, 1500);
  }
  buttonReset.classList.add('gameover-button');
  buttonReset.textContent = 'New Character';
}

function proceedAutomatically() {
  autoTimer = setTimeout(function() {
    performAllButtonOperations();
  }, 1150);
}

function performVictorySequence() {
  changeFeedbackOnVictory();
  animateFeedback();
  changeSquaresDisplay();
  restoreSquaresDisplay();
  showCorrectAnswerOnSquares();
  addToQuizScore();
  gameOver = true;
  if (autoNext === true && scoredQuizCount !== characters.length - 1) {
    proceedAutomatically();
  }
  if (scoredQuizCount === characters.length - 1) {
    showFinalScore();
  }
}

// ==============================[  EVENTS  ]============================= //

for (var i = 0; i < squares.length; i++) {
  // "try...catch" used instead of "let" to maximize browser compatibility.
  try {
    throw i;
  } catch (ii) {
    squares[i].addEventListener('click', function() {
      if (
        // Correct Answer - Japanese to Romaji:
        showJpnToEng === true &&
        this.textContent === characters[0].romaji &&
        gameOver === false
      ) {
        performVictorySequence();
      } else if (
        // Correct Answer - Romaji to Hiragana:
        showHiragana === true &&
        this.textContent === characters[0].hiragana &&
        gameOver === false
      ) {
        performVictorySequence();
      } else if (
        // Correct Answer - Romaji to Katakana:
        this.textContent === characters[0].katakana &&
        gameOver === false
      ) {
        performVictorySequence();
      } else if (
        // Wrong Answer - Hiragana to Romaji:
        showJpnToEng === true &&
        showHiragana === true &&
        this.textContent !== characters[0].romaji &&
        gameOver === false
      ) {
        feedback.textContent = 'Try Again';
        if (this.textContent === sixSquares[ii].romaji) {
          this.classList.add('wrong-answer');
          this.textContent = sixSquares[ii].hiragana;
        } else {
          this.classList.remove('wrong-answer');
          this.textContent = sixSquares[ii].romaji;
        }
        setWrongQuizAnswer();
      } else if (
        // Wrong Answer - Romaji to Hiragana:
        showHiragana === true &&
        this.textContent !== characters[0].hiragana &&
        gameOver === false
      ) {
        feedback.textContent = 'Try Again';
        if (this.textContent === sixSquares[ii].hiragana) {
          this.classList.add('wrong-answer');
          this.textContent = sixSquares[ii].romaji;
        } else {
          this.classList.remove('wrong-answer');
          this.textContent = sixSquares[ii].hiragana;
        }
        setWrongQuizAnswer();
      } else if (
        // Wrong Answer - Katakana to Romaji:
        showJpnToEng === true &&
        showHiragana === false &&
        this.textContent !== characters[0].katakana &&
        gameOver === false
      ) {
        feedback.textContent = 'Try Again';
        if (this.textContent === sixSquares[ii].romaji) {
          this.classList.add('wrong-answer');
          this.textContent = sixSquares[ii].katakana;
        } else {
          this.classList.remove('wrong-answer');
          this.textContent = sixSquares[ii].romaji;
        }
        setWrongQuizAnswer();
      } else if (
        // Wrong Answer - Romaji to Katakana:
        showHiragana === false &&
        this.textContent !== characters[0].katakana &&
        gameOver === false
      ) {
        feedback.textContent = 'Try Again';
        if (this.textContent === sixSquares[ii].katakana) {
          this.classList.add('wrong-answer');
          this.textContent = sixSquares[ii].romaji;
        } else {
          this.classList.remove('wrong-answer');
          this.textContent = sixSquares[ii].katakana;
        }
        setWrongQuizAnswer();
      } else if (quizOver === false) {
        // Tap any square to reset; allows for faster and more comfortable use:
        performAllButtonOperations();
      }
    });
  }
}

buttonGanaKana.addEventListener('click', function() {
  if (showRandom === true) {
    if (showHiragana === true) {
      this.textContent = 'Katakana';
      showHiragana = false;
      changeModeIndicator(0, '#ddd', '#ee0000');
    } else {
      this.textContent = 'Hiragana';
      showHiragana = true;
      changeModeIndicator(0, '#ee0000', '#ddd');
    }
    performAllButtonOperations();
  }
});

buttonInvert.addEventListener('click', function() {
  if (showRandom === true) {
    if (showJpnToEng === true) {
      this.textContent = 'ENG to JPN';
      showJpnToEng = false;
      changeModeIndicator(1, '#ddd', '#ee0000');
    } else {
      this.textContent = 'JPN to ENG';
      showJpnToEng = true;
      changeModeIndicator(1, '#ee0000', '#ddd');
    }
    performAllButtonOperations();
  }
});

buttonSkill.addEventListener('click', function() {
  if (showRandom === true) {
    if (showBasic === true) {
      Array.prototype.push.apply(characters, advanced);
      this.textContent = 'Advanced';
      showBasic = false;
      changeModeIndicator(2, '#ddd', '#ee0000');
    } else {
      for (var i = 0; i < advanced.length; i++) {
        var index = characters.indexOf(advanced[i]);
        characters.splice(index, 1);
      }
      this.textContent = 'Basic';
      showBasic = true;
      changeModeIndicator(2, '#ee0000', '#ddd');
    }
    performAllButtonOperations();
  }
});

buttonGameType.addEventListener('click', function() {
  if (showRandom === true) {
    beginScoredQuiz();
  } else if (showRandom === false) {
    showRandom = true;
    this.textContent = 'Random';
    this.classList.remove('scored-mode');
    changeModeIndicator(3, '#ee0000', '#ddd');
    toggleLockedButtons();
    performAllButtonOperations();
    animateFeedback();
    // Following line must go after performAllButtonOperations() to overwrite:
    feedback.textContent = 'Random Mode';
  }
});

buttonReset.addEventListener('click', function() {
  if (quizOver === true) {
    beginScoredQuiz();
  } else if (showRandom === true || gameOver === true) {
    performAllButtonOperations();
  }
});

buttonAutoOn.addEventListener('click', function() {
  if (autoNext === false) {
    this.classList.remove('inactive-auto');
    this.classList.add('active-auto');
    buttonAutoOff.classList.remove('active-auto');
    buttonAutoOff.classList.add('inactive-auto');
  }
  autoNext = true;
});

buttonAutoOff.addEventListener('click', function() {
  if (autoNext === true) {
    this.classList.remove('inactive-auto');
    this.classList.add('active-auto');
    buttonAutoOn.classList.remove('active-auto');
    buttonAutoOn.classList.add('inactive-auto');
  }
  autoNext = false;
  clearTimeout(autoTimer);
});

// ===============================[  START  ]============================== //

init();
