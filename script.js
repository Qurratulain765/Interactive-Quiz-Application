const questions = [
    {
        question: "What is the full form of HTML?",
        options: ["Hyper Text Preprocessor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What is the full form of CSS?",
        options: ["Common Style Sheet", "Colorful Style Sheet", "Cascading Style Sheet", "Computer Style Sheet"],
        answer: "Cascading Style Sheet"
    },
    {
        question: "Which programming language is executed in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "In which year was JavaScript first introduced?",
        options: ["1996", "1995", "1994", "None of these"],
        answer: "1995"
    },
    {
        question: "Which HTML tag is used to define internal CSS styles?",
        options: ["<script>", "<css>", "<style>", "<link>"],
        answer: "<style>"
    },
    {
        question: "How can you display 'Hello World' in a JavaScript alert box?",
        options: ["msg('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');", "alert('Hello World');"],
        answer: "alert('Hello World');"
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        options: ["color", "bgcolor", "background-color", "color-background"],
        answer: "background-color"
    },
    {
        question: "What is the correct syntax for creating a function in JavaScript?",
        options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "new function()"],
        answer: "function myFunction()"
    },
    {
        question: "Which HTML element is used to insert a line break?",
        options: ["<break>", "<br>", "<lb>", "<next>"],
        answer: "<br>"
    },
    {
        question: "Which CSS property is used to control the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: "font-size"
    }
];

const startBtn = document.querySelector(".start-button button");
const infoBox = document.querySelector(".info_box");
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");


const exitBtn = infoBox.querySelector(".quit");
const continueBtn = infoBox.querySelector(".restart");

const optionList = document.querySelector(".option_list");
const timerBox = document.querySelector(".timer_sec");
const nextBtn = document.querySelector(".next_btn");
const totalQues = document.querySelector(".total_qui span");

let qNo = 0;
let marks = 0;
let timer;
let timeLeft = 30;
let randomQues = [];

infoBox.style.display = "none";
quizBox.style.display = "none";
resultBox.style.display = "none";

startBtn.onclick = function () {
    startBtn.parentElement.style.display = "none";
    infoBox.style.display = "block";
};

exitBtn.onclick = function () {
    infoBox.style.display = "none";
    startBtn.parentElement.style.display = "block";
};

continueBtn.onclick = function () {
    infoBox.style.display = "none";
    quizBox.style.display = "block";

    randomQues = [...questions].sort(() => Math.random() - 0.5);

    qNo = 0;
    marks = 0;

    showQues(qNo);
    startTimer(timeLeft);
};

function showQues(index) {
    const quesText = document.querySelector(".que_text span");

    quesText.textContent =
        `${index + 1}. ${randomQues[index].question}`;

    optionList.innerHTML = "";

    randomQues[index].options.forEach(function (item) {

        let div = document.createElement("div");
        div.className = "option";

        let span = document.createElement("span");
        span.textContent = item;

        div.appendChild(span);

        div.onclick = function () {
            checkAns(div);
        };

        optionList.appendChild(div);
    });

    totalQues.innerHTML =
        `<p>${index + 1}</p><p>of</p><p>${randomQues.length}</p> Question`;

    nextBtn.style.display = "none";
}

function addIcon(box, type) {
    if (type === "right") {
        box.insertAdjacentHTML(
            "beforeend",
            '<div class="icon"><i class="fa-solid fa-check"></i></div>'
        );
    } else {
        box.insertAdjacentHTML(
            "beforeend",
            '<div class="icon1"><i class="fa-solid fa-xmark"></i></div>'
        );
    }
}

function checkAns(box) {

    clearInterval(timer);

    let userAns = box.querySelector("span").textContent;
    let rightAns = randomQues[qNo].answer;

    let allOpts = optionList.children;

    if (userAns === rightAns) {

        marks++;

        box.classList.add("correct");
        box.style.background = "#d4edda";
        box.style.borderColor = "#c3e6cb";

        addIcon(box, "right");

    } else {

        box.classList.add("incorrect");
        box.style.background = "#f8d7da";
        box.style.borderColor = "#f5c6cb";

        addIcon(box, "wrong");

        for (let i = 0; i < allOpts.length; i++) {

            if (
                allOpts[i].querySelector("span").textContent === rightAns
            ) {

                allOpts[i].classList.add("correct");
                allOpts[i].style.background = "#d4edda";
                allOpts[i].style.borderColor = "#c3e6cb";

                addIcon(allOpts[i], "right");
            }
        }
    }

    for (let i = 0; i < allOpts.length; i++) {
        allOpts[i].style.pointerEvents = "none";
    }

    nextBtn.style.display = "block";
}

nextBtn.onclick = function () {

    if (qNo < randomQues.length - 1) {

        qNo++;

        clearInterval(timer);

        showQues(qNo);
        startTimer(timeLeft);

    } else {

        clearInterval(timer);
        showScore();
    }
};

function startTimer(sec) {

    let time = sec;

    timerBox.textContent = time;

    timer = setInterval(function () {

        time--;

        if (time < 10) {
            timerBox.textContent = "0" + time;
        } else {
            timerBox.textContent = time;
        }

        if (time <= 0) {

            clearInterval(timer);

            timerBox.textContent = "00";

            let rightAns = randomQues[qNo].answer;
            let allOpts = optionList.children;

            for (let i = 0; i < allOpts.length; i++) {

                if (
                    allOpts[i].querySelector("span").textContent === rightAns
                ) {

                    allOpts[i].classList.add("correct");
                    allOpts[i].style.background = "#d4edda";

                    addIcon(allOpts[i], "right");
                }

                allOpts[i].style.pointerEvents = "none";
            }

            setTimeout(function () {

                if (qNo < randomQues.length - 1) {

                    qNo++;

                    showQues(qNo);
                    startTimer(timeLeft);

                } else {

                    showScore();
                }

            }, 1500);
        }

    }, 1000);
}

function showScore() {

    quizBox.style.display = "none";
    resultBox.style.display = "flex";

    let per = ((marks / randomQues.length) * 100).toFixed(0);

    let scoreBox = resultBox.querySelector(".score_text");

   
    let msg =
        per >= 50
            ? '<i class="fa-solid fa-trophy"></i> Congrats! '
            : '<i class="fa-solid fa-face-sad-tear"></i> Sorry! ';

    scoreBox.innerHTML =
        `${msg} You got <p>${marks}</p> out of <p>${randomQues.length}</p> (${per}%)`;
}

const replayBtn = resultBox.querySelector(".restart");
const quitBtn = resultBox.querySelector(".quit");

replayBtn.onclick = function () {

    resultBox.style.display = "none";
    quizBox.style.display = "block";

    qNo = 0;
    marks = 0;

    randomQues = [...questions].sort(() => Math.random() - 0.5);

    showQues(qNo);

    clearInterval(timer);

    startTimer(timeLeft);
};

quitBtn.onclick = function () {
    location.reload();
};