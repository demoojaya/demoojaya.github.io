// Typing Effect
const text = "Hi, I'm Dimasha Jayathilaka 👋";
let i = 0;
function typing(){
    if(i<text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}
typing();

// Fade-in on scroll
const faders = document.querySelectorAll('.fade');
function showOnScroll(){
    faders.forEach(el=>{
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight-50){
            el.classList.add('show');
        }
    });
}
window.addEventListener('scroll', showOnScroll);
showOnScroll(); // initial check

// Light/Dark Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('light-theme');
    const icon = toggleBtn.querySelector('i');
    if(document.body.classList.contains('light-theme')){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }else{
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});