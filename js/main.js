// Author: Bronson Avila 

//--------------------------------------------------------------------------
// Variables
//--------------------------------------------------------------------------

var characters = [{romaji:"a",hiragana:"あ",katakana:"ア"},{romaji:"i",hiragana:"い",katakana:"イ"},{romaji:"u",hiragana:"う",katakana:"ウ"},{romaji:"e",hiragana:"え",katakana:"エ"},{romaji:"o",hiragana:"お",katakana:"オ"},{romaji:"ka",hiragana:"か",katakana:"カ"},{romaji:"ki",hiragana:"き",katakana:"キ"},{romaji:"ku",hiragana:"く",katakana:"ク"},{romaji:"ke",hiragana:"け",katakana:"ケ"},{romaji:"ko",hiragana:"こ",katakana:"コ"},{romaji:"sa",hiragana:"さ",katakana:"サ"},{romaji:"shi",hiragana:"し",katakana:"シ"},{romaji:"su",hiragana:"す",katakana:"ス"},{romaji:"se",hiragana:"せ",katakana:"セ"},{romaji:"so",hiragana:"そ",katakana:"ソ"},{romaji:"ta",hiragana:"た",katakana:"タ"},{romaji:"chi",hiragana:"ち",katakana:"チ"},{romaji:"tsu",hiragana:"つ",katakana:"ツ"},{romaji:"te",hiragana:"て",katakana:"テ"},{romaji:"to",hiragana:"と",katakana:"ト"},{romaji:"na",hiragana:"な",katakana:"ナ"},{romaji:"ni",hiragana:"に",katakana:"ニ"},{romaji:"nu",hiragana:"ぬ",katakana:"ヌ"},{romaji:"ne",hiragana:"ね",katakana:"ネ"},{romaji:"no",hiragana:"の",katakana:"ノ"},{romaji:"ha",hiragana:"は",katakana:"ハ"},{romaji:"hi",hiragana:"ひ",katakana:"ヒ"},{romaji:"fu",hiragana:"ふ",katakana:"フ"},{romaji:"he",hiragana:"へ",katakana:"ヘ"},{romaji:"ho",hiragana:"ほ",katakana:"ホ"},{romaji:"ma",hiragana:"ま",katakana:"マ"},{romaji:"mi",hiragana:"み",katakana:"ミ"},{romaji:"mu",hiragana:"む",katakana:"ム"},{romaji:"me",hiragana:"め",katakana:"メ"},{romaji:"mo",hiragana:"も",katakana:"モ"},{romaji:"ya",hiragana:"や",katakana:"ヤ"},{romaji:"yu",hiragana:"ゆ",katakana:"ユ"},{romaji:"yo",hiragana:"よ",katakana:"ヨ"},{romaji:"ra",hiragana:"ら",katakana:"ラ"},{romaji:"ri",hiragana:"り",katakana:"リ"},{romaji:"ru",hiragana:"る",katakana:"ル"},{romaji:"re",hiragana:"れ",katakana:"レ"},{romaji:"ro",hiragana:"ろ",katakana:"ロ"},{romaji:"wa",hiragana:"わ",katakana:"ワ"},{romaji:"wo",hiragana:"を",katakana:"ヲ"},{romaji:"n",hiragana:"ん",katakana:"ン"}];
var advanced = [{romaji:"kya",hiragana:"きゃ",katakana:"キャ"},{romaji:"kyu",hiragana:"きゅ",katakana:"キュ"},{romaji:"kyo",hiragana:"きょ",katakana:"キョ"},{romaji:"sha",hiragana:"しゃ",katakana:"シャ"},{romaji:"shu",hiragana:"しゅ",katakana:"シュ"},{romaji:"sho",hiragana:"しょ",katakana:"ショ"},{romaji:"cha",hiragana:"ちゃ",katakana:"チャ"},{romaji:"chu",hiragana:"ちゅ",katakana:"チュ"},{romaji:"cho",hiragana:"ちょ",katakana:"チョ"},{romaji:"nya",hiragana:"にゃ",katakana:"ニャ"},{romaji:"nyu",hiragana:"にゅ",katakana:"ニュ"},{romaji:"nyo",hiragana:"にょ",katakana:"ニョ"},{romaji:"hya",hiragana:"ひゃ",katakana:"ヒャ"},{romaji:"hyu",hiragana:"ひゅ",katakana:"ヒュ"},{romaji:"hyo",hiragana:"ひょ",katakana:"ヒョ"},{romaji:"mya",hiragana:"みゃ",katakana:"ミャ"},{romaji:"myu",hiragana:"みゅ",katakana:"ミュ"},{romaji:"myo",hiragana:"みょ",katakana:"ミョ"},{romaji:"rya",hiragana:"りゃ",katakana:"リャ"},{romaji:"ryu",hiragana:"りゅ",katakana:"リュ"},{romaji:"ryo",hiragana:"りょ",katakana:"リョ"},{romaji:"ga",hiragana:"が",katakana:"ガ"},{romaji:"gi",hiragana:"ぎ",katakana:"ギ"},{romaji:"gu",hiragana:"ぐ",katakana:"グ"},{romaji:"ge",hiragana:"げ",katakana:"ゲ"},{romaji:"go",hiragana:"ご",katakana:"ゴ"},{romaji:"za",hiragana:"ざ",katakana:"ザ"},{romaji:"ji",hiragana:"じ",katakana:"ジ"},{romaji:"zu",hiragana:"ず",katakana:"ズ"},{romaji:"ze",hiragana:"ぜ",katakana:"ゼ"},{romaji:"zo",hiragana:"ぞ",katakana:"ゾ"},{romaji:"da",hiragana:"だ",katakana:"ダ"},{romaji:"de",hiragana:"で",katakana:"デ"},{romaji:"do",hiragana:"ど",katakana:"ド"},{romaji:"ba",hiragana:"ば",katakana:"バ"},{romaji:"bi",hiragana:"び",katakana:"ビ"},{romaji:"bu",hiragana:"ぶ",katakana:"ブ"},{romaji:"be",hiragana:"べ",katakana:"ベ"},{romaji:"bo",hiragana:"ぼ",katakana:"ボ"},{romaji:"pa",hiragana:"ぱ",katakana:"パ"},{romaji:"pi",hiragana:"ぴ",katakana:"ピ"},{romaji:"pu",hiragana:"ぷ",katakana:"プ"},{romaji:"pe",hiragana:"ぺ",katakana:"ペ"},{romaji:"po",hiragana:"ぽ",katakana:"ポ"},{romaji:"gya",hiragana:"ぎゃ",katakana:"ギャ"},{romaji:"gyu",hiragana:"ぎゅ",katakana:"ギュ"},{romaji:"gyo",hiragana:"ぎょ",katakana:"ギョ"},{romaji:"ja",hiragana:"じゃ",katakana:"ジャ"},{romaji:"ju",hiragana:"じゅ",katakana:"ジュ"},{romaji:"jo",hiragana:"じょ",katakana:"ジョ"},{romaji:"bya",hiragana:"びゃ",katakana:"ビャ"},{romaji:"byu",hiragana:"びゅ",katakana:"ビュ"},{romaji:"byo",hiragana:"びょ",katakana:"ビョ"},{romaji:"pya",hiragana:"ぴゃ",katakana:"ピャ"},{romaji:"pyu",hiragana:"ぴゅ",katakana:"ピュ"},{romaji:"pyo",hiragana:"ぴょ",katakana:"ピョ"}];
var answer = document.getElementById("answer");
var feedback = document.getElementById("feedback");
var squares = document.getElementsByClassName("square");
var buttonHiragana = document.getElementById("hiragana");
var buttonKatakana = document.getElementById("katakana");
var buttonSkill = document.getElementById("skill");
var buttonMode = document.getElementById("mode");
var buttonReset = document.getElementById("reset");
var showHiragana = true;
var showBasic = true;
var showJpnToEng = true;
var gameOver = false;
var previousAnswer;
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

