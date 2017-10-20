/*** Variables ***/

var characters = [{romaji:"a",hiragana:"あ",katakana:"ア"},{romaji:"i",hiragana:"い",katakana:"イ"},{romaji:"u",hiragana:"う",katakana:"ウ"},{romaji:"e",hiragana:"え",katakana:"エ"},{romaji:"o",hiragana:"お",katakana:"オ"},{romaji:"ka",hiragana:"か",katakana:"カ"},{romaji:"ki",hiragana:"き",katakana:"キ"},{romaji:"ku",hiragana:"く",katakana:"ク"},{romaji:"ke",hiragana:"け",katakana:"ケ"},{romaji:"ko",hiragana:"こ",katakana:"コ"},{romaji:"sa",hiragana:"さ",katakana:"サ"},{romaji:"shi",hiragana:"し",katakana:"シ"},{romaji:"su",hiragana:"す",katakana:"ス"},{romaji:"se",hiragana:"せ",katakana:"セ"},{romaji:"so",hiragana:"そ",katakana:"ソ"},{romaji:"ta",hiragana:"た",katakana:"タ"},{romaji:"chi",hiragana:"ち",katakana:"チ"},{romaji:"tsu",hiragana:"つ",katakana:"ツ"},{romaji:"te",hiragana:"て",katakana:"テ"},{romaji:"to",hiragana:"と",katakana:"ト"},{romaji:"na",hiragana:"な",katakana:"ナ"},{romaji:"ni",hiragana:"に",katakana:"ニ"},{romaji:"nu",hiragana:"ぬ",katakana:"ヌ"},{romaji:"ne",hiragana:"ね",katakana:"ネ"},{romaji:"no",hiragana:"の",katakana:"ノ"},{romaji:"ha",hiragana:"は",katakana:"ハ"},{romaji:"hi",hiragana:"ひ",katakana:"ヒ"},{romaji:"fu",hiragana:"ふ",katakana:"フ"},{romaji:"he",hiragana:"へ",katakana:"ヘ"},{romaji:"ho",hiragana:"ほ",katakana:"ホ"},{romaji:"ma",hiragana:"ま",katakana:"マ"},{romaji:"mi",hiragana:"み",katakana:"ミ"},{romaji:"mu",hiragana:"む",katakana:"ム"},{romaji:"me",hiragana:"め",katakana:"メ"},{romaji:"mo",hiragana:"も",katakana:"モ"},{romaji:"ya",hiragana:"や",katakana:"ヤ"},{romaji:"yu",hiragana:"ゆ",katakana:"ユ"},{romaji:"yo",hiragana:"よ",katakana:"ヨ"},{romaji:"ra",hiragana:"ら",katakana:"ラ"},{romaji:"ri",hiragana:"り",katakana:"リ"},{romaji:"ru",hiragana:"る",katakana:"ル"},{romaji:"re",hiragana:"れ",katakana:"レ"},{romaji:"ro",hiragana:"ろ",katakana:"ロ"},{romaji:"wa",hiragana:"わ",katakana:"ワ"},{romaji:"wo",hiragana:"を",katakana:"ヲ"},{romaji:"n",hiragana:"ん",katakana:"ン"}];
var answer = document.getElementById("answer");
var feedback = document.getElementById("feedback");
var squares = document.getElementsByClassName("square");
var buttonHiragana = document.getElementById("hiragana");
var buttonReset = document.getElementById("reset");
var buttonKatakana = document.getElementById("katakana");
var buttonMode = document.getElementById("mode");
var displayHiragana = true;
var jpnToEng = true;
var gameOver = false;

/*** Functions ***/

/* Fisher-Yates Shuffle */
function shuffle(a) {
  var i = a.length,
      j = 0,
      t;
  while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      t = a[i];
      a[i] = a[j];
      a[j] = t;
  }
  return a;
}

