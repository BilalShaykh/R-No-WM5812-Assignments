var questionsArray = [
    {
        question: 'The project to develop “First Nuclear Weapon” in the world by United States is known as ',
        answer: 'Manhattan Project',
        options: [
            'Liberty Project',
            'Manhattan Project',
            'Project Trinity',
        ]
    },
    {
        question: 'The largest excretory organ of the human body is',
        answer: 'skin',
        options: [
            'skin',
            'lungs',
            'none of these',
        ]
    },
    {
        question: 'Which country is the worst-hit country by the Covid-19?',
        answer: 'United States',
        options: [
            'United States',
            'China',
            'United Kingdom',
        ]
    },
    {
        link: 'end'
    }
]

function nextQuestion(e) {
    var questionChange = document.getElementById('question');
    questionChange.innerHTML = questionsArray[e].question;
    // questionChange.innerHTML = questionsArray[3].link;

    var inputStyle = document.getElementsByClassName('input-style');
    
    for (var i = 0; i < inputStyle.length; i++){
        
            
        inputStyle[i].innerHTML = questionsArray[e].options[i] 
           
       
    }
}

var numberCount = 0;
var score = 0
function numCount() {
    var target1 = document.getElementsByClassName('putActiveClass');
    console.log(target1[0].innerHTML)
    console.log(questionsArray[numberCount].answer)
    if (target1[0].innerHTML == questionsArray[numberCount].answer) {

        score += 10;
        console.log(score)
    }
    var quizScore = document.getElementById('score');
    quizScore.innerHTML = 'Total Score ' + score;
    numberCount++;
    removeActiveClass()
    nextQuestion(numberCount)
    
}



function active(e) {
    // var putActiveClass = document.getElementsByClassName('input-style')
    removeActiveClass()
    e.classList.add('putActiveClass')
    // nconsole.log(e.innerHTML)
    // console.log(numberCount)
    // cosole.log(questionsArray[numberCount].answer)
    
    // e.innerHTML = questionsArray[numberCount].answer
    
}

function removeActiveClass() {
    var removeClass = document.getElementsByClassName('putActiveClass');
    for (var i = 0; i < removeClass.length; i++){
        removeClass[i].classList.remove('putActiveClass')
    }
}


