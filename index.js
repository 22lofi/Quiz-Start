const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
  }
  
  function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
  }

  function displayNextQuestion() {
    resetState()
    
    if (questions.length === currentQuestionIndex) {
      return finishGame()
    }
  
    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
      const newAsnwer = document.createElement("button")
      newAsnwer.classList.add("button", "answer")
      newAsnwer.textContent = answer.text
      if (answer.correct) {
        newAsnwer.dataset.correct = answer.correct
      }
      $answersContainer.appendChild(newAsnwer)
  
      newAsnwer.addEventListener("click", selectAnswer)
    })
  }

  function resetState() {
    while($answersContainer.firstChild) {
      $answersContainer.removeChild($answersContainer.firstChild)
    }
  
    document.body.removeAttribute("class")
    $nextQuestionButton.classList.add("hide")
  }
  
  function selectAnswer(event) {
    const answerClicked = event.target
  
    if (answerClicked.dataset.correct) {
      document.body.classList.add("correct")
      totalCorrect++
    } else {
      document.body.classList.add("incorrect") 
    }
  
    document.querySelectorAll(".answer").forEach(button => {
      button.disabled = true
  
      if (button.dataset.correct) {
        button.classList.add("correct")
      } else {
        button.classList.add("incorrect")
      }
    })
    
    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
  }
  
  function finishGame() {
    const totalQuestions = questions.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestions)
    
    let message = ""
  
    switch (true) {
      case (performance >= 90):
        message = "Nota 10! &#128512"
        break
      case (performance >= 70):
        message = "Muito bom! &#128518"
        break
      case (performance >= 50):
        message = "Bom! &#128521"
        break
      default:
        message = "Dá para fazer melhor, hein! &#128534"
    }
  
    $questionsContainer.innerHTML = 
    `
      <p class="final-message">
        Você acertou ${totalCorrect} de ${totalQuestions} questões!
        <span>Resultado: ${message}</span>
      </p>
      <button 
        onclick=window.location.reload() 
        class="button"
      >
        Refazer teste
      </button>
    `
  }

  const questions = [
    {
  question: '1) Qual tag abaixo não pertence ao HMTL?',
  answers: [
    { text: 'a) <br>', correct: false },
    { text: 'b) <color></color>', correct: true },
    { text: 'c) <span></span>', correct: false },
  ]
},
{
  question: '2) Qual a forma correta de se criar um link?',
  answers: [
    { text: 'a) <a href="link">link aqui</a>', correct: true },
    { text: 'b) <span href="link">Link aqui</span>lso', correct: false },
    { text: 'c) <link rel="Link" value="Link aqui">', correct: false }
  ]
},
{
  question: '3) Qual atributo devemos utilizar para inserir propriedades CSS?',
  answers: [
    { text: 'a) css=""', correct: false },
    { text: 'b) css-style=""', correct: false },
    { text: 'c) style=""', correct: true },
  ]
},
{
  question: '4) Qual a forma correta de se usar charset utf-8 na página?',
  answers: [
    { text: 'a) <html charset="UTF-8"></html>', correct: false },
    { text: 'b) <charset></charset>', correct: false },
    { text: 'c) <meta charset="UTF-8">', correct: true },

  ]
},
{
  question: '5) O javaScript é uma linguagem:',
  answers: [
    { text: 'a) compilada', correct: false },
    { text: 'b) interpretada', correct: true },

  ]
 },
]