/* Generate Square Text Content */
function randomizer(a) {
  var tempArr = [];
  for(i = 0; i < squares.length; i++) {
    tempArr.push(a[i]);
  }
  shuffle(tempArr);
  for(i = 0; i < squares.length; i++) {
    /* Romaji > Japanese */
    if(jpnToEng === true) {
      squares[i].textContent = tempArr[i].romaji;
    }
    /* Hiragana > Romaji */
    else if(displayHiragana === true) {
      squares[i].textContent = tempArr[i].hiragana;
    }
    /* Katakana > Romaji */
    else {
      squares[i].textContent = tempArr[i].katakana; 
    }
  }
}

/* Reset Function */
function reset() {
  shuffle(characters);
  /* Romaji > Japanese */
  if(jpnToEng === false) {
    answer.textContent = characters[0].romaji;
  }
  /* Hiragana > Romaji */
  else if(displayHiragana === true) {
    answer.textContent = characters[0].hiragana;
  }
  /* Katakana > Romaji */
  else {
    answer.textContent = characters[0].katakana;    
  }
  randomizer(characters);
  gameOver = false;
}

/* Restore Squares */
function restoreSquares() {
  for(i = 0; i < squares.length; i++) {
    squares[i].classList.remove("fade");
  }
}

/* All Buttons */
function allButtons() {
  restoreSquares();
  feedback.textContent = "";
  buttonReset.textContent = "New Character";
  feedback.classList.remove("gameover-feedback");
  buttonReset.classList.remove("gameover-button");
}

/* Correct Answer Transition*/
function correctAnswer() {
  for(i = 0; i < squares.length; i++) {
    /* Romaji > Japanese */ 
    if(jpnToEng === true) {
      squares[i].textContent = characters[0].romaji;
    }
    /* Hiragana > Romaji */
    else if(displayHiragana === true) {
      squares[i].textContent = characters[0].hiragana;
    }
    /* Katakana > Romaji */
    else {
      squares[i].textContent = characters[0].katakana;
    }
  }
}

/* Victory Sequence */
function victorySequence() {
  feedback.classList.add("gameover-feedback");
  buttonReset.classList.add("gameover-button");
  feedback.textContent = "Correct!";
  buttonReset.textContent = "Play Again?";
  restoreSquares();
  correctAnswer();
  gameOver = true;
}

/*** Events ***/

/* Squares */
for(i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function() {
    /* Romaji > Japanese */ 
    if(jpnToEng === true && this.textContent === characters[0].romaji) {
      victorySequence();
    }
    /* Hiragana > Romaji */
    else if(displayHiragana === true && this.textContent === characters[0].hiragana) {
      victorySequence();
    }
    /* Katakana > Romaji */
    else if(this.textContent === characters[0].katakana) {
      victorySequence();
    }
    else {
      if(gameOver === false) {
        feedback.textContent = "Try Again";
        this.classList.add("fade");
      }
    }
  });
}

/* Reset Button */
buttonReset.addEventListener("click", function() {
  reset();
  allButtons();
});

/* Hiragana Button */
buttonHiragana.addEventListener("click", function() {
  if(displayHiragana === false) {
    this.classList.toggle("active");
    this.classList.toggle("inactive");
    buttonKatakana.classList.toggle("active");
    buttonKatakana.classList.toggle("inactive");
    displayHiragana = true;
    reset();
  }
  allButtons();
});

/* Katakana Button */
buttonKatakana.addEventListener("click", function() {
  if(displayHiragana === true) {
    this.classList.toggle("active");
    this.classList.toggle("inactive");
    buttonHiragana.classList.toggle("active");
    buttonHiragana.classList.toggle("inactive");
    displayHiragana = false;
    reset();
  }
  allButtons();
});

/* Mode Button */
buttonMode.addEventListener("click", function() {
  if(jpnToEng === true) {
    buttonMode.textContent = "ENG // JPN";
    jpnToEng = false;
  }
  else {
    buttonMode.textContent = "JPN // ENG";
    jpnToEng = true;
  }
  reset();
  allButtons();
});

/*** Execution ***/

reset();
