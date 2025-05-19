const questions = [{
        question: "What is the capital of India?",
        answers: [{
                text: "Delhi",
                correct: true
            },
            {
                text: "Madrid",
                correct: false
            },
            {
                text: "Berlin",
                correct: false
            },
            {
                text: "Lisbon",
                correct: false
            }
        ]
    },
    {
        question: "Who wrote 'Harrypotter'?",
        answers: [{
                text: "J.K Rowling",
                correct: true
            },
            {
                text: "Hemingway",
                correct: false
            },
            {
                text: "Fitzgerald",
                correct: false
            },
            {
                text: "Dante",
                correct: false
            }
        ]
    },
    {
        question: "Who discoverd 'Telephone'?",
        answers: [{
                text: "newton",
                correct: false
            },
            {
                text: "Abhram linkon",
                correct: false
            },
            {
                text: "Graham Bell",
                correct: true
            },
            {
                text: "Dante",
                correct: false
            }
        ]
    }

];

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.innerText = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct === "true";
    Array.from(answerButtons.children).forEach(btn => {
        setStatusClass(btn, btn.dataset.correct === "true");
        btn.disabled = true;
    });
    nextButton.style.display = "block";
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz Finished!");
        startQuiz();
    }
});

startQuiz();
