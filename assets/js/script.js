// List of questions
let questions = [{
    title: "What's the capital of Germany?",
    answers: ["Paris", "Berlin", "Munich", "Barcelona"],
    correctAnswer: 1,
    image: {
        url: "assets/images/question-image-1.webp",
        alt: "Question 1 image"
    }
}, {
    title: "What's the capital of Spain?",
    answers: ["Rome", "Bucharest", "Madrid", "Sofia"],
    correctAnswer: 2,
    image: {
        url: "assets/images/question-image-2.webp",
        alt: "Question 2 image"
    }
}, {
    title: "What is the richest country in Europe?",
    answers: ["Germany", "Austria", "Sweden", "Luxembourg"],
    correctAnswer: 3,
    image: {
        url: "assets/images/question-image-3.webp",
        alt: "Question 3 image"
    }
}, {
    title: "What is the oldest monarchy in Europe?",
    answers: ["Denmark", "Spain", "Sweden", "Norway"],
    correctAnswer: 0,
    image: {
        url: "assets/images/question-image-4.webp",
        alt: "Question 4 image"
    }
}, {
    title: "What is the poorest country in Europe?",
    answers: ["Bulgaria", "Romania", "Greece", "Slovakia"],
    correctAnswer: 0,
    image: {
        url: "assets/images/question-image-5.webp",
        alt: "Question 5 image"
    }
}, {
    title: "What's the country with the most castles in Europe?",
    answers: ["Germany", "Slovakia", "Czech Republic", "Spain"],
    correctAnswer: 2,
    image: {
        url: "assets/images/question-image-6.webp",
        alt: "Question 6 image"
    }
}, {
    title: "What's the country with the tallest building in Europe?",
    answers: ["Norway", "Russia", "Italy", "Poland"],
    correctAnswer: 1,
    image: {
        url: "assets/images/question-image-7.webp",
        alt: "Question 7 image"
    }
}, {
    title: "What's the country with the longest coastline in Europe?",
    answers: ["Italy", "Norway", "Greece", "Portugal"],
    correctAnswer: 1,
    image: {
        url: "assets/images/question-image-8.webp",
        alt: "Question 8 image"
    }
}, {
    title: "What's the country in Europe where is illegal to mow your lawn on Sundays?",
    answers: ["Germany", "Austria", "Switzerland", "Finland"],
    correctAnswer: 2,
    image: {
        url: "assets/images/question-image-9.webp",
        alt: "Question 9 image"
    }
}, {
    title: "What's the country in Europe which doesn't have mosquitos?",
    answers: ["Norway", "Germany", "United Kingdom", "Iceland"],
    correctAnswer: 3,
    image: {
        url: "assets/images/question-image-10.webp",
        alt: "Question 10 image"
    }
}];

// Global variables
let questionIndex = 0;
let numberOfCorrectAnswers = 0;
let userName = "";

// Html references
let startButton = document.getElementById("start-btn");
let questionContainer = document.getElementById("question-container");
let question = document.getElementById("question");
let answerButtons = document.getElementsByClassName("answer-btn");
let summary = document.getElementById("summary");
let results = document.getElementById("results");
let userNameInput = document.getElementById("username");
let startContainer = document.getElementById("start-container");
let restartButton = document.getElementById("restart-btn");
let questionCounter = document.getElementById("question-counter");
let questionImage = document.getElementById("question-image");
let usernameError = document.getElementById("username-error");

addEventListeners();

// Attach Event Listeners to buttons
function addEventListeners() {
    startButton.addEventListener("click", onStartClicked);

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener("click", function () {
            onAnswerClicked(i);
        });
    }

    userNameInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            onStartClicked();
        }
        usernameError.classList.add("hidden");
    });

    restartButton.addEventListener("click", onRestartClicked);
}


function onStartClicked() {
    // Save user name for later
    userName = userNameInput.value.trim();

    // Validate that user name input is not empty
    if (userName === "") {
        usernameError.classList.remove("hidden");
        return;
    }

    // Hide start section and show the quiz section
    questionContainer.classList.remove("hidden");
    startContainer.classList.add("hidden");

    // Display the first question
    showQuestion(questionIndex);
}


function onAnswerClicked(index) {
    let correctAnswer = questions[questionIndex].correctAnswer;

    // Check if answer is correct
    if (index == correctAnswer) {
        numberOfCorrectAnswers++;
    }

    // Show correct and wrong answers
    for (let i = 0; i < answerButtons.length; i++) {
        if (i === correctAnswer) {
            answerButtons[i].classList.add("correct");
        } else {
            answerButtons[i].classList.add("wrong");
        }

        answerButtons[i].setAttribute("disabled", true);
    }

    // After 2 seconds show next question or summary
    setTimeout(function () {
        if (questionIndex == questions.length - 1) {
            // End of the Quiz Reached
            showSummary();
            return;
        }
        questionIndex++;
        showQuestion(questionIndex);
    }, 1500);
}


function showQuestion(questionNumber) {
    // Get current question
    let currentQuestion = questions[questionNumber];

    // Set question title
    question.innerText = currentQuestion.title;

    // Set answers and clear correct/wrong status
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerText = currentQuestion.answers[i];
        answerButtons[i].classList.remove("correct", "wrong");
        answerButtons[i].removeAttribute("disabled");
    }

    // Set counter
    questionCounter.innerText = `${questionNumber +1} / ${questions.length}`;

    // Set image
    questionImage.src = currentQuestion.image.url;
    questionImage.alt = currentQuestion.image.alt;
}


function showSummary() {
    // Hide quiz section and show summary
    questionContainer.classList.add("hidden");
    summary.classList.remove("hidden");

    // Set summary text
    results.innerText = "Congratulations, " + userName + "! You answered correct to " + numberOfCorrectAnswers + " out of " + questions.length + " questions.";
}

function onRestartClicked() {
    // Hide summary
    summary.classList.add("hidden");

    // Show start up
    questionContainer.classList.add("hidden");
    startContainer.classList.remove("hidden");

    // Reset index
    questionIndex = 0;
    numberOfCorrectAnswers = 0;
}