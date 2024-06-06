let body = document.querySelector('body');
let button_link = document.querySelectorAll('[button-link]');

button_link.forEach(button=>{
  button.addEventListener('click', ()=>{
    let name = button.getAttribute('button-link');
    setAuthMode(name);
  });
});

function setAuthMode(name){
  body.setAttribute('auth-mode', name);
}
