// Author: Bronson Avila

/* ----========================{[  VARIABLES  ]}========================---- */

var characters = [
  { romaji: "a", hiragana: "あ", katakana: "ア" },
  { romaji: "i", hiragana: "い", katakana: "イ" },
  { romaji: "u", hiragana: "う", katakana: "ウ" },
  { romaji: "e", hiragana: "え", katakana: "エ" },
  { romaji: "o", hiragana: "お", katakana: "オ" },
  { romaji: "ka", hiragana: "か", katakana: "カ" },
  { romaji: "ki", hiragana: "き", katakana: "キ" },
  { romaji: "ku", hiragana: "く", katakana: "ク" },
  { romaji: "ke", hiragana: "け", katakana: "ケ" },
  { romaji: "ko", hiragana: "こ", katakana: "コ" },
  { romaji: "sa", hiragana: "さ", katakana: "サ" },
  { romaji: "shi", hiragana: "し", katakana: "シ" },
  { romaji: "su", hiragana: "す", katakana: "ス" },
  { romaji: "se", hiragana: "せ", katakana: "セ" },
  { romaji: "so", hiragana: "そ", katakana: "ソ" },
  { romaji: "ta", hiragana: "た", katakana: "タ" },
  { romaji: "chi", hiragana: "ち", katakana: "チ" },
  { romaji: "tsu", hiragana: "つ", katakana: "ツ" },
  { romaji: "te", hiragana: "て", katakana: "テ" },
  { romaji: "to", hiragana: "と", katakana: "ト" },
  { romaji: "na", hiragana: "な", katakana: "ナ" },
  { romaji: "ni", hiragana: "に", katakana: "ニ" },
  { romaji: "nu", hiragana: "ぬ", katakana: "ヌ" },
  { romaji: "ne", hiragana: "ね", katakana: "ネ" },
  { romaji: "no", hiragana: "の", katakana: "ノ" },
  { romaji: "ha", hiragana: "は", katakana: "ハ" },
  { romaji: "hi", hiragana: "ひ", katakana: "ヒ" },
  { romaji: "fu", hiragana: "ふ", katakana: "フ" },
  { romaji: "he", hiragana: "へ", katakana: "ヘ" },
  { romaji: "ho", hiragana: "ほ", katakana: "ホ" },
  { romaji: "ma", hiragana: "ま", katakana: "マ" },
  { romaji: "mi", hiragana: "み", katakana: "ミ" },
  { romaji: "mu", hiragana: "む", katakana: "ム" },
  { romaji: "me", hiragana: "め", katakana: "メ" },
  { romaji: "mo", hiragana: "も", katakana: "モ" },
  { romaji: "ya", hiragana: "や", katakana: "ヤ" },
  { romaji: "yu", hiragana: "ゆ", katakana: "ユ" },
  { romaji: "yo", hiragana: "よ", katakana: "ヨ" },
  { romaji: "ra", hiragana: "ら", katakana: "ラ" },
  { romaji: "ri", hiragana: "り", katakana: "リ" },
  { romaji: "ru", hiragana: "る", katakana: "ル" },
  { romaji: "re", hiragana: "れ", katakana: "レ" },
  { romaji: "ro", hiragana: "ろ", katakana: "ロ" },
  { romaji: "wa", hiragana: "わ", katakana: "ワ" },
  { romaji: "wo", hiragana: "を", katakana: "ヲ" },
  { romaji: "n", hiragana: "ん", katakana: "ン" }
];
var advanced = [
  { romaji: "kya", hiragana: "きゃ", katakana: "キャ" },
  { romaji: "kyu", hiragana: "きゅ", katakana: "キュ" },
  { romaji: "kyo", hiragana: "きょ", katakana: "キョ" },
  { romaji: "sha", hiragana: "しゃ", katakana: "シャ" },
  { romaji: "shu", hiragana: "しゅ", katakana: "シュ" },
  { romaji: "sho", hiragana: "しょ", katakana: "ショ" },
  { romaji: "cha", hiragana: "ちゃ", katakana: "チャ" },
  { romaji: "chu", hiragana: "ちゅ", katakana: "チュ" },
  { romaji: "cho", hiragana: "ちょ", katakana: "チョ" },
  { romaji: "nya", hiragana: "にゃ", katakana: "ニャ" },
  { romaji: "nyu", hiragana: "にゅ", katakana: "ニュ" },
  { romaji: "nyo", hiragana: "にょ", katakana: "ニョ" },
  { romaji: "hya", hiragana: "ひゃ", katakana: "ヒャ" },
  { romaji: "hyu", hiragana: "ひゅ", katakana: "ヒュ" },
  { romaji: "hyo", hiragana: "ひょ", katakana: "ヒョ" },
  { romaji: "mya", hiragana: "みゃ", katakana: "ミャ" },
  { romaji: "myu", hiragana: "みゅ", katakana: "ミュ" },
  { romaji: "myo", hiragana: "みょ", katakana: "ミョ" },
  { romaji: "rya", hiragana: "りゃ", katakana: "リャ" },
  { romaji: "ryu", hiragana: "りゅ", katakana: "リュ" },
  { romaji: "ryo", hiragana: "りょ", katakana: "リョ" },
  { romaji: "ga", hiragana: "が", katakana: "ガ" },
  { romaji: "gi", hiragana: "ぎ", katakana: "ギ" },
  { romaji: "gu", hiragana: "ぐ", katakana: "グ" },
  { romaji: "ge", hiragana: "げ", katakana: "ゲ" },
  { romaji: "go", hiragana: "ご", katakana: "ゴ" },
  { romaji: "za", hiragana: "ざ", katakana: "ザ" },
  { romaji: "ji", hiragana: "じ", katakana: "ジ" },
  { romaji: "zu", hiragana: "ず", katakana: "ズ" },
  { romaji: "ze", hiragana: "ぜ", katakana: "ゼ" },
  { romaji: "zo", hiragana: "ぞ", katakana: "ゾ" },
  { romaji: "da", hiragana: "だ", katakana: "ダ" },
  { romaji: "de", hiragana: "で", katakana: "デ" },
  { romaji: "do", hiragana: "ど", katakana: "ド" },
  { romaji: "ba", hiragana: "ば", katakana: "バ" },
  { romaji: "bi", hiragana: "び", katakana: "ビ" },
  { romaji: "bu", hiragana: "ぶ", katakana: "ブ" },
  { romaji: "be", hiragana: "べ", katakana: "ベ" },
  { romaji: "bo", hiragana: "ぼ", katakana: "ボ" },
  { romaji: "pa", hiragana: "ぱ", katakana: "パ" },
  { romaji: "pi", hiragana: "ぴ", katakana: "ピ" },
  { romaji: "pu", hiragana: "ぷ", katakana: "プ" },
  { romaji: "pe", hiragana: "ぺ", katakana: "ペ" },
  { romaji: "po", hiragana: "ぽ", katakana: "ポ" },
  { romaji: "gya", hiragana: "ぎゃ", katakana: "ギャ" },
  { romaji: "gyu", hiragana: "ぎゅ", katakana: "ギュ" },
  { romaji: "gyo", hiragana: "ぎょ", katakana: "ギョ" },
  { romaji: "ja", hiragana: "じゃ", katakana: "ジャ" },
  { romaji: "ju", hiragana: "じゅ", katakana: "ジュ" },
  { romaji: "jo", hiragana: "じょ", katakana: "ジョ" },
  { romaji: "bya", hiragana: "びゃ", katakana: "ビャ" },
  { romaji: "byu", hiragana: "びゅ", katakana: "ビュ" },
  { romaji: "byo", hiragana: "びょ", katakana: "ビョ" },
  { romaji: "pya", hiragana: "ぴゃ", katakana: "ピャ" },
  { romaji: "pyu", hiragana: "ぴゅ", katakana: "ピュ" },
  { romaji: "pyo", hiragana: "ぴょ", katakana: "ピョ" }
];
var answer = document.getElementById("answer");
var feedback = document.getElementById("feedback");
var squares = document.getElementsByClassName("square");
var buttonGanaKana = document.getElementById("gana-kana");
var buttonGameType = document.getElementById("game-type");
var buttonSkill = document.getElementById("skill");
var buttonInvert = document.getElementById("invert");
var buttonReset = document.getElementById("reset");
var firstModes = document.querySelectorAll(".first-mode");
var secondModes = document.querySelectorAll(".second-mode");
var showHiragana = true;
var showJpnToEng = true;
var showBasic = true;
var showFreePlay = true;
var gameOver = false;
var quizOver = false;
var scoredQuizCount = -1;
var scoredQuizScore = 0;
var previousAnswer;
var wrongAnswer;
var sixCards;

