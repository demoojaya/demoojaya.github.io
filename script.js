// Typing effect
const text = "Hi, I'm Dimasha Jayathilaka 👋";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();

// Fade-in on scroll
const faders = document.querySelectorAll('.fade');

function showOnScroll() {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll(); // initial check