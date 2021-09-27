const quizData = [
  {
    question:
      "Which house did Ronald Weasley get placed in?",
    a: "Ravenclaw",
    b: "Slytherin",
    c: "Gryffindor",
    d: "Hufflepuff",
    correct: "c",
  },

  {
    question: 'What does the "Obliviate" spell mean?',
    a: "Remove ones memory",
    b: "Protect yourself from Dark Magic",
    c: "Transform into somebody else",
    d: "Transport from one place to another",
    correct: "a",
  },

  {
    question: "Who killed Sirius Black so that he fell into the Veil?",
    a: "Lucius Malfoy",
    b: "Lord Voldemort",
    c: "Draco Malfoy",
    d: "Bellatrix Lestrange",
    correct: "d",
  },

  {
    question:
      "How many turns did Harry and Hermione require to go back in time with the Time Turner?",
    a: "10 turns",
    b: "3 turns",
    c: "17 turns",
    d: "1 turn",
    correct: "b",
  },

  {
    question:
      "Which position did Hermione Granger play when they played the giant game of chess in her first year?",
    a: "Pawn",
    b: "Bishop",
    c: "Castle",
    d: "Knight",
    correct: "c",
  },

  {
    question: "What is Severus Snapes Patronus Charm?",
    a: "A doe",
    b: "A deer",
    c: "A beaver",
    d: "A snake",
    correct: "a",
  },

  {
    question:
      "What was the event in the Triwizard Tournament called which meant that male would dance with female?",
    a: "The Magic Ball",
    b: "The Charm Ball",
    c: "The Triwizard Ball",
    d: "The Yule Ball",
    correct: "d",
  },

  {
    question: "What is Albus Dumbledore's brother called?",
    a: "Arthur",
    b: "Aberforth",
    c: "Aberfol",
    d: "Grindelwald",
    correct: "b",
  },

  {
    question:
      "What is the name of the girl ghost who haunts the female bathrooms and who died seeing the Basilisk?",
    a: "Haughty Hetty",
    b: "Scaredy-cat Sara",
    c: "Miserable Myrtle",
    d: "Moaning Myrtle",
    correct: "d",
  },

  {
    question: "Who murdered Albus Dumbledore?",
    a: "Draco Malfoy",
    b: "Bellatrix Lestrange",
    c: "Severus Snape",
    d: "Salazar Slytherin",
    correct: "c",
  },
];

const quiz = document.getElementById("Quiz");
const answers = document.querySelectorAll(".answer");
const question = document.querySelector("#question");
const aText = document.getElementById("aText");
const bText = document.getElementById("bText");
const cText = document.getElementById("cText");
const dText = document.getElementById("dText");
let tempArray = Array;
let currentQuiz = 0;
let score = 0;


function shuffleQuestions() {
    let currentIndex = quizData.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [quizData[currentIndex], quizData[randomIndex]] = [quizData[randomIndex], quizData[currentIndex]];
    }   
}

function shuffleAnswers(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

shuffleQuestions();

function loadQuiz() {    
  deSelectAnswers();
  const currentQuizData = quizData[currentQuiz];
  question.innerText = currentQuizData.question;

  tempArray = shuffleAnswers([currentQuizData.a, currentQuizData.b, currentQuizData.c, currentQuizData.d])
  aText.innerText = tempArray[0];
  bText.innerText = tempArray[1];
  cText.innerText = tempArray[2];
  dText.innerText = tempArray[3];
}
loadQuiz();

function deSelectAnswers() {
  answers.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
    let answer = "";

    answers.forEach((answers) => {
        if (answers.checked) {  
            if (answers.id === "a") {
                answer = tempArray[0];
            }
            else if (answers.id === "b") {
                answer = tempArray[1];
            }
            else if (answers.id === "c") {
                answer = tempArray[2];
            }
            else if (answers.id === "d") {
                answer = tempArray[3];
            }
            
        }
    });
    
  return answer;
}

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  
  if (answer === quizData[currentQuiz][quizData[currentQuiz].correct]) {
      
    score++;
  }
    
  currentQuiz++;

  if (currentQuiz < quizData.length) {
      if (answer.length == 0) {
          alert("Please Select your answer");
          currentQuiz--;
      }
      loadQuiz();
      nextQuestion();
  } else {
    quiz.innerHTML = `
        <h1>You answered ${score}/10 questions correctly 🧙🏻‍♂️</h1>
        <button class= "btn green" onclick= 'location.reload()'>Try again</button>
        `;
  }
});


function nextQuestion() {
    
    var elem = document.getElementById("bar");
    var width = 10 * (currentQuiz+1);                
           
    elem.style.width = width + "%";
    elem.innerHTML = width + "%";  
    
}