/* ----========================{[  FUNCTIONS  ]}========================---- */

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
      squares[i].textContent = sixCards[i].romaji;
    } else if (showHiragana === true) {
      // Romaji to Hiragana:
      squares[i].textContent = sixCards[i].hiragana;
    } else {
      // Romaji to Katakana:
      squares[i].textContent = sixCards[i].katakana;
    }
  }
}

function createFreePlaySquares() {
  sixCards = [];
  for (var i = 0; i < squares.length; i++) {
    sixCards.push(characters[i]);
  }
  shuffle(sixCards);
  createSquareTextContent();
}

function createScoredQuizSquares() {
  sixCards = [];
  sixCards.push(characters[0]);
  for (var i = 0; i < squares.length - 1; i++) {
    var k = Math.floor(Math.random() * characters.length);
    // Following line prevents the occurence of duplicate cards in the array:
    sixCards.indexOf(characters[k]) === -1 ? sixCards.push(characters[k]) : i--;
  }
  shuffle(sixCards);
  createSquareTextContent();
}

function changeScoredQuizDisplay() {
  if (showFreePlay === false) {
    buttonReset.textContent = scoredQuizCount + 1 + " of " + characters.length;
  }
  if (showFreePlay === false && scoredQuizCount > 0) {
    feedback.textContent = "";
  }
}

