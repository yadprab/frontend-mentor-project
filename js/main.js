
const cardFn = ()=>{
  const button = document.querySelector('#social--media');
  
const showFn = (e)=>{
  e.preventDefault();
  const overlay = document.querySelector('.overlay');
  
  
  overlay.classList.toggle('hide')
  
}  
  
  
  
button.addEventListener('click', showFn);  
}





window.addEventListener("DOMContentLoaded", cardFn)