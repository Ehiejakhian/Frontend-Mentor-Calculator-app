
/* Check If document is ready */
$(document).ready(function(){
  changeTheme(0)
  let $themeSwitch = $('#range-input');
  $themeSwitch.on("input",function(e){
    changeTheme(e.target.value);
    //console.log($('html')[0].classList)
  })

  let screen = $('#number-input');
  screen.on('keydown', function(e){
    console.log(e.key);
    numbers.forEach(key=>{
      console.log
      if (key.textContent == e.key) {
        key.classList.add('pressed');
        setTimeout(()=>{
          key.classList.remove('pressed');
        },100)
      } else if (e.key == 'Enter' && key.textContent == '=') {
        key.classList.add('pressed');
        setTimeout(()=>{
          key.classList.remove('pressed');
        },100)
      } else if (e.key == 'Backspace' && key.textContent == 'del') {
        key.classList.add('pressed');
        setTimeout(()=>{
          key.classList.remove('pressed');
        },100)
      } else if (e.key == '*' && key.textContent == '×') {
        key.classList.add('pressed');
        setTimeout(()=>{
          key.classList.remove('pressed');
        },100)
      } else if (e.key == 'Escape' && key.textContent == 'reset') {
        key.classList.add('pressed');
        setTimeout(()=>{
          key.classList.remove('pressed');
        },100)
      }
    })
  })
})

/* Change theme based on user input */
function changeTheme(themeNumber) {
  if (themeNumber == 0) {
    $('html').addClass('theme1'/* , 1000, 'swing' */)
    $('html').removeClass('theme2'/* , 1000, 'swing' */)
    $('html').removeClass('theme3'/* , 1000, 'swing' */)
  }else if (themeNumber == 1) {
    $('html').removeClass('theme1'/* , 1000, 'swing' */)
    $('html').addClass('theme2'/* , 1000, 'swing' */)
    $('html').removeClass('theme3'/* , 1000, 'swing' */)
  } else if (themeNumber == 2) {
    $('html').removeClass('theme1'/* , 1000, 'swing' */)
    $('html').removeClass('theme2'/* , 1000, 'swing' */)
    $('html').addClass('theme3'/* , 1000, 'swing' */)
  }
}