function createAnswer() {
  if (showFreePlay === false) {
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
  if (showFreePlay === true) {
    previousAnswer = characters[0];
    shuffle(characters);
    mitigateConsecutiveRepetition();
    createAnswer();
    createFreePlaySquares();
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
    squares[i].classList.add("inactive");
  }
}

function restoreSquaresDisplay() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.remove("wrong-answer");
  }
}

function performAllButtonOperations() {
  init();
  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.remove("inactive");
  }
  restoreSquaresDisplay();
  if (showFreePlay === true) {
    feedback.textContent = "";
    buttonReset.textContent = "New Character";
  }
  changeScoredQuizDisplay();
  feedback.classList.remove("gameover-feedback");
  buttonReset.classList.remove("gameover-button");
}

function changeModeIndicator(x, y, z) {
  firstModes[x].style.backgroundColor = y;
  firstModes[x].classList.toggle("light-on");
  secondModes[x].style.backgroundColor = z;
  secondModes[x].classList.toggle("light-on");
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
  if (showFreePlay === false) {
    buttonGanaKana.classList.add("locked");
    buttonInvert.classList.add("locked");
    buttonSkill.classList.add("locked");
    buttonReset.classList.add("locked");
  } else {
    buttonGanaKana.classList.remove("locked");
    buttonInvert.classList.remove("locked");
    buttonSkill.classList.remove("locked");
    buttonReset.classList.remove("locked");
  }
}

function animateFeedback() {
  feedback.classList.add("expand");
  setTimeout(function() {
    feedback.classList.add("contract");
  }, 125);
  setTimeout(function() {
    feedback.classList.remove("expand");
    feedback.classList.remove("contract");
  }, 250);
}

function beginScoredQuiz() {
  if (quizOver === true) {
    quizOver = false;
  }
  scoredQuizCount = -1;
  scoredQuizScore = 0;
  showFreePlay = false;
  feedback.textContent = "Begin Scored Quiz";
  buttonReset.textContent = scoredQuizCount + 1 + " of " + characters.length;
  buttonGameType.textContent = "Scored Quiz";
  buttonGameType.classList.add("scored-mode");
  animateFeedback();
  changeModeIndicator(3, "#ddd", "#ee0000");
  toggleLockedButtons();
  performAllButtonOperations();
}

function setWrongQuizAnswer() {
  if (showFreePlay === false) {
    wrongAnswer = true;
  }
}

function addToQuizScore() {
  if (showFreePlay === false && wrongAnswer === false) {
    scoredQuizScore++;
  }
}

function performVictorySequence() {
  if (showFreePlay === true) {
    buttonReset.textContent = "Play Again?";
  } else {
    buttonReset.textContent = "Next Character";
  }
  feedback.classList.add("gameover-feedback");
  feedback.textContent = "Correct!";
  buttonReset.classList.add("gameover-button");
  changeSquaresDisplay();
  restoreSquaresDisplay();
  showCorrectAnswerOnSquares();
  animateFeedback();
  addToQuizScore();
  gameOver = true;
  if (scoredQuizCount === characters.length - 1) {
    feedback.textContent =
      "Quiz Over! Score: " +
      scoredQuizScore +
      " out of " +
      characters.length +
      " (" +
      Math.round(scoredQuizScore / characters.length * 100) +
      "%)";
    buttonReset.textContent = "Replay Quiz?";
    quizOver = true;
  }
}

