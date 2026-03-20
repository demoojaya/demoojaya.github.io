// Typing effect
const text="Hi, I'm Dimasha Jayathilaka 👋"; let i=0;
function typing(){ if(i<text.length){ document.getElementById("typing").innerHTML+=text.charAt(i); i++; setTimeout(typing,50);} }
typing();

// Fade in scroll
const faders=document.querySelectorAll('.fade');
function showOnScroll(){ faders.forEach(el=>{ if(el.getBoundingClientRect().top < window.innerHeight-50){ el.classList.add('show');}});}
window.addEventListener('scroll',showOnScroll);
showOnScroll();

// Light/Dark Toggle
const toggleBtn=document.getElementById('theme-toggle');
toggleBtn.addEventListener('click',()=>{
  document.body.classList.toggle('light-theme');
  const icon=toggleBtn.querySelector('i');
  icon.classList.contains('fa-moon') ? icon.classList.replace('fa-moon','fa-sun') : icon.classList.replace('fa-sun','fa-moon');
});