/*** Variables ***/

var characters = [{romaji:"a",hiragana:"あ",katakana:"ア"},{romaji:"i",hiragana:"い",katakana:"イ"},{romaji:"u",hiragana:"う",katakana:"ウ"},{romaji:"e",hiragana:"え",katakana:"エ"},{romaji:"o",hiragana:"お",katakana:"オ"},{romaji:"ka",hiragana:"か",katakana:"カ"},{romaji:"ki",hiragana:"き",katakana:"キ"},{romaji:"ku",hiragana:"く",katakana:"ク"},{romaji:"ke",hiragana:"け",katakana:"ケ"},{romaji:"ko",hiragana:"こ",katakana:"コ"},{romaji:"sa",hiragana:"さ",katakana:"サ"},{romaji:"shi",hiragana:"し",katakana:"シ"},{romaji:"su",hiragana:"す",katakana:"ス"},{romaji:"se",hiragana:"せ",katakana:"セ"},{romaji:"so",hiragana:"そ",katakana:"ソ"},{romaji:"ta",hiragana:"た",katakana:"タ"},{romaji:"chi",hiragana:"ち",katakana:"チ"},{romaji:"tsu",hiragana:"つ",katakana:"ツ"},{romaji:"te",hiragana:"て",katakana:"テ"},{romaji:"to",hiragana:"と",katakana:"ト"},{romaji:"na",hiragana:"な",katakana:"ナ"},{romaji:"ni",hiragana:"に",katakana:"ニ"},{romaji:"nu",hiragana:"ぬ",katakana:"ヌ"},{romaji:"ne",hiragana:"ね",katakana:"ネ"},{romaji:"no",hiragana:"の",katakana:"ノ"},{romaji:"ha",hiragana:"は",katakana:"ハ"},{romaji:"hi",hiragana:"ひ",katakana:"ヒ"},{romaji:"fu",hiragana:"ふ",katakana:"フ"},{romaji:"he",hiragana:"へ",katakana:"ヘ"},{romaji:"ho",hiragana:"ほ",katakana:"ホ"},{romaji:"ma",hiragana:"ま",katakana:"マ"},{romaji:"mi",hiragana:"み",katakana:"ミ"},{romaji:"mu",hiragana:"む",katakana:"ム"},{romaji:"me",hiragana:"め",katakana:"メ"},{romaji:"mo",hiragana:"も",katakana:"モ"},{romaji:"ya",hiragana:"や",katakana:"ヤ"},{romaji:"yu",hiragana:"ゆ",katakana:"ユ"},{romaji:"yo",hiragana:"よ",katakana:"ヨ"},{romaji:"ra",hiragana:"ら",katakana:"ラ"},{romaji:"ri",hiragana:"り",katakana:"リ"},{romaji:"ru",hiragana:"る",katakana:"ル"},{romaji:"re",hiragana:"れ",katakana:"レ"},{romaji:"ro",hiragana:"ろ",katakana:"ロ"},{romaji:"wa",hiragana:"わ",katakana:"ワ"},{romaji:"wo",hiragana:"を",katakana:"ヲ"},{romaji:"n",hiragana:"ん",katakana:"ン"}];
var answer = document.getElementById("answer");
var feedback = document.getElementById("feedback");
var squares = document.getElementsByClassName("square");
var buttonReset = document.getElementById("reset");
var buttonHiragana = document.getElementById("hiragana");
var buttonKatakana = document.getElementById("katakana");
var buttonMode = document.getElementById("mode");
var displayHiragana = true;
var jpnToEng = true;
var gameOver = false;
var previousAnswer;
var sixCards;

/*** Functions ***/

/* Fisher-Yates Shuffle */
function shuffle(arr) {
  var i = arr.length,
      j = 0,
      temp;
  while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  return arr;
}

/* Generate Squares Text Content */
function randomizer(arr) {
  var tempArr = [];
  for(i = 0; i < squares.length; i++) {
    tempArr.push(arr[i]);
  }
  shuffle(tempArr);
  for(i = 0; i < squares.length; i++) {
    /* Japanese > Romaji */
    if(jpnToEng === true) {
      squares[i].textContent = tempArr[i].romaji;
    }
    /* Romaji > Hiragana */
    else if(displayHiragana === true) {
      squares[i].textContent = tempArr[i].hiragana;
    }
    /* Romaji > Katakana */
    else {
      squares[i].textContent = tempArr[i].katakana; 
    }
  }
  sixCards = tempArr;
}

/* Create Answer */
function createAnswer() {
  /* Japanese > Romaji */
  if(jpnToEng === false) {
    answer.textContent = characters[0].romaji;
  }
  /* Romaji > Hiragana */
  else if(displayHiragana === true) {
    answer.textContent = characters[0].hiragana;
  }
  /* Romaji > Katakana */
  else {
    answer.textContent = characters[0].katakana;    
  }
}

/* Initializer */
function init() {
  previousAnswer = characters[0];
  shuffle(characters);
    /* Consecutive Repetition Killer */
    for(i = 0; i < characters.length; i++) {
      if(characters[0] === previousAnswer) {
        shuffle(characters);
      }
    }
  createAnswer();
  randomizer(characters);
  gameOver = false;
}

/* Change Squares */
function changeSquares() {
  for(i = 0; i < squares.length; i++) {
    squares[i].classList.add("inactive-div");
  }
}