/* ----========================{[  EVENTS  ]}========================---- */

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function() {
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
      feedback.textContent = "Try Again";
      if (this.textContent === sixCards[i].romaji) {
        this.classList.add("wrong-answer");
        this.textContent = sixCards[i].hiragana;
      } else {
        this.classList.remove("wrong-answer");
        this.textContent = sixCards[i].romaji;
      }
      setWrongQuizAnswer();
    } else if (
      // Wrong Answer - Romaji to Hiragana:      
      showHiragana === true &&
      this.textContent !== characters[0].hiragana &&
      gameOver === false
    ) {
      feedback.textContent = "Try Again";
      if (this.textContent === sixCards[i].hiragana) {
        this.classList.add("wrong-answer");
        this.textContent = sixCards[i].romaji;
      } else {
        this.classList.remove("wrong-answer");
        this.textContent = sixCards[i].hiragana;
      }
      setWrongQuizAnswer();
    } else if (
      // Wrong Answer - Katakana to Romaji:      
      showJpnToEng === true &&
      showHiragana === false &&
      this.textContent !== characters[0].katakana &&
      gameOver === false
    ) {
      feedback.textContent = "Try Again";
      if (this.textContent === sixCards[i].romaji) {
        this.classList.add("wrong-answer");
        this.textContent = sixCards[i].katakana;
      } else {
        this.classList.remove("wrong-answer");
        this.textContent = sixCards[i].romaji;
      }
      setWrongQuizAnswer();
    } else if (
      // Wrong Answer - Romaji to Katakana:      
      showHiragana === false &&
      this.textContent !== characters[0].katakana &&
      gameOver === false
    ) {
      feedback.textContent = "Try Again";
      if (this.textContent === sixCards[i].katakana) {
        this.classList.add("wrong-answer");
        this.textContent = sixCards[i].romaji;
      } else {
        this.classList.remove("wrong-answer");
        this.textContent = sixCards[i].katakana;
      }
      setWrongQuizAnswer();
    } else if (quizOver === false) {
      // "Lazy Reset" allows for faster and more comfortable play:
      performAllButtonOperations();
    }
  });
}

buttonGanaKana.addEventListener("click", function() {
  if (showFreePlay === true) {
    if (showHiragana === true) {
      this.textContent = "Katakana";
      showHiragana = false;
      changeModeIndicator(0, "#ddd", "#ee0000");
    } else {
      this.textContent = "Hiragana";
      showHiragana = true;
      changeModeIndicator(0, "#ee0000", "#ddd");
    }
    performAllButtonOperations();
  }
});

buttonInvert.addEventListener("click", function() {
  if (showFreePlay === true) {
    if (showJpnToEng === true) {
      this.textContent = "ENG to JPN";
      showJpnToEng = false;
      changeModeIndicator(1, "#ddd", "#ee0000");
    } else {
      this.textContent = "JPN to ENG";
      showJpnToEng = true;
      changeModeIndicator(1, "#ee0000", "#ddd");
    }
    performAllButtonOperations();
  }
});

buttonSkill.addEventListener("click", function() {
  if (showFreePlay === true) {
    if (showBasic === true) {
      Array.prototype.push.apply(characters, advanced);
      buttonSkill.textContent = "Advanced";
      showBasic = false;
      changeModeIndicator(2, "#ddd", "#ee0000");
    } else {
      for (var i = 0; i < advanced.length; i++) {
        var index = characters.indexOf(advanced[i]);
        characters.splice(index, 1);
      }
      buttonSkill.textContent = "Basic";
      showBasic = true;
      changeModeIndicator(2, "#ee0000", "#ddd");
    }
    performAllButtonOperations();
  }
});

buttonGameType.addEventListener("click", function() {
  if (showFreePlay === true) {
    beginScoredQuiz();
  } else if (showFreePlay === false) {
    showFreePlay = true;
    buttonGameType.textContent = "Free Play";
    buttonGameType.classList.remove("scored-mode");
    changeModeIndicator(3, "#ee0000", "#ddd");
    toggleLockedButtons();
    performAllButtonOperations();
    animateFeedback();
    // Following line must go after performAllButtonOperations() to overwrite:
    feedback.textContent = "Free Play Resumed";
  }
});

buttonReset.addEventListener("click", function() {
  if (quizOver === true) {
    beginScoredQuiz();
  } else if (showFreePlay === true || gameOver === true) {
    performAllButtonOperations();
  }
});

/* ----========================{[  START  ]}========================---- */

init();
