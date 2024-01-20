let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;


const quizArray = [
    {
        id: "0",
        
        question: "it includes the use of personal pronouns",
        options: [
            "personalization principle",
            "coherence principle",
            "abstraction principle",
            "modularity principle",
        ],
        correct: "personalization principle",
    },
    {
        id: "1",
        question: "uses a human voice rather than a computer",
        options: [
            "voice principle",
            "embodiment principle",
            "coding principle",
            "moduefficiencylarity principle",
        ],
        correct: "voice principle",
    },
    {
        id: "2",
        question: "a presented drawing as it reflects a real life social interaction",
        options: [
            "segmenting principle",
            "embodiment principle",
            "programming principle",
            "decomposition principle",
        ],
        correct: "embodiment principle",
    },
    {
        id: "3",
        question: "it states relevant visuals on the screen to be more effective",
        options: [
            "contiguity principle",
            "image principle",
            "abstract principle",
            "modality principle",
        ],
        correct: "image principle",
    },
    {
        id: "4",
        question: " people remember better from images than from words",
        options: [
            "true",
            "false",
            "maybe",
            "yes",
        ],
        correct: "true",
    },
    {
        id: "5",
        question: " includes vocal cues or visual highlights to a selection",
        options: [
            "signaling principle",
            "segmenting principle",
            "embodiment principle",
            "contiguity principle",
        ],
        correct: "signaling principle",
    },
    {
        id: "6",
        question: " it excludes interesting but irrelevant material",
        options: [
            "coherence principle",
            "embodiment principle",
            "image principle",
            "signaling principle",
        ],
        correct: "coherence principle",
    },
    {
        id: "7",
        question: " place printed words near any corresponding graphics",
        options: [
            "contiguity principle",
            "signaling principle",
            "redundancy principle",
            "image principle",
        ],
        correct: "contiguity principle",
    },
    {
        id: "8",
        question: " it includes on screen-text adding keywords as on-screen text",
        options: [
            "redundancy principle",
            "contiguity principle",
            "signaling principle",
            "embodiment principle",
        ],
        correct: "redundancy principle",
    },
    {
        id: "9",
        question: " when giving a multimedia explanation just use audio ",
        options: [
            "true ",
            "maybe ",
            "false ",
            "no",
        ],
        correct: "false",
    },
    {
        id: "10",
        question: " it provides option to view information on key terms",
        options: [
            "pre-training principle",
            "contiguity principle",
            "signaling principle",
            "segmenting principle",
        ],
        correct: "pre-training principle",
    },
    {
        id: "11",
        question: "  adds self-pacing options to enable learners to process information",
        options: ["segmenting principle","contiguity principle","decomposition principle",
            "pre-training principle",],
        correct: "segmenting principle",
    },
    {
        id: "12",
        question: "  uses graphic verbally rather than a text so that learners can listen",
        options: [
            "modality principle",
            "algorithmic principle",
            "multimedia principle",
            "pre-training principle",
        ],
        correct: "modality principle",
    },
    {
        id: "13",
        question: "  states that humans learn best from words and pictures than just words alone",
        options: [
            "modularity principle",
            "abstract principle",
            "multimedia principle",
            "redundancy principle",
        ],
        correct: "multimedia principle",
    },
    {
        id: "13",
        question: "  the foundation of all Mayer's principles are more effective than words alone",
        options: [
            "true",
            "false",
            "maybe",
            "yes",
        ],
        correct: "true",
    },
];

restart.addEventListener("click",()=>{
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener("click", (displayNext = ()=> {
    questionCount += 1;

    if(questionCount== quizArray.length){
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "Your Score is" + scoreCount + "out of" + questionCount;
    }else{
        countOfQuestion.innerHTML =    questionCount + 1 + " of " + quizArray.length + " Question ";

        quizDisplay(questionCount);
        count = 11;
        clearInterval(countdown);
        timerDisplay();
         }
    })
);

const timerDisplay = () => {
    countdown = setInterval (() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0){
            clearInterval(countdown);
            displayNext();
        }
     }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreater(){
    quizArray.sort(() => Math.random() - 0.5);

    for(let i of quizArray){
        i.options.sort(()=> Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question ";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="option-div" onclick= "checker (this)">
        ${i.options[0]}</button>
        <button class="option-div" onclick= "checker (this)">
        ${i.options[1]}</button>
        <button class="option-div" onclick= "checker (this)">
        ${i.options[2]}</button>
        <button class="option-div" onclick= "checker (this)">
        ${i.options[3]}</button>
        `;

        quizContainer.appendChild(div);
    }
}

function checker(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid") [questionCount];
    let options = question.querySelectorAll(".option-div");

    if(userSolution === quizArray[questionCount].correct){
        userOption.classList.add("correct");
        scoreCount++;
    }
    else{
        userOption.classList.add("incorrect");

        option.forEach((element) => {
            if((element.innerText = quizArray
                [questionCount].correct)){
                    element.classList.add("correct");
                }
        });
    }

    clearInterval(countdown);
    options.forEach((element)=> {
        element.disabled = true;
    });
}
function initial(){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreater();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};