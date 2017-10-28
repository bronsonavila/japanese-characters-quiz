// Author: Bronson Avila 

//--------------------------------------------------------------------------
// Variables
//--------------------------------------------------------------------------

var characters = [{romaji:"a",hiragana:"あ",katakana:"ア"},{romaji:"i",hiragana:"い",katakana:"イ"},{romaji:"u",hiragana:"う",katakana:"ウ"},{romaji:"e",hiragana:"え",katakana:"エ"},{romaji:"o",hiragana:"お",katakana:"オ"},{romaji:"ka",hiragana:"か",katakana:"カ"},{romaji:"ki",hiragana:"き",katakana:"キ"},{romaji:"ku",hiragana:"く",katakana:"ク"},{romaji:"ke",hiragana:"け",katakana:"ケ"},{romaji:"ko",hiragana:"こ",katakana:"コ"},{romaji:"sa",hiragana:"さ",katakana:"サ"},{romaji:"shi",hiragana:"し",katakana:"シ"},{romaji:"su",hiragana:"す",katakana:"ス"},{romaji:"se",hiragana:"せ",katakana:"セ"},{romaji:"so",hiragana:"そ",katakana:"ソ"},{romaji:"ta",hiragana:"た",katakana:"タ"},{romaji:"chi",hiragana:"ち",katakana:"チ"},{romaji:"tsu",hiragana:"つ",katakana:"ツ"},{romaji:"te",hiragana:"て",katakana:"テ"},{romaji:"to",hiragana:"と",katakana:"ト"},{romaji:"na",hiragana:"な",katakana:"ナ"},{romaji:"ni",hiragana:"に",katakana:"ニ"},{romaji:"nu",hiragana:"ぬ",katakana:"ヌ"},{romaji:"ne",hiragana:"ね",katakana:"ネ"},{romaji:"no",hiragana:"の",katakana:"ノ"},{romaji:"ha",hiragana:"は",katakana:"ハ"},{romaji:"hi",hiragana:"ひ",katakana:"ヒ"},{romaji:"fu",hiragana:"ふ",katakana:"フ"},{romaji:"he",hiragana:"へ",katakana:"ヘ"},{romaji:"ho",hiragana:"ほ",katakana:"ホ"},{romaji:"ma",hiragana:"ま",katakana:"マ"},{romaji:"mi",hiragana:"み",katakana:"ミ"},{romaji:"mu",hiragana:"む",katakana:"ム"},{romaji:"me",hiragana:"め",katakana:"メ"},{romaji:"mo",hiragana:"も",katakana:"モ"},{romaji:"ya",hiragana:"や",katakana:"ヤ"},{romaji:"yu",hiragana:"ゆ",katakana:"ユ"},{romaji:"yo",hiragana:"よ",katakana:"ヨ"},{romaji:"ra",hiragana:"ら",katakana:"ラ"},{romaji:"ri",hiragana:"り",katakana:"リ"},{romaji:"ru",hiragana:"る",katakana:"ル"},{romaji:"re",hiragana:"れ",katakana:"レ"},{romaji:"ro",hiragana:"ろ",katakana:"ロ"},{romaji:"wa",hiragana:"わ",katakana:"ワ"},{romaji:"wo",hiragana:"を",katakana:"ヲ"},{romaji:"n",hiragana:"ん",katakana:"ン"}];
var advanced = [{romaji:"kya",hiragana:"きゃ",katakana:"キャ"},{romaji:"kyu",hiragana:"きゅ",katakana:"キュ"},{romaji:"kyo",hiragana:"きょ",katakana:"キョ"},{romaji:"sha",hiragana:"しゃ",katakana:"シャ"},{romaji:"shu",hiragana:"しゅ",katakana:"シュ"},{romaji:"sho",hiragana:"しょ",katakana:"ショ"},{romaji:"cha",hiragana:"ちゃ",katakana:"チャ"},{romaji:"chu",hiragana:"ちゅ",katakana:"チュ"},{romaji:"cho",hiragana:"ちょ",katakana:"チョ"},{romaji:"nya",hiragana:"にゃ",katakana:"ニャ"},{romaji:"nyu",hiragana:"にゅ",katakana:"ニュ"},{romaji:"nyo",hiragana:"にょ",katakana:"ニョ"},{romaji:"hya",hiragana:"ひゃ",katakana:"ヒャ"},{romaji:"hyu",hiragana:"ひゅ",katakana:"ヒュ"},{romaji:"hyo",hiragana:"ひょ",katakana:"ヒョ"},{romaji:"mya",hiragana:"みゃ",katakana:"ミャ"},{romaji:"myu",hiragana:"みゅ",katakana:"ミュ"},{romaji:"myo",hiragana:"みょ",katakana:"ミョ"},{romaji:"rya",hiragana:"りゃ",katakana:"リャ"},{romaji:"ryu",hiragana:"りゅ",katakana:"リュ"},{romaji:"ryo",hiragana:"りょ",katakana:"リョ"},{romaji:"ga",hiragana:"が",katakana:"ガ"},{romaji:"gi",hiragana:"ぎ",katakana:"ギ"},{romaji:"gu",hiragana:"ぐ",katakana:"グ"},{romaji:"ge",hiragana:"げ",katakana:"ゲ"},{romaji:"go",hiragana:"ご",katakana:"ゴ"},{romaji:"za",hiragana:"ざ",katakana:"ザ"},{romaji:"ji",hiragana:"じ",katakana:"ジ"},{romaji:"zu",hiragana:"ず",katakana:"ズ"},{romaji:"ze",hiragana:"ぜ",katakana:"ゼ"},{romaji:"zo",hiragana:"ぞ",katakana:"ゾ"},{romaji:"da",hiragana:"だ",katakana:"ダ"},{romaji:"de",hiragana:"で",katakana:"デ"},{romaji:"do",hiragana:"ど",katakana:"ド"},{romaji:"ba",hiragana:"ば",katakana:"バ"},{romaji:"bi",hiragana:"び",katakana:"ビ"},{romaji:"bu",hiragana:"ぶ",katakana:"ブ"},{romaji:"be",hiragana:"べ",katakana:"ベ"},{romaji:"bo",hiragana:"ぼ",katakana:"ボ"},{romaji:"pa",hiragana:"ぱ",katakana:"パ"},{romaji:"pi",hiragana:"ぴ",katakana:"ピ"},{romaji:"pu",hiragana:"ぷ",katakana:"プ"},{romaji:"pe",hiragana:"ぺ",katakana:"ペ"},{romaji:"po",hiragana:"ぽ",katakana:"ポ"},{romaji:"gya",hiragana:"ぎゃ",katakana:"ギャ"},{romaji:"gyu",hiragana:"ぎゅ",katakana:"ギュ"},{romaji:"gyo",hiragana:"ぎょ",katakana:"ギョ"},{romaji:"ja",hiragana:"じゃ",katakana:"ジャ"},{romaji:"ju",hiragana:"じゅ",katakana:"ジュ"},{romaji:"jo",hiragana:"じょ",katakana:"ジョ"},{romaji:"bya",hiragana:"びゃ",katakana:"ビャ"},{romaji:"byu",hiragana:"びゅ",katakana:"ビュ"},{romaji:"byo",hiragana:"びょ",katakana:"ビョ"},{romaji:"pya",hiragana:"ぴゃ",katakana:"ピャ"},{romaji:"pyu",hiragana:"ぴゅ",katakana:"ピュ"},{romaji:"pyo",hiragana:"ぴょ",katakana:"ピョ"}];
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

