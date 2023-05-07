//LOGIN
let user;
const login = document.querySelector('.login');
const header = document.querySelector('.header');
let alertTimer;

if (login) {
  // generic function to show alerts
  const showAlert = function (type, text) {
    header.innerHTML = '';
    clearTimeout(alertTimer);
    const timeout = 10000;
    const html = `<div class="header__alert ${type}">${text}</div>`;
    header.insertAdjacentHTML('afterbegin', html);
    alertTimer = setTimeout(() => {
      header.innerHTML = '';
    }, timeout);
  };

  const content = document.querySelector('.login__content');

  content.addEventListener('click', async function (e) {
    try {
      // Guard clause to ensure that this is a login or signup button
      if (
        !e.target.classList.contains('login__content__button') &&
        !e.target.classList.contains('login__content__signup')
      ) {
        return;
      }

      const usernameEl = document.querySelector('.login__content__username');
      const passwordEl = document.querySelector('.login__content__password');

      // Guard clause to prevent hammering of the server
      if (
        usernameEl.classList.contains('processing') ||
        passwordEl.classList.contains('processing')
      ) {
        return;
      }
      const username = usernameEl.value;
      const password = passwordEl.value;

      // grey out (deactivate) the input
      [usernameEl, passwordEl].forEach((el) => {
        el.classList.toggle('processing');
        el.setAttribute('disabled', '');
      });

      const option = e.target.classList.contains('login__content__button')
        ? 'login'
        : 'signup';

      const res = await fetch(`/api/v1/auth/${option}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      // reactivate the input
      [usernameEl, passwordEl].forEach((el) => {
        console.log(el);
        el.classList.toggle('processing');
        el.removeAttribute('disabled', '');
      });

      if (data.status === 'success') {
        if (option === 'login') {
          location.assign('/game');
        }
        if (option === 'signup') {
          showAlert('created', 'User created successfully');
        }
      }
      if (data.status !== 'success') {
        throw new Error(data.message);
      }
    } catch (err) {
      showAlert('error', err);
    }
  });
}

//GAME
const game = document.querySelector('.game');
if (game) {
  // Initialize variables
  let played = false;
  let timerValue = 10;
  const TIMEOUT_FETCH = 1000;
  const INTERVAL = 1000;
  let objTimer;
  let score = 0;
  let questionArr;

  const scoreElement = document.querySelector('.game__score--current');

  const toggleTimer = function (action) {
    // Select DOM elements
    const timer = document.querySelector('.game__timer');
    const answerElements = document.querySelectorAll('.game__answer');

    if (action === 'start') {
      //start the countdown
      timer.textContent = timerValue;
      objTimer = setInterval(() => {
        //if the timer is > 1, just substract 1
        if (Number(timer.textContent) > 1) {
          timer.textContent -= 1;
        } else {
          //display the 'time up' message and start the timeout until new question asked
          timer.textContent = 'Time up!!!';
          answerElements.forEach((el) => el.classList.add('incorrect'));
          setTimeout(askQuestion, TIMEOUT_FETCH);
          played = true;
          clearTimeout(objTimer);
        }
      }, INTERVAL);
    }
    if (action === 'stop') {
      clearTimeout(objTimer);
    }
  };

  const checkAnswer = function (answer, correctAnswer) {
    // Guard clause
    if (played) return;

    // Stop the timer and activate the guard clause
    toggleTimer('stop');
    played = true;

    // Select timer (which also acts as a container for correct/incorrect text)
    const timer = document.querySelector('.game__timer');
    const candidate = Number(answer);

    // Check if the answer is correct/incorrect and add the correct class to the DOM element
    if (candidate === correctAnswer) {
      const answerElement = document.querySelector(
        `.game__answer[data-answer="${correctAnswer}"]`
      );
      answerElement.classList.add('correct');
      timer.textContent = 'Correct!!!';
      score++;
      scoreElement.textContent = `Current score: ${score}`;
    }
    if (candidate !== correctAnswer) {
      const answerElement = document.querySelector(
        `.game__answer[data-answer="${answer}"]`
      );
      answerElement.classList.add('incorrect');
      timer.textContent = 'Incorrect...';
    }

    // Start the countdown until the next question
    setTimeout(askQuestion, TIMEOUT_FETCH);
  };

  const toggleSpinner = function () {
    // Select DOM elements
    const answerContainer = document.querySelector('.game__answers');
    const questionElement = document.querySelector('.game__question');
    const answerElements = document.querySelectorAll('.game__answer');

    // Clear elements and replace question with a spinner
    answerElements.forEach((el) => el.remove());
    const html = `
                <svg class='spinner'>
                  <use xlink:href='/img/icons.svg#icon-loader'>
                </svg>
              `;
    questionElement.innerHTML = html;
  };

  const endGame = async function () {
    toggleSpinner();

    // Select DOM elements
    const answerContainer = document.querySelector('.game__answers');
    const questionElement = document.querySelector('.game__question');
    let answerElements = document.querySelectorAll('.game__answer');
    const timer = document.querySelector('.game__timer');

    // Insert whitespace instead of deleting (to avoid page resizing)
    timer.textContent = 'Saving score to server...';

    // Clear elements
    answerElements.forEach((el) => el.remove());

    // Upload score to the server
    await fetch('/api/v1/auth/saveScore', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ score }),
    });

    timer.innerHTML = '&nbsp;';
    questionElement.textContent = `Final score: ${score}`;

    // Generate and insert markup
    let html = `<div class="game__answer">Start a new game</div>`;
    answerContainer.insertAdjacentHTML('afterbegin', html);

    // Add an event listener to the restart button
    document
      .querySelector('.game__answer')
      .addEventListener('click', function () {
        location.assign('/game');
      });
  };

  const askQuestion = function () {
    // Reset the played state
    played = false;

    // Select DOM elements
    const answerContainer = document.querySelector('.game__answers');
    const questionElement = document.querySelector('.game__question');
    let answerElements = document.querySelectorAll('.game__answer');

    // Clear elements
    answerElements.forEach((el) => el.remove());
    questionElement.textContent = '';

    // Generate and insert markup
    let html = ``;

    // check if the question array is depleted
    if (questionArr.length === 0) {
      return endGame();
    }

    // 0- Pop a question from the array
    // console.log(JSON.parse(JSON.stringify(questionArr)));
    const randomQuestion = questionArr.pop();

    // 1- Questions
    questionElement.textContent = randomQuestion.question;

    // 2- Answers
    randomQuestion.answers.forEach((answer, i) => {
      html += `<div class="game__answer" data-answer=${i}>${answer}</div>`;
    });
    answerContainer.insertAdjacentHTML('afterbegin', html);

    // 3- Re-select and add event listeners to answer elements
    answerElements = document.querySelectorAll('.game__answer');
    answerElements.forEach((el) =>
      el.addEventListener('click', function (e) {
        e.preventDefault();
        checkAnswer(el.dataset.answer, randomQuestion.correctAnswer);
      })
    );

    // 4- Start timer
    toggleTimer('start');
  };

  const fetchQuestion = async function () {
    const timer = document.querySelector('.game__timer');
    timer.textContent = '';
    toggleSpinner();

    //fetch questions (the amount of questions is set on the back-end)
    const question = await fetch('/api/v1/question/normal');
    const res = await question.json();
    ({ questionArr } = res.data);

    //start the game with this question array
    askQuestion();
  };

  //init
  fetchQuestion();
}
