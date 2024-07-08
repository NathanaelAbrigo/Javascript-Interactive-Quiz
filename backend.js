'use strict';

let userName = prompt("Enter your username: ");
let currentQuestionIndex = 0;

// console.log(userName)

const quizQuestions = [
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 2
    },
    {
        question: "Which element has the chemical symbol O?",
        options: ["Gold", "Oxygen", "Silver", "Hydrogen"],
        correctAnswer: 1
    },
    {
        question: "What is the currency used in Japan?",
        options: ["Dollar", "Euro", "Yen", "Peso"],
        correctAnswer: 2
    },
    {
        question: "Who wrote \"Romeo and Juliet\"?",
        options: ["Charles Dickens", "Mark Twain", "Jane Austen", "William Shakespeare"],
        correctAnswer: 3
    },
    {
        question: "Which ocean is the largest?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        correctAnswer: 0
    },
];

let userResponses = [];
let score = 0;

function startQuiz() {
    while (currentQuestionIndex < quizQuestions.length) {

        let currentQuestion = quizQuestions[currentQuestionIndex].question;
        let options = quizQuestions[currentQuestionIndex].options.map((option, index) => `${index}: ${option}`).join('\n');

        let userAnswer = getUserAnswer(currentQuestion, options);
        let isCorrect = checkAnswer(userAnswer);
        // giveFeedback(isCorrect); //already inside checkAnswer()

        userResponses.push({ 
            question: currentQuestion, 
            answer: userAnswer, 
            correctAnswer: quizQuestions[currentQuestionIndex].correctAnswer 
        });
        currentQuestionIndex++;
    }
    endQuiz();
}

function getUserAnswer(currentQuestion, options) {
    let answer = parseInt(prompt(currentQuestion + "\n\n" + options + "\n\n" + "What is your answer? (0,1,2,3) : "));
    return answer;
}

function checkAnswer(userAnswer) {
    
    let currentCorrectAnswer = quizQuestions[currentQuestionIndex].correctAnswer;
    let isCorrect;
    
    switch (userAnswer) {
        case 0:
            isCorrect = giveFeedback(userAnswer,currentCorrectAnswer)
            break;
        case 1:
            isCorrect = giveFeedback(userAnswer,currentCorrectAnswer)
            break;
        case 2:
            isCorrect = giveFeedback(userAnswer,currentCorrectAnswer)
            break;
        case 3:
            isCorrect = giveFeedback(userAnswer,currentCorrectAnswer)
            break;
        default:
            isCorrect = false;   
            alert("I don't know such values! Minus 1!!");
    }
    return isCorrect;
}

function giveFeedback(userAnswer,currentCorrectAnswer){
    let isCorrect;
    if(userAnswer == currentCorrectAnswer){
        alert("Correct! Good Job :)")
        isCorrect = true;
        score++
    }
    else
    {
        alert("Wrong! Nice Try :)")
        isCorrect = false;
    }
    return isCorrect;
}

function endQuiz(){
    alert("Congrats, " + userName + "! You have finished the interactive quiz with a score of " + score + "/" + quizQuestions.length)
    console.log(userResponses)
}

startQuiz();
