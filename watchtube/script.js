console.log('hello world')

let name = 'WatchTube'
let title = document.getElementById('title')

title.innerHTML = `<h1>${name}</h1>`

//Store them into an Object
const squares = document.querySelectorAll('.colorSquare')
const texts = document.querySelectorAll('.viewText')
const testerText =  document.getElementById('test-text')

const timesClicked = {
  'red': 0,
  'yellow': 0,
  'green': 0
}

squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] +=1
    square.innerText = timesClicked[square.value]
    texts[0].innerText = timesClicked.red
    texts[1].innerText = timesClicked.yellow
    texts[2].innerText = timesClicked.green
  }
})

function clearScores() {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => {
    square.innerText = ''
  })
  texts.forEach(text => {
    text.innerText = `0`
  })
}

const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()


function testGame() {
  let result = timesClicked.red + timesClicked.yellow + timesClicked.green
  testerText.innerText = `${result}`
}

//Next is to test what is the difference between using .innerText and .value when trying to do calculations
//InnerText only works with the code where there is the closing tags
//JS not linking to the tip calculator HTML
const testGameBtn = document.getElementById('test-game')
testGameBtn.onclick = () => testGame()