//--------------------------------------------------------------------------
// Functions
//--------------------------------------------------------------------------

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

/* Square Text Content */
function squareTextContent() {
  for(i = 0; i < squares.length; i++) {
    /* Japanese > Romaji */
    if(showJpnToEng === true) {
      squares[i].textContent = sixCards[i].romaji;
    }
    /* Romaji > Hiragana */
    else if(showHiragana === true) {
      squares[i].textContent = sixCards[i].hiragana;
    }
    /* Romaji > Katakana */
    else {
      squares[i].textContent = sixCards[i].katakana; 
    }
  }
}

/* Create Free Play Squares */
function createFreePlaySquares() {
  sixCards = [];
  for(i = 0; i < squares.length; i++) {
    sixCards.push(characters[i]);
  }
  shuffle(sixCards);
  squareTextContent();
}

/* Create Scored Quiz Squares */
function createScoredQuizSquares() {
  sixCards = [];
  sixCards.push(characters[0]);
  for(i = 0; i < squares.length - 1; i++) {
    var k = Math.floor(Math.random() * (characters.length));
    /* Prevent Duplicate Cards */
    sixCards.indexOf(characters[k]) === -1 ? sixCards.push(characters[k]) : i--;
  }
  shuffle(sixCards);
  squareTextContent();
}

