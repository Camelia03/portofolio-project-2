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
    title: "What is Europe's smallest city?",
    answers: ["Vatican ", "San Marino", "Amsterdam", "Prague"],
    correctAnswer: 0,
    image: {
        url: "assets/images/question-image-4.webp",
        alt: "Question 4 image"
    }
}, {
    title: "What is the poorest country in Europe?",
    answers: ["Bulgaria ", "Romania", "Greece", "Slovakia"],
    correctAnswer: 0,
    image: {
        url: "assets/images/question-image-5.webp",
        alt: "Question 5 image"
    }
}, {
    title: "What's the capital of Andorra?",
    answers: ["Florence ", "Baku", "Andorra la Vella", "Sofia"],
    correctAnswer: 2,
    image: {
        url: "assets/images/question-image-6.webp",
        alt: "Question 6 image"
    }
}, {
    title: "How many capitals are in Europe?",
    answers: ["43 ", "48", "45", "47"],
    correctAnswer: 1,
    image: {
        url: "assets/images/question-image-7.webp",
        alt: "Question 7 image"
    }
}]

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

addEventListeners();

// Attach Event Listeners to buttons
function addEventListeners() {
    startButton.addEventListener("click", onStartClicked)

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener("click", function () {
            onAnswerClicked(i);
        })
    }

    restartButton.addEventListener("click", onRestartClicked)
}


function onStartClicked() {
    // Validate that user name input is not empty
    if (userNameInput.value === "") {
        alert("Please add a user name!")
        return;
    }

    // Save user name for later
    userName = userNameInput.value;

    // Hide start section and show the quiz section
    questionContainer.classList.remove("hidden")
    startContainer.classList.add("hidden")

    // Display the first question
    showQuestion(questionIndex);
}


function onAnswerClicked(index) {
    let correctAnswer = questions[questionIndex].correctAnswer;
    // Check if answer is correct
    if (index == correctAnswer) {
        numberOfCorrectAnswers++;
    } else {
        alert(`Ups! The correct answer is: ${questions[questionIndex].answers[correctAnswer]}`);
    }

    if (questionIndex == questions.length - 1) {
        // End of the Quiz Reached
        showSummary();
        return;
    }
    questionIndex++
    showQuestion(questionIndex);
}


function showQuestion(questionNumber) {
    // Get current question
    let currentQuestion = questions[questionNumber];

    // Set question title
    question.innerText = currentQuestion.title;

    // Set answers
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerText = currentQuestion.answers[i];
    }

    // Set counter
    questionCounter.innerText = `${questionNumber +1} / ${questions.length}`;

    // Set image
    questionImage.src = currentQuestion.image.url;
    questionImage.alt = currentQuestion.image.alt;
}


function showSummary() {
    // Hide quiz section and show summary
    questionContainer.classList.add("hidden")
    summary.classList.remove("hidden")

    // Set summary text
    results.innerText = "Congratulations, " + userName + "! You answered correct to " + numberOfCorrectAnswers + " out of " + questions.length + " questions."
}

function onRestartClicked() {
    // Hide summary
    summary.classList.add("hidden")

    // Show start up
    questionContainer.classList.add("hidden")
    startContainer.classList.remove("hidden")

    // Reset index
    questionIndex = 0;
    numberOfCorrectAnswers = 0;
}