/* Restore Squares */
function restoreSquares() {
  for(i = 0; i < squares.length; i++) {
    squares[i].classList.remove("wrong-answer");
  }
}

/* All Button Operations */
function allButtons() {
  for(i = 0; i < squares.length; i++) {
    squares[i].classList.remove("inactive-div");
  }
  restoreSquares();
  feedback.textContent = "";
  buttonReset.textContent = "New Character";
  feedback.classList.remove("gameover-feedback");
  buttonReset.classList.remove("gameover-button");
}

/* Correct Answer Transition */
function correctAnswer() {
  for(i = 0; i < squares.length; i++) {
    /* Japanese > Romaji */ 
    if(jpnToEng === true) {
      squares[i].textContent = characters[0].romaji;
    }
    /* Romaji > Hiragana */
    else if(displayHiragana === true) {
      squares[i].textContent = characters[0].hiragana;
    }
    /* Romaji > Katakana */
    else {
      squares[i].textContent = characters[0].katakana;
    }
  }
}

/* Expand-Contract Animation */
function animate(i) {
  i.classList.add("expand");
  setTimeout(function() {
    i.classList.add("contract")
  }, 125);
  setTimeout(function() {
    i.classList.remove("expand");
    i.classList.remove("contract");
  }, 250);
}

/* Victory Sequence */
function victorySequence() {
  feedback.classList.add("gameover-feedback");
  buttonReset.classList.add("gameover-button");
  feedback.textContent = "Correct!";
  animate(feedback);
  buttonReset.textContent = "Play Again?";
  changeSquares();
  restoreSquares();
  correctAnswer();
  gameOver = true;
}

/*** Events ***/

/* Squares */
for(i = 0; i < squares.length; i++) {
  try{throw i}
  catch(ii) {
    squares[i].addEventListener("click", function() {
      /* Correct Answer - Japanese > Romaji */ 
      if(jpnToEng === true && this.textContent === characters[0].romaji && gameOver === false) {
        victorySequence();
      }
      /* Correct Answer - Romaji > Hiragana */
      else if(displayHiragana === true && this.textContent === characters[0].hiragana && gameOver === false) {
        victorySequence();
      }
      /* Correct Answer - Romaji > Katakana */
      else if(this.textContent === characters[0].katakana && gameOver === false) {
        victorySequence();
      }
      /* Wrong Answer - Hiragana > Romaji */
      else if(jpnToEng === true && displayHiragana === true && this.textContent !== characters[0].romaji && gameOver === false) {
        feedback.textContent = "Try Again";
        if(this.textContent === sixCards[ii].romaji) {
          this.classList.add("wrong-answer");
          this.textContent = sixCards[ii].hiragana;
        }
        else {
          this.classList.remove("wrong-answer");
          this.textContent = sixCards[ii].romaji;
        }        
      }    
      /* Wrong Answer - Romaji > Hiragana */
      else if(displayHiragana === true && this.textContent !== characters[0].hiragana && gameOver === false) {
        feedback.textContent = "Try Again";
        if(this.textContent === sixCards[ii].hiragana) {
          this.classList.add("wrong-answer");
          this.textContent = sixCards[ii].romaji;
        }
        else {
          this.classList.remove("wrong-answer");
          this.textContent = sixCards[ii].hiragana;
        } 
      }    
      /* Wrong Answer - Katakana > Romaji */
      else if(jpnToEng === true && displayHiragana === false && this.textContent !== characters[0].katakana && gameOver === false) {
        feedback.textContent = "Try Again";
        if(this.textContent === sixCards[ii].romaji) {
          this.classList.add("wrong-answer");
          this.textContent = sixCards[ii].katakana;
        }
        else {
          this.classList.remove("wrong-answer");
          this.textContent = sixCards[ii].romaji;
        } 
      }
      /* Wrong Answer - Romaji > Katakana */
      else if(displayHiragana === false && this.textContent !== characters[0].katakana && gameOver === false) {
        feedback.textContent = "Try Again";
        if(this.textContent === sixCards[ii].katakana) {
          this.classList.add("wrong-answer");
          this.textContent = sixCards[ii].romaji;
        }
        else {
          this.classList.remove("wrong-answer");
          this.textContent = sixCards[ii].katakana;
        } 
      }
      /* Lazy Reset */
      else {
        init();
        allButtons();
      }
  });
  }
}

/* Reset Button */
buttonReset.addEventListener("click", function() {
  init();
  allButtons();
});

/* Hiragana Button */
buttonHiragana.addEventListener("click", function() {
  if(displayHiragana === false) {
    this.classList.toggle("active-button");
    this.classList.toggle("inactive-button");
    buttonKatakana.classList.toggle("active-button");
    buttonKatakana.classList.toggle("inactive-button");
    displayHiragana = true;
    init();
  }
  else if(gameOver === true) {
    init();
  }
  allButtons();
});

/* Katakana Button */
buttonKatakana.addEventListener("click", function() {
  if(displayHiragana === true) {
    this.classList.toggle("active-button");
    this.classList.toggle("inactive-button");
    buttonHiragana.classList.toggle("active-button");
    buttonHiragana.classList.toggle("inactive-button");
    displayHiragana = false;
    init();
  }
  else if(gameOver === true) {
    init();
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
  init();
  allButtons();
});

/*** Initialize ***/

init();
