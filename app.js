var light  = document.getElementById('light')
var forest = document.getElementById('forest')
var dark   = document.getElementById('dark')
var solar  = document.getElementById('solar')
var blue   = document.getElementById('blue')

var body = document.body
// TODO: Clean up all the even listeners into one event Listener. Right now it is not DRY.

// var drop = document.querySelector('.dropdown').addEventListener('click',(e) => {
// // Could listen to dropdown and then select/remove based on that....
// //   BUT the li doesn't take up all the width of the dropdown, meaning the user could click on something
// //    other than the 'a' button or circle div while not changing the theme.
//   console.log(e.target)
// })

light.addEventListener('click',()=>{
  body.classList.remove(...body.classList); 
  body.classList.add('lightMode');
  localStorage.setItem('userTheme', 'lightMode')
})
forest.addEventListener('click',()=>{
  body.classList.remove(...body.classList);
  body.classList.add('forestMode');
  localStorage.setItem('userTheme', 'forestMode')

})
dark.addEventListener('click',()=>{
  body.classList.remove(...body.classList);
  body.classList.add('darkMode');
  localStorage.setItem('userTheme', 'darkMode')

})
solar.addEventListener('click',()=>{
  body.classList.remove(...body.classList);
  body.classList.add('solarMode');
  localStorage.setItem('userTheme', 'solarMode')

})
blue.addEventListener('click',()=>{
  body.classList.remove(...body.classList);
  body.classList.add('blueMode');
  localStorage.setItem('userTheme', 'blueMode')

})

const theme = localStorage.getItem('userTheme')

if(theme){
  body.classList.add(theme);
}


