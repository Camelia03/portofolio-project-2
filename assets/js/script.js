let questions = [{
    title: "What's the capital of Germany?",
    answers: ["Paris", "Berlin", "Munich", "Barcelona"],
    correctAnswer: 1,
    image: {
        url: "assets/images/question-image-1.jpg",
        alt: "Question 1 image"
    }

}, {
    title: "What's the capital of Spain?",
    answers: ["Rome", "Bucharest", "Madrid", "Sofia"],
    correctAnswer: 2,
    image: {
        url: "assets/images/question-image-2.jpg",
        alt: "Question 2 image"
    }
}, {
    title: "What is the richest country in Europe?",
    answers: ["Germany", "Austria", "Sweden", "Luxembourg"],
    correctAnswer: 3,
    image: {
        url: "assets/images/question-image-1.jpg",
        alt: "Question 1 image"
    }
}, {
    title: "What is Europe's smallest city?",
    answers: ["Vatican ", "San Marino", "Amsterdam", "Prague"],
    correctAnswer: 0,
    image: {
        url: "assets/images/question-image-1.jpg",
        alt: "Question 1 image"
    }
}, {
    title: "What is the poorest country in Europe?",
    answers: ["Bulgaria ", "Romania", "Greece", "Slovakia"],
    correctAnswer: 0,
    image: {
        url: "assets/images/question-image-1.jpg",
        alt: "Question 1 image"
    }
}, {
    title: "What's the capital of Andorra?",
    answers: ["Florence ", "Baku", "Andorra la Vella", "Sofia"],
    correctAnswer: 2,
    image: {
        url: "assets/images/question-image-1.jpg",
        alt: "Question 1 image"
    }
}, {
    title: "How many capitals are in Europe?",
    answers: ["43 ", "48", "45", "47"],
    correctAnswer: 1,
    image: {
        url: "assets/images/question-image-1.jpg",
        alt: "Question 1 image"
    }
}]

let questionIndex = 0;
let numberOfCorrectAnswers = 0;

let startButton = document.getElementById("start-btn");
let questionContainer = document.getElementById("question-container");
let question = document.getElementById("question");
let answerButtons = document.getElementsByClassName("answer-btn");
let summary = document.getElementById("summary");
let results = document.getElementById("results");
let userNameInput = document.getElementById("username");
let userName = "";
let startContainer = document.getElementById("start-container");
let restartButton = document.getElementById("restart-btn");
let questionCounter = document.getElementById("question-counter");
let questionImage = document.getElementById("question-image");
addEventListeners();


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
    userName = userNameInput.value;
    questionContainer.classList.remove("hidden")
    startContainer.classList.add("hidden")
    showQuestion(questionIndex);
}


function onAnswerClicked(index) {
    if (index == questions[questionIndex].correctAnswer) {
        numberOfCorrectAnswers++;
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
    let currentQuestion = questions[questionNumber];

    question.innerText = currentQuestion.title;
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerText = currentQuestion.answers[i];
    }

    questionCounter.innerText = `${questionNumber +1} / ${questions.length}`;

    questionImage.src = currentQuestion.image.url;
    questionImage.alt = currentQuestion.image.alt;
}


function showSummary() {
    questionContainer.classList.add("hidden")
    summary.classList.remove("hidden")
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