/* Generate Squares Text Content */
function randomizer(arr) {
  sixCards = [];
  for(i = 0; i < squares.length; i++) {
    sixCards.push(arr[i]);
  }
  shuffle(sixCards);
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

/* Create Answer */
function createAnswer() {
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

/* Toggle Skill Level */
function toggleSkill() {
  if(showBasic === true) {
    Array.prototype.push.apply(characters, advanced);
    buttonSkill.textContent = "Advanced";
    showBasic = false;
  }
  else {
    for(i = 0; i < (advanced.length); i++) {
      var index = characters.indexOf(advanced[i]);
      characters.splice(index, 1);
    }
    buttonSkill.textContent = "Basic";
    showBasic = true;
  }
  init();
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

/* Expand-Contract Animation */
function animate(elem) {
  elem.classList.add("expand");
  setTimeout(function() {
    elem.classList.add("contract")
  }, 125);
  setTimeout(function() {
    elem.classList.remove("expand");
    elem.classList.remove("contract");
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
      }
      /* Lazy Reset */
      else {
        init();
        allButtons();
      }
  });
  }
}

/* Hiragana Button */
buttonHiragana.addEventListener("click", function() {
  if(showHiragana === false) {
    this.classList.toggle("active-button");
    this.classList.toggle("inactive-button");
    buttonKatakana.classList.toggle("active-button");
    buttonKatakana.classList.toggle("inactive-button");
    showHiragana = true;
    init();
  }
  else if(gameOver === true) {
    init();
  }
  allButtons();
});

/* Katakana Button */
buttonKatakana.addEventListener("click", function() {
  if(showHiragana === true) {
    this.classList.toggle("active-button");
    this.classList.toggle("inactive-button");
    buttonHiragana.classList.toggle("active-button");
    buttonHiragana.classList.toggle("inactive-button");
    showHiragana = false;
    init();
  }
  else if(gameOver === true) {
    init();
  }
  allButtons();
});

/* Skill Button */
buttonSkill.addEventListener("click", function() {
  this.classList.toggle("alternate-mode");
  toggleSkill();
  init();
  allButtons();
});

/* Mode Button */
buttonMode.addEventListener("click", function() {
  if(showJpnToEng === true) {
    buttonMode.textContent = "ENG to JPN";
    showJpnToEng = false;
  }
  else {
    buttonMode.textContent = "JPN to ENG";
    showJpnToEng = true;
  }
  this.classList.toggle("alternate-mode");
  init();
  allButtons();
});

/* Reset Button */
buttonReset.addEventListener("click", function() {
  init();
  allButtons();
});

//--------------------------------------------------------------------------
// Let's Go!
//--------------------------------------------------------------------------

init();
