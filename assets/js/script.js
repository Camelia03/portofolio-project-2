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
addEventListeners();

function addEventListeners() {
    startButton.addEventListener("click", onStartClicked)

    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener("click", function () {
            onAnswerClicked(i);
        })
    }
}

function onStartClicked() {
    startButton.classList.add("hidden")
    questionContainer.classList.remove("hidden")

    showQuestion(questionIndex);
}

function onAnswerClicked(index) {
    if (index == questions[questionIndex].correctAnswer) {
        numberOfCorrectAnswers++;
    }
    if (questionIndex == questions.length - 1) {
        // End of the Quiz Reached
        questionContainer.classList.add("hidden")
        summary.classList.remove("hidden")
        results.innerText = "Congratulations! You answered correct to " + numberOfCorrectAnswers + " questions out of " + questions.length + " questions."
        return;
    }
    questionIndex++
    showQuestion(questionIndex);
    console.log(numberOfCorrectAnswers)
}

function showQuestion(questionNumber) {
    question.innerText = questions[questionNumber].title;
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerText = questions[questionNumber].answers[i];
    }
}