/* Change Scored Game Display */
function changeScoredGameDisplay() {
  if(showFreePlay === false) {
    buttonReset.textContent = (scoredQuizCount + 1) + " of " + characters.length;
  }
  if(showFreePlay === false && scoredQuizCount > 0) {
    feedback.textContent = "";
  }
}

/* Create Answer */
function createAnswer() {
  if(showFreePlay === false) {
    characters.push(characters.shift());
  }
  /* Japanese > Romaji */
  if(showJpnToEng === false) {
    answer.textContent = characters[0].romaji;
  }
  /* Romaji > Hiragana */
  else if(showHiragana === true) {
    answer.textContent = characters[0].hiragana;
  }
  /* Romaji > Katakana */
  else {
    answer.textContent = characters[0].katakana;    
  }
}

/* Initialize */
function init() {
  scoredQuizCount++;
  if(quizOver === true) {
    quizOver = false;
    scoredQuizCount = -1;
    scoredQuizScore = 0;
  }
  if(showFreePlay === true) {
    previousAnswer = characters[0];
    shuffle(characters);
      /* Consecutive Repetition Killer */
      for(i = 0; i < characters.length; i++) {
        if(characters[0] === previousAnswer) {
          shuffle(characters);
        }
      }
    createAnswer();
    createFreePlaySquares();
    scoredQuizCount = -1;
  }
  else if(showFreePlay === false) {
    if(scoredQuizCount === 0) {
      shuffle(characters);
    }
    createAnswer();
    createScoredQuizSquares();
  }
  gameOver = false;
  wrongAnswer = false;
}

/* All Button Operations */
function allButtons() {
  init();
  for(i = 0; i < squares.length; i++) {
    squares[i].classList.remove("inactive");
  }
  restoreSquares();
  if(showFreePlay === true) {
    feedback.textContent = "";
    buttonReset.textContent = "New Character";
  }
  changeScoredGameDisplay();
  feedback.classList.remove("gameover-feedback");
  buttonReset.classList.remove("gameover-button");
}

/* Change Mode Indicator */
function changeModeIndicator(x, y, z) {
  firstModes[x].style.backgroundColor = y;
  firstModes[x].classList.toggle("light-on");
  secondModes[x].style.backgroundColor = z;   
  secondModes[x].classList.toggle("light-on");
}

/* Change Squares */
function changeSquares() {
  for(i = 0; i < squares.length; i++) {
    squares[i].classList.add("inactive");
  }
}

/* Restore Squares */
function restoreSquares() {
  for(i = 0; i < squares.length; i++) {
    squares[i].classList.remove("wrong-answer");
  }
}

/* Correct Answer Transition */
function correctAnswer() {
  for(i = 0; i < squares.length; i++) {
    /* Japanese > Romaji */ 
    if(showJpnToEng === true) {
      squares[i].textContent = characters[0].romaji;
    }
    /* Romaji > Hiragana */
    else if(showHiragana === true) {
      squares[i].textContent = characters[0].hiragana;
    }
    /* Romaji > Katakana */
    else {
      squares[i].textContent = characters[0].katakana;
    }
  }
}

