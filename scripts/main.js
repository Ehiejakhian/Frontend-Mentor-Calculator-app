
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
let number1 = 0;
let number2 = 0;
let ans = 0;

let plus = false;
let minus = false;
let divide = false;
let multiply = false;
let reset = false;
let del = false;
let equal = false;

function checkInput(key,sender) {
  let screenValue = screen.value;
  screenValue = `${screen.value}`
  
  if (sender !== screen) {
    if (parseInt(key) || key == 0 || key == '.') {
      if (screenValue == 0) {
        screen.value = key;
      } else {
        screen.value = (screenValue + key);
      }
    } else if (!(parseInt(key) || key == 0 || key == '.') && (key == '+' || key == '-' || key == '/' || key == '×')) {
      /* Clear Screen value and modify first Number globally*/
      number1 = parseFloat(screen.value);
      
      checkKeyType(key)
      screen.value = Number();
    }
  } else if (sender === screen) {
    if (!(parseInt(key)) && (key == '+' || key == '-' || key == '/' || key == '×')) {
      let screenArr = screenValue.replace(key,'')
      screen.value = screenArr;
      /* Clear Screen Value and modify first Number Globally */
      number1 = parseFloat(screen.value);
      console.log(number1)
      
      checkKeyType(key)
      screen.value = Number();
    }
  }
  return number1;
}
function checkKeyType(keyType) {
  switch (keyType) {
    case '+':
      plus = true;
      minus = false;
      divide = false;
      multiply = false;
      equal = false;
      break;
    case '-':
      plus = false;
      minus = true;
      divide = false;
      multiply = false;
      equal = false;
      break;
    case '/':
      plus = false;
      minus = false;
      divide = true;
      multiply = false;
      equal = false;
      break;
    case '×':
      plus = false;
      minus = false;
      divide = false;
      multiply = true;
      equal = false;
      break;
    case '*':
      plus = false;
      minus = false;
      divide = false;
      multiply = true;
      equal = false;
      break;
    case 'reset':
      reset = true;
      equal = false;
      break;
    case 'del':
      del = true;
      equal = false;
      break;
    case '=':
      equal = true;
      equal = false;
    default:
    break;
  }
}

let equalTo = document.querySelector('.equal-to')
equalTo.addEventListener('click', ()=>{
  console.log(number1, plus, minus, divide, multiply, equal);
  number2 = parseFloat(screen.value);
  if (plus) {
    ans = number1 + number2;
  } else if (minus) {
    ans = number1 - number2;
  } else if (multiply) {
    ans = number1 * number2;
  } else if (divide) {
    ans = number1 / number2;
  }
  screen.value = ans;
})

document.querySelector('.delete').addEventListener('click', ()=>{
  if (screen.value != NaN) {
    let hjk = screen.value.split('')
    hjk.pop()
    let mgh = hjk.join('');
    if (hjk.length < 1) {
      screen.value = 0;
    } else {
      screen.value = parseFloat(mgh)
    }
  }
})

document.querySelector('.reset').addEventListener('click', ()=>{
  screen.value = Number();
  plus = false;
  minus = false;
  divide = false;
  multiply = false;
  ans = Number();
})
