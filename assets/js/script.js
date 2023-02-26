let questions = [{
    title: "What's your name?",
    answers: ["Maria", "Ioan", "Mihai", "Elena"],
    correctAnswer: 1
}, {
    title: "What's your dog's name?",
    answers: ["Zara", "Bobby", "Lessie", "Toby"],
    correctAnswer: 2
}, {
    title: "What's your best friend's name?",
    answers: ["Adina", "Diana", "Cristina", "Rares"],
    correctAnswer: 3
}, {
    title: "What's your mom's name?",
    answers: ["Mariana", "Adela", "Dana", "Lucretia"],
    correctAnswer: 0
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
    question.innerText = questions[questionNumber].title;
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerText = questions[questionNumber].answers[i];
    }
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