/* Toggle Locked Buttons */
function toggleLockedButtons() {
  if(showFreePlay === false) {
    buttonGanaKana.classList.add("locked");
    buttonInvert.classList.add("locked");
    buttonSkill.classList.add("locked");
    buttonReset.classList.add("locked");    
  }
  else {
    buttonGanaKana.classList.remove("locked");
    buttonInvert.classList.remove("locked");
    buttonSkill.classList.remove("locked");
    buttonReset.classList.remove("locked");        
  }
}

/* Begin Scored Quiz */
function beginScoredQuiz() {
 if(quizOver === true) {
    quizOver = false;
  }
  scoredQuizCount = -1;
  scoredQuizScore = 0;
  showFreePlay = false;
  feedback.textContent = "Begin Scored Quiz";
  animate(feedback);
  buttonReset.textContent = (scoredQuizCount + 1) + " of " + characters.length;
  buttonGameType.textContent = "Scored Quiz";
  buttonGameType.classList.add("scored-mode");
  changeModeIndicator(3, "#ddd", "#ee0000");
  toggleLockedButtons();
  allButtons();  
}

/* Wrong Answer in Scored Quiz */
function wrongScoredQuiz() {
  if(showFreePlay === false) {
    wrongAnswer = true;
  }
}

/* Correct Answer in Scored Quiz */
function correctScoredQuiz() {
  if(showFreePlay === false && wrongAnswer === false) {
    scoredQuizScore++;
  }
}

/* Victory Animation */
function animate(elem) {
  elem.classList.add("expand");
  setTimeout(function() {
    elem.classList.add("contract")
  }, 125);
  setTimeout(function() {
    elem.classList.remove("expand");
    elem.classList.remove("contract")
  }, 250);
}

/* Victory Sequence */
function victorySequence() {
  feedback.classList.add("gameover-feedback");
  feedback.textContent = "Correct!";
  buttonReset.classList.add("gameover-button");
  if(showFreePlay === true) {
    buttonReset.textContent = "Play Again?";
  }
  else if(showFreePlay === false) {
    buttonReset.textContent = "Next Character";
  }
  changeSquares();
  restoreSquares();
  correctAnswer();
  animate(feedback);
  correctScoredQuiz();
  gameOver = true;
  if(scoredQuizCount === characters.length - 1) {
    feedback.textContent = "Quiz Over! Score: " + scoredQuizScore + " out of " + characters.length + " (" + Math.round((scoredQuizScore / characters.length) * 100) + "%)";
    buttonReset.textContent = "Replay Quiz?";
    quizOver = true;
  }
}

//--------------------------------------------------------------------------
// Events
//--------------------------------------------------------------------------

