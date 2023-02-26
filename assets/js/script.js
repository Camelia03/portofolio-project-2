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
}]

let questionIndex = 0;
let numberOfCorrectAnswers = 0;

let startButton = document.getElementById("start-btn");
let questionContainer = document.getElementById("question-container");
let question = document.getElementById("question");
let answerButtons = document.getElementsByClassName("answer-btn");

startButton.addEventListener("click", function () {
    startButton.classList.add("hidden")
    questionContainer.classList.remove("hidden")

    showQuestion(questionIndex);
})

for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function () {
        if (i == questions[questionIndex].correctAnswer) {
            numberOfCorrectAnswers++;
        }
        questionIndex++
        showQuestion(questionIndex);
        console.log(numberOfCorrectAnswers)
    })
}

function showQuestion(questionNumber) {
    question.innerText = questions[questionNumber].title;
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].innerText = questions[questionNumber].answers[i];
    }
}