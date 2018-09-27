const answer = document.getElementById('answer');
const feedback = document.getElementById('feedback');
const cardDivs = Array.from(document.getElementsByClassName('card')); // 6 cards total
const buttonGanaKana = document.getElementById('gana-kana');
const buttonGameType = document.getElementById('game-type');
const buttonSkill = document.getElementById('skill');
const buttonInvert = document.getElementById('invert');
const buttonReset = document.getElementById('reset');
const buttonAutoOn = document.getElementById('auto-on');
const buttonAutoOff = document.getElementById('auto-off');
const primaryModes = document.getElementsByClassName('primary-mode');
const secondaryModes = document.getElementsByClassName('secondary-mode');
const activeCards = [];

let showHiragana = true;
let showJpnToEng = true;
let showBasic = true;
let showRandom = true;
let gameOver = false;
let quizOver = false;
let autoNext = false;
let tipDisplayed = false;
let scoredQuizCount = -1;
let scoredQuizScore = 0;
let previousAnswer;
let wrongAnswer;
let feedbackTimer;
let autoTimer;

// ----------------------------=[  FUNCTIONS  ]=--------------------------- //

// Fisher-Yates Shuffle:
function shuffle(arr) {
  let i = arr.length;
  let j = 0;
  let temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}

function createRandomSquares() {
  // Reset active cards array each time the function is called:
  activeCards.length = 0;

  // Fill activeCards array with the first 6 indices of the characters array:
  for (let i = 0; i < cardDivs.length; i++) {
    activeCards.push(characters[i]);
  }

  shuffle(activeCards);
  createSquareTextContent();
}

function createSquareTextContent() {
  cardDivs.forEach((card, index) => {
    if (showJpnToEng) {
      // Japanese to Romaji:
      card.textContent = activeCards[index].romaji;
    } else if (showHiragana) {
      // Romaji to Hiragana:
      card.textContent = activeCards[index].hiragana;
    } else {
      // Romaji to Katakana:
      card.textContent = activeCards[index].katakana;
    }
  });
}

function createScoredQuizSquares() {
  // Reset active cards array each time the function is called:
  activeCards.length = 0;
  // Currently required for a correct answer to be selected in quiz (NEEDS FIX):
  activeCards.push(characters[0]);

  // Choose 6 random characters to be inserted into activeCards array:
  for (let i = 0; i < cardDivs.length - 1; i++) {
    const index = Math.floor(Math.random() * characters.length);
    // Prevents insertion of duplicate characters into the array:
    activeCards.indexOf(characters[index]) === -1
      ? activeCards.push(characters[index])
      : i--;
  }

  shuffle(activeCards);
  createSquareTextContent();
}

function changeScoredQuizDisplay() {
  // Displays, e.g., "1 of 46" in the reset button when "Scored Quiz" enabled:
  if (!showRandom) {
    buttonReset.textContent = `${scoredQuizCount + 1} of ${characters.length}`;
  }
  // Clears feedback bar when messages are no longer necessary for display:
  if (!showRandom && scoredQuizCount > 0) {
    feedback.textContent = '';
  }
}

function createAnswer() {
  // For scored quiz, use first index in characters array and move to the end.
  // (Prevents duplication of characters during the quiz):
  if (!showRandom) {
    characters.push(characters.shift());
  }

  // For random mode, use first index in characters array:
  if (!showJpnToEng) {
    // Japanese to Romaji:
    answer.textContent = characters[0].romaji;
  } else if (showHiragana) {
    // Romaji to Hiragana:
    answer.textContent = characters[0].hiragana;
  } else {
    // Romaji to Katakana:
    answer.textContent = characters[0].katakana;
  }
}

function preventConsecutiveRepetition() {
  while (characters[0] === previousAnswer) {
    shuffle(characters);
  }
}

function init() {
  scoredQuizCount++;
  if (quizOver) {
    quizOver = false;
    scoredQuizCount = -1;
    scoredQuizScore = 0;
  }
  if (showRandom) {
    previousAnswer = characters[0];
    shuffle(characters);
    preventConsecutiveRepetition();
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
  cardDivs.forEach(card => {
    card.classList.add('inactive');
  });
}

function restoreSquaresDisplay() {
  cardDivs.forEach(card => {
    card.classList.remove('wrong-answer');
  });
}

function performAllButtonOperations() {
  init();
  cardDivs.forEach(card => {
    card.classList.remove('inactive');
  });
  restoreSquaresDisplay();
  if (showRandom) {
    feedback.textContent = '';
    buttonReset.textContent = 'New Character';
  }
  changeScoredQuizDisplay();
  clearTimeout(feedbackTimer);
  clearTimeout(autoTimer);
  feedback.classList.remove('gameover-feedback');
  buttonReset.classList.remove('gameover-button');
}

function changeModeIndicator(index, toggleOnBoolean) {
  // First index is "active" color; second index is "inactive" color:
  const colorsArr = ['#ee0000', '#ddd'];
  const primaryModeColor = toggleOnBoolean ? colorsArr[0] : colorsArr[1];
  const secondaryModeColor = toggleOnBoolean ? colorsArr[1] : colorsArr[0];

  // Change "left" light color for primary mode:
  primaryModes[index].style.backgroundColor = primaryModeColor;
  primaryModes[index].classList.toggle('light-on');

  // Change "right" light color for secondary mode:
  secondaryModes[index].style.backgroundColor = secondaryModeColor;
  secondaryModes[index].classList.toggle('light-on');
}

function showCorrectAnswerOnSquares() {
  cardDivs.forEach(card => {
    if (showJpnToEng) {
      // Japanese to Romaji:
      card.textContent = characters[0].romaji;
    } else if (showHiragana) {
      // Romaji to Hiragana:
      card.textContent = characters[0].hiragana;
    } else {
      // Romaji to Katakana:
      card.textContent = characters[0].katakana;
    }
  });
}

function toggleLockedButtons() {
  if (!showRandom) {
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

  setTimeout(() => {
    feedback.classList.add('contract');
  }, 125);

  setTimeout(() => {
    feedback.classList.remove('expand');
    feedback.classList.remove('contract');
  }, 250);
}

function beginScoredQuiz() {
  if (quizOver) {
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
  changeModeIndicator(3, false);
  toggleLockedButtons();
  performAllButtonOperations();
}

function setWrongQuizAnswer() {
  if (!showRandom) {
    wrongAnswer = true;
  }
}

function addToQuizScore() {
  if (!showRandom && !wrongAnswer) {
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
    Math.round((scoredQuizScore / characters.length) * 100) +
    '%)';
  buttonReset.textContent = 'New Quiz';
  quizOver = true;
}

function changeFeedbackOnVictory() {
  feedback.classList.add('gameover-feedback');
  feedback.textContent = 'Correct!';

  if (!tipDisplayed && scoredQuizCount !== characters.length - 1) {
    feedbackTimer = setTimeout(() => {
      feedback.textContent = 'TIP: Click any square below to continue.';
      tipDisplayed = true;
    }, 1500);
  }

  buttonReset.classList.add('gameover-button');

  if (showRandom) {
    buttonReset.textContent = 'New Character';
  } else {
    buttonReset.textContent = 'Next Character';
  }
}

function proceedAutomatically() {
  autoTimer = setTimeout(() => {
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

  if (autoNext && scoredQuizCount !== characters.length - 1) {
    proceedAutomatically();
  }

  if (scoredQuizCount === characters.length - 1) {
    showFinalScore();
  }
}

function verifyCorrectAnswer(textContent) {
  if (
    // Correct Answer - Japanese to Romaji:
    (showJpnToEng && textContent === characters[0].romaji) ||
    // Correct Answer - Romaji to Hiragana:
    (showHiragana && textContent === characters[0].hiragana) ||
    // Correct Answer - Romaji to Katakana:
    (!showJpnToEng && !showHiragana && textContent === characters[0].katakana)
  ) {
    return true;
  }
  return false;
}

function setWrongAnswerType(cardText) {
  // Wrong Answer - Hiragana to Romaji:
  if (showJpnToEng && showHiragana && cardText !== characters[0].romaji) {
    return 'wrong-hiragana-to-romaji';
  }
  // Wrong Answer - Romaji to Hiragana:
  if (showHiragana && cardText !== characters[0].hiragana) {
    return 'wrong-romaji-to-hiragana';
  }
  // Wrong Answer - Katakana to Romaji:
  if (showJpnToEng && !showHiragana && cardText !== characters[0].katakana) {
    return 'wrong-katakana-to-romaji';
  }
  // Wrong Answer - Romaji to Katakana:
  if (!showHiragana && cardText !== characters[0].katakana) {
    return 'wrong-romaji-to-katakana';
  }
}

// Change card display to show the translation of a wrongly selected character:
function handleWrongAnswer(card, displayedChar, translatedChar) {
  if (card.textContent === displayedChar) {
    card.classList.add('wrong-answer');
    card.textContent = translatedChar;
  } else {
    card.classList.remove('wrong-answer');
    card.textContent = displayedChar;
  }
}

// -----------------------------=[  EVENTS  ]=---------------------------- //

// Event listeners to be triggered when user selects a correct/incorrect card:
cardDivs.forEach((card, index) => {
  card.addEventListener('click', () => {
    // For correct answers:
    if (verifyCorrectAnswer(card.textContent) && !gameOver) {
      performVictorySequence();
    }

    // For wrong answers:
    else if (!gameOver) {
      const activeCard = activeCards[index];
      feedback.textContent = 'Try Again';

      switch (setWrongAnswerType(card.textContent)) {
        case 'wrong-hiragana-to-romaji':
          handleWrongAnswer(card, activeCard.romaji, activeCard.hiragana);
          break;
        case 'wrong-romaji-to-hiragana':
          handleWrongAnswer(card, activeCard.hiragana, activeCard.romaji);
          break;
        case 'wrong-katakana-to-romaji':
          handleWrongAnswer(card, activeCard.romaji, activeCard.katakana);
          break;
        case 'wrong-romaji-to-katakana':
          handleWrongAnswer(card, activeCard.katakana, activeCard.romaji);
          break;
      }
      setWrongQuizAnswer();
    }

    // Tap any card to reset; allows for faster and more comfortable use.
    // Only possible to trigger after selecting a card, regardless of whether
    // or not the selection was correct.  However, this option is disabled
    // when the user ends a scored quiz session so as to prevent the accidental
    // advancement to a new a quiz without the user having the opportunity to
    // review the score displayed in the feedback bar:
    else if (!quizOver) {
      performAllButtonOperations();
    }
  });
});

buttonGanaKana.addEventListener('click', function() {
  if (showRandom) {
    if (showHiragana) {
      this.textContent = 'Katakana';
      showHiragana = false;
      changeModeIndicator(0, false);
    } else {
      this.textContent = 'Hiragana';
      showHiragana = true;
      changeModeIndicator(0, true);
    }
    performAllButtonOperations();
  }
});

buttonInvert.addEventListener('click', function() {
  if (showRandom) {
    if (showJpnToEng) {
      this.textContent = 'ENG to JPN';
      showJpnToEng = false;
      changeModeIndicator(1, false);
    } else {
      this.textContent = 'JPN to ENG';
      showJpnToEng = true;
      changeModeIndicator(1, true);
    }
    performAllButtonOperations();
  }
});

buttonSkill.addEventListener('click', function() {
  if (showRandom) {
    if (showBasic) {
      Array.prototype.push.apply(characters, advancedCharacters);
      this.textContent = 'Advanced';
      showBasic = false;
      changeModeIndicator(2, false);
    } else {
      for (let i = 0; i < advancedCharacters.length; i++) {
        const index = characters.indexOf(advancedCharacters[i]);
        characters.splice(index, 1);
      }
      this.textContent = 'Basic';
      showBasic = true;
      changeModeIndicator(2, true);
    }
    performAllButtonOperations();
  }
});

buttonGameType.addEventListener('click', function() {
  if (showRandom) {
    beginScoredQuiz();
  } else if (!showRandom) {
    showRandom = true;
    this.textContent = 'Random';
    this.classList.remove('scored-mode');

    changeModeIndicator(3, true);
    toggleLockedButtons();
    performAllButtonOperations();
    animateFeedback();

    // Following line must go after performAllButtonOperations() to overwrite:
    feedback.textContent = 'Random Mode';
  }
});

buttonReset.addEventListener('click', function() {
  if (quizOver) {
    beginScoredQuiz();
  } else if (showRandom || gameOver) {
    performAllButtonOperations();
  }
});

buttonAutoOn.addEventListener('click', function() {
  if (!autoNext) {
    this.classList.remove('inactive-auto');
    this.classList.add('active-auto');
    buttonAutoOff.classList.remove('active-auto');
    buttonAutoOff.classList.add('inactive-auto');
  }
  autoNext = true;
});

buttonAutoOff.addEventListener('click', function() {
  if (autoNext) {
    this.classList.remove('inactive-auto');
    this.classList.add('active-auto');
    buttonAutoOn.classList.remove('active-auto');
    buttonAutoOn.classList.add('inactive-auto');
  }
  autoNext = false;
  clearTimeout(autoTimer);
});

// ------------------------------=[  START  ]=----------------------------- //

init();