/* Squares */
for(i = 0; i < squares.length; i++) {
  try{throw i}
  catch(ii) {
    squares[i].addEventListener("click", function() {
      /* Correct Answer - Japanese > Romaji */ 
      if(showJpnToEng === true && this.textContent === characters[0].romaji && gameOver === false) {
        victorySequence();
      }
      /* Correct Answer - Romaji > Hiragana */
      else if(showHiragana === true && this.textContent === characters[0].hiragana && gameOver === false) {
        victorySequence();
      }
      /* Correct Answer - Romaji > Katakana */
      else if(this.textContent === characters[0].katakana && gameOver === false) {
        victorySequence();
      }
      /* Wrong Answer - Hiragana > Romaji */
      else if(showJpnToEng === true && showHiragana === true && this.textContent !== characters[0].romaji && gameOver === false) {
        feedback.textContent = "Try Again";
        if(this.textContent === sixCards[ii].romaji) {
          this.classList.add("wrong-answer");
          this.textContent = sixCards[ii].hiragana;
        }
        else {
          this.classList.remove("wrong-answer");
          this.textContent = sixCards[ii].romaji;
        }   
        wrongScoredQuiz();
      }    
      /* Wrong Answer - Romaji > Hiragana */
      else if(showHiragana === true && this.textContent !== characters[0].hiragana && gameOver === false) {
        feedback.textContent = "Try Again";
        if(this.textContent === sixCards[ii].hiragana) {
          this.classList.add("wrong-answer");
          this.textContent = sixCards[ii].romaji;
        }
        else {
          this.classList.remove("wrong-answer");
          this.textContent = sixCards[ii].hiragana;
        }
        wrongScoredQuiz();
      }    
      /* Wrong Answer - Katakana > Romaji */
      else if(showJpnToEng === true && showHiragana === false && this.textContent !== characters[0].katakana && gameOver === false) {
        feedback.textContent = "Try Again";
        if(this.textContent === sixCards[ii].romaji) {
          this.classList.add("wrong-answer");
          this.textContent = sixCards[ii].katakana;
        }
        else {
          this.classList.remove("wrong-answer");
          this.textContent = sixCards[ii].romaji;
        }
        wrongScoredQuiz();
      }
      /* Wrong Answer - Romaji > Katakana */
      else if(showHiragana === false && this.textContent !== characters[0].katakana && gameOver === false) {
        feedback.textContent = "Try Again";
        if(this.textContent === sixCards[ii].katakana) {
          this.classList.add("wrong-answer");
          this.textContent = sixCards[ii].romaji;
        }
        else {
          this.classList.remove("wrong-answer");
          this.textContent = sixCards[ii].katakana;
        }
        wrongScoredQuiz();
      }
      /* Lazy Reset */
      else if(quizOver === false) {
        allButtons();
      }
  });
  }
}

/* Hiragana-Katakana Button */
buttonGanaKana.addEventListener("click", function() {
  if(showFreePlay === true) {
    if(showHiragana === true) {
      this.textContent = "Katakana";
      showHiragana = false;
      changeModeIndicator(0, "#ddd", "#ee0000");    
    }
    else {
      this.textContent = "Hiragana";
      showHiragana = true;
      changeModeIndicator(0, "#ee0000", "#ddd");    
    }
    allButtons();    
  }
});

/* Invert Button */
buttonInvert.addEventListener("click", function() {
  if(showFreePlay === true) {  
    if(showJpnToEng === true) {
      this.textContent = "ENG to JPN";
      showJpnToEng = false;
      changeModeIndicator(1, "#ddd", "#ee0000");   
    }
    else {
      this.textContent = "JPN to ENG";
      showJpnToEng = true;
      changeModeIndicator(1, "#ee0000", "#ddd");  
    }
    allButtons();
  }
});

/* Skill Button */
buttonSkill.addEventListener("click", function() {
  if(showFreePlay === true) {  
    if(showBasic === true) {
      Array.prototype.push.apply(characters, advanced);
      buttonSkill.textContent = "Advanced";
      showBasic = false;
      changeModeIndicator(2, "#ddd", "#ee0000");      
    }
    else {
      for(i = 0; i < (advanced.length); i++) {
        var index = characters.indexOf(advanced[i]);
        characters.splice(index, 1);
      }
      buttonSkill.textContent = "Basic";
      showBasic = true;
      changeModeIndicator(2, "#ee0000", "#ddd");         
    }
    allButtons();
  }
});

/* Game-Type Button */
buttonGameType.addEventListener("click", function() {
  if(showFreePlay === true) {
    beginScoredQuiz();
  }
  else if(showFreePlay === false) {
    showFreePlay = true;
    buttonGameType.textContent = "Free Play";
    buttonGameType.classList.remove("scored-mode");
    changeModeIndicator(3, "#ee0000", "#ddd"); 
    toggleLockedButtons();
    allButtons();
    feedback.textContent = "Free Play Resumed";
    animate(feedback);
  }
});

/* Reset Button */
buttonReset.addEventListener("click", function() {
  if(quizOver === true) {
    beginScoredQuiz();
  }
  else if(showFreePlay === true || gameOver === true) {
    allButtons();
  }
});

//--------------------------------------------------------------------------
// Let's Go!
//--------------------------------------------------------------------------

init();
