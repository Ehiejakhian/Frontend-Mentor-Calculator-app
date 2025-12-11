
/*Collect the elements into variables */
let screen = document.querySelector('#number-input')
screen.addEventListener('input', (e)=>{
  checkInput(e.target.value[e.target.value.length - 1],screen)
})

let numbers = document.querySelectorAll('.key');
numbers.forEach(key=>{
  if (key) {
    key.addEventListener('click', ()=>{
      checkInput(key.textContent,key)
    })
  }
})

/*Number holding variables */
let firstNumber = Number();
let secondNumber = Number();

function checkInput(key,sender) {
  let screenValue = screen.value;

  screenValue = `${screen.value}`
  
  if (sender !== screen) {
    if (parseInt(key) || key == 0 || key == '.') {
      screen.value = (screenValue + key)
    } else if (!(parseInt(key) || key == 0 || key == '.')) {
      firstNumber = parseFloat(screen.value)
      screen.value = Number();
      checkKeyType(key)
    }
  } else if (sender === screen) {
    if (!(parseInt(key))) {
      let screenArr = screenValue.replace(key,'')
      firstNumber = parseFloat(screenArr);
      screen.value = Number();
      checkKeyType(key)
    }
  }
}

let plus = false;
let minus = false;
let divide = false;
let multiply = false;
let reset = false;
let del = false;

function checkKeyType(keyType) {
  switch (keyType) {
    case '+':
      plus = true;
      break;
    case '-':
      minus = true;
      break;
    case '/':
      divide = true;
      break;
    case '×':
      multiply = true;
      break;
    case '*':
      multiply = true;
      break;
    case 'reset':
      reset = true;
      break;
    case 'del':
      del = true;
      break;
    default:
      console.log('No be calculator key - ', keyType)
    break;
  }
}

let equalTo = document.querySelector('.equal-to');
equalTo.addEventListener('click',()=>{
  secondNumber = screen.value
  console.log(equalTo.textContent)
  if (plus) {
    console.log(firstNumber)
    console.log(secondNumber)
    screen.value = parseFloat(firstNumber) + parseFloat(secondNumber)
  }
})


//function that listens to events and checks if the input value is a number so that it can render or not render it in the calculator input

//function that gets the value and calculates it.
