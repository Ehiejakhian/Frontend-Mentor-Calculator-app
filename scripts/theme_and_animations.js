
/* Check If document is ready */
$(document).ready(function(){
  changeTheme(0)
  let $themeSwitch = $('#range-input');
  $themeSwitch.click(function(e){
    changeTheme(e.target.value);
    //console.log($('html')[